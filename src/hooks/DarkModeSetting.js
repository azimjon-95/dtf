import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../context/darkModeSlice";
import '../index.css'

const DarkModeSetting = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.darkMode.theme);

    const applyTheme = (theme) => {
        document.body.setAttribute("data-theme", theme); // Tema qo'llash
        dispatch(setTheme(theme)); // Reduxga o'zgartirish kiritish
    };

    React.useEffect(() => {
        applyTheme(theme); // Foydalanuvchi tanlovini qo'llash
    }, [theme]);

    return (
        <div className="dark_setting_box">
            <button
                style={{ textAlign: "center", width: "100%" }}
                onClick={() => applyTheme("system")}
            >
                Как на устройстве
            </button>
            <button
                style={{ textAlign: "center", width: "100%" }}
                onClick={() => applyTheme("light")}
            >
                Светлая
            </button>
            <button
                style={{ textAlign: "center", width: "100%" }}
                onClick={() => applyTheme("dark")}
            >
                Тёмная
            </button>
        </div>
    );
};

export default DarkModeSetting;
