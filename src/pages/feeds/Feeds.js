import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Input, Typography, Dropdown, Menu } from 'antd';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import './style.css';


const Blog = () => {
    const [isSave, setIsSave] = useState(false);
    const [selectedValue, setSelectedValue] = useState({});
    const [activeModal, setActiveModal] = useState(null);

    const options = {
        first: ['Популярное', 'Свежее', 'Моя лента'],
        second: ['По популярности', 'По дате'],
        third: ['Блюрить записи 18+ в ленте', 'Показать все'],
    };

    // Handle dropdown selection
    const handleMenuClick = (inputKey, value) => {
        setSelectedValue((prev) => ({ ...prev, [inputKey]: value }));
        setIsSave(true);
        setActiveModal(null); // Close dropdown after selection
    };

    const handleInputClick = (inputKey) => {
        setActiveModal((prev) => (prev === inputKey ? null : inputKey));
    };

    return (
        <Layout>
            <div className="notification-continer">
                <div className="notification-header">
                    <Link to="/settings">
                        <h2><HiArrowLeft /> Ленты</h2>
                    </Link>
                    {isSave && (
                        <button onClick={() => setIsSave(false)}>Сохранить</button>
                    )}
                </div>

                <div className="notification-continer-select">
                    {Object.keys(options).map((key) => (
                        <Dropdown
                            key={key}
                            overlay={
                                <Menu>
                                    {options[key].map((option) => (
                                        <Menu.Item
                                            key={option}
                                            onClick={() => handleMenuClick(key, option)}
                                        >
                                            {option}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            }
                            trigger={['click']}
                            open={activeModal === key}
                            onOpenChange={(visible) =>
                                setActiveModal(visible ? key : null)
                            }
                        >
                            <div className="ant-blog-inner_box">
                                <Typography.Title level={5}>Главная по умолчанию</Typography.Title>
                                <Input
                                    readOnly
                                    value={selectedValue[key] || ''}
                                    placeholder="Выберите опцию"
                                    onClick={() => handleInputClick(key)}
                                    suffix={activeModal === key ? <BsChevronDown /> : <BsChevronUp />}
                                />
                            </div>
                        </Dropdown>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;


