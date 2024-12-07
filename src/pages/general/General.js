import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Input, Typography } from 'antd';
import Layout from "../../components/layout/Layout";
import './style.css';
import { Link } from "react-router-dom";


const General = () => {
    const [isSave, setIsSave] = useState(false); // State to track changes
    const [fullName, setFullName] = useState(""); // State for fullName input
    const [description, setDescription] = useState(""); // State for description input

    // Handle save action
    const handleSave = () => {
        console.log("Saved settings:");
        setIsSave(false); // Reset isSave state after saving
    };

    // Handle input changes
    const handleFullNameChange = (e) => {
        setFullName(e.target.value); // Update fullName state
        setIsSave(true); // Set isSave to true on input change
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value); // Update description state
        setIsSave(true); // Set isSave to true on input change
    };

    return (
        <Layout>
            <div className="notification-continer">
                <div className="notification-header">
                    <Link to="/settings">
                        <h2><HiArrowLeft /> Основные</h2>
                    </Link>
                    {isSave && (
                        <button onClick={handleSave}>Сохранить</button> // Show save button if isSave is true
                    )}
                </div>

                <div className="ant-blog-inner_box">
                    <div>
                        <Typography.Title level={5}>Название</Typography.Title>
                        <Input
                            value={fullName}
                            onChange={handleFullNameChange} // Call onChange handler
                            showCount={25}
                            placeholder="Введите имя"
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Название</Typography.Title>
                        <Input
                            value={fullName}
                            onChange={handleFullNameChange} // Call onChange handler
                            showCount={25}
                            placeholder="Введите имя"
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Название</Typography.Title>
                        <Input
                            value={fullName}
                            onChange={handleFullNameChange} // Call onChange handler
                            showCount={25}
                            placeholder="Введите имя"
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Название</Typography.Title>
                        <Input
                            value={fullName}
                            onChange={handleFullNameChange} // Call onChange handler
                            showCount={25}
                            placeholder="Введите имя"
                        />
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default General;

