import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { TbDeviceIpadHorizontalCheck } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";

import './style.css'
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Settings = () => {

    return (
        <Layout>
            <div className="notification-continer">
                <div className="notification-header">
                    <h2>Настройки</h2>
                </div>
                <div className="ant-setting-inner_box">
                    <Link to="/settings/blog">
                        <div className="ant-setting-inner_card">
                            <div className="ant-setting-inner_card-icon">
                                <FaRegUser />
                            </div>
                            <div className="ant-setting-inner_card-text">
                                <b>Блог</b>
                                <p>Название, Описание</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/settings/feeds">
                        <div className="ant-setting-inner_card">
                            <div className="ant-setting-inner_card-icon">
                                <TbDeviceIpadHorizontalCheck />
                            </div>
                            <div className="ant-setting-inner_card-text">
                                <b>Ленты</b>
                                <p>Настройки лент, Фильтрация, Заблокированные</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/settings/general">
                        <div className="ant-setting-inner_card">
                            <div className="ant-setting-inner_card-icon">
                                <LuSettings />
                            </div>
                            <div className="ant-setting-inner_card-text">
                                <b>Настройки</b>
                                <p>Способы входа, Удаление аккаунта</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/settings/notifications">
                        <div className="ant-setting-inner_card">
                            <div className="ant-setting-inner_card-icon">
                                <IoNotificationsOutline />
                            </div>
                            <div className="ant-setting-inner_card-text">
                                <b>Уведомления</b>
                                <p>Уведомления, Письма</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </Layout>
    );
};

export default Settings;
