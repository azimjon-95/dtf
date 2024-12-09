import React, { useState } from "react";
import { Checkbox } from "antd";
import { HiArrowLeft } from "react-icons/hi";

import './style.css'
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const NotificationSettings = () => {
    const [emailNotifications, setEmailNotifications] = useState({
        commentReplies: true,
        mentions: true,
        newPostComments: false,
        newMessages: true,
        bestOfWeek: true,
        postRatings: true,
    });

    const [siteNotifications, setSiteNotifications] = useState({
        commentReplies: false,
        mentions: true,
        newPostComments: false,
        newFollowers: true,
        postRatings: true,
    });

    const [isSave, setIsSave] = useState(false); // Yangi isSave state qo'shildi

    const handleSave = () => {
        console.log("Saved settings:", { emailNotifications, siteNotifications });
        setIsSave(false); // Saqlashdan keyin false holatiga qaytarish
    };

    const handleEmailChange = (key) => {
        setEmailNotifications((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
        setIsSave(true); // O'zgarishda isSave true bo'ladi
    };

    const handleSiteChange = (key) => {
        setSiteNotifications((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
        setIsSave(true); // O'zgarishda isSave true bo'ladi
    };

    return (
        <Layout>
            <div className="notification-continer">
                <div className="notification-header">
                    <Link to="/settings">
                        <h2><HiArrowLeft /> Уведомления</h2>
                    </Link>
                    {isSave && ( // isSave true bo'lganda tugma ko'rinadi
                        <button onClick={handleSave}>Сохранить</button>
                    )}
                </div>
                <div className="ant-checkbox-inner_box">
                    <h3>Письма на почту</h3>
                    {Object.keys(emailNotifications).map((key) => (
                        <Checkbox
                            key={key}
                            checked={emailNotifications[key]}
                            onChange={() => handleEmailChange(key)}
                            className="ant-checkbox-inner_text"
                        >
                            {key === "commentReplies"
                                ? "Ответы на мои комментарии"
                                : key === "mentions"
                                    ? "Упоминания в комментариях"
                                    : key === "newPostComments"
                                        ? "Новые комментарии к постам"
                                        : key === "newMessages"
                                            ? "Новые сообщения"
                                            : key === "bestOfWeek"
                                                ? "Лучшее за неделю"
                                                : "Оценки постов и комментариев"}
                        </Checkbox>
                    ))}
                </div>
                <div className="ant-checkbox-inner_box">
                    <h3>Уведомления на сайте</h3>
                    {Object.keys(siteNotifications).map((key) => (
                        <Checkbox
                            key={key}
                            checked={siteNotifications[key]}
                            onChange={() => handleSiteChange(key)}
                            className="ant-checkbox-inner_text"
                        >
                            {key === "commentReplies"
                                ? "Ответы на мои комментарии"
                                : key === "mentions"
                                    ? "Упоминания в комментариях"
                                    : key === "newPostComments"
                                        ? "Новые комментарии к постам"
                                        : key === "newFollowers"
                                            ? "Новые подписчики"
                                            : "Оценки постов и комментариев"}
                        </Checkbox>
                    ))}
                </div>
            </div>
        </Layout >
    );
};

export default NotificationSettings;
