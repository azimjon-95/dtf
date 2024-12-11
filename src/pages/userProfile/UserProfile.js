import React, { useState, useRef, useEffect } from "react";
import './style.css'
import Layout from "../../components/layout/Layout";
import { useSelector } from "react-redux";
import { LuSettings } from "react-icons/lu";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PiImageSquareBold } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { Dropdown, Menu } from 'antd';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [image, setImage] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const fileInputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false); // Tahrirlash holati
    const userData = useSelector((i) => i.userInfo);

    const [selectedCategory, setSelectedCategory] = useState('Свежее');
    const [selectedOpen, setSelectedOpen] = useState(false);

    const handleMenuClick = ({ key }) => {
        setSelectedCategory(key);
    };

    const handleDropdownVisibleChange = (visible) => {
        setSelectedOpen(visible);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Fayl tanlash oynasini ochish
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
                setIsEditing(true); // Tahrirlashni boshlash
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrag = (e) => {
        const coverElement = document.querySelector(".cover-image");
        const imgElement = coverElement.querySelector("img");

        const rect = coverElement.getBoundingClientRect();
        const imgRect = imgElement.getBoundingClientRect();

        let newX = position.x + e.movementX;
        let newY = position.y + e.movementY;

        // Rasm cheklovlarini hisoblash
        const minX = Math.min(0, rect.width - imgRect.width);
        const minY = Math.min(0, rect.height - imgRect.height);
        const maxX = 0;
        const maxY = 0;

        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        setPosition({ x: newX, y: newY });
    };

    const handleMouseDown = () => {
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleSave = () => {
        console.log("Image saved with position:", position);
        setIsEditing(false); // Tahrirlashni yakunlash
    };

    const handleCancel = () => {
        setImage(null);
        setPosition({ x: 0, y: 0 });
        setIsEditing(false); // Tahrirlashni bekor qilish
    };

    const handleEditCover = () => {
        setIsEditing(true); // Qayta tahrirlashni boshlash
    };


    const joinDate = userData?.createdAt;
    const formattedDate = joinDate ? new Date(joinDate).toLocaleDateString('ru-RU') : '';

    const profile = {
        name: userData?.fullname || "",
        joinDate: formattedDate,
        avatar: userData?.avatar,
    };


    // HTML title ni o'zgartirish
    useEffect(() => {
        if (userData?.fullname) {
            document.title = userData.fullname;
        } else {
            document.title = "DTF - игры, кино, сериалы, разработка, сообщество";
        }
    }, [userData?.fullname]);


    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                { key: 'Свежее', label: 'Свежее' },
                { key: 'Популярное', label: 'Популярное' },
                { key: 'Топ за месяц', label: 'Топ за месяц' },
                { key: 'Топ за год', label: 'Топ за год' },
            ]}
        />
    );


    return (
        <Layout>
            <div className="UserProfile-continer">
                <div className="app-container">
                    <div className="profile-card">
                        {!image ? (
                            <div className="cover-image">
                                <button
                                    onClick={handleButtonClick}
                                    className="upload_image"
                                >
                                    <PiImageSquareBold />  Добавить обложку
                                </button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    style={{ display: "none" }} // Fayl inputini yashirish
                                />
                            </div>
                        ) : (
                            <div className="cover-image">
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    onMouseDown={handleMouseDown}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        position: "absolute",
                                        top: `${position.y}px`,
                                        left: `${position.x}px`,
                                    }}
                                />
                                {isEditing ? (
                                    <div className="actions_image_box">
                                        <button onClick={handleCancel} style={{ background: '#2C2C2C' }}>
                                            Отменить
                                        </button>
                                        <button onClick={handleSave} style={{ background: '#007BFF' }}>
                                            Сохранить
                                        </button>
                                    </div>
                                ) : (
                                    <button className="actions_image_edit"
                                        onClick={handleEditCover}   >
                                        <GoPencil />  Редактировать обложку
                                    </button>
                                )}
                            </div>
                        )}
                        <div className="profile-info">

                            <img src={userData?.avatar} alt="User Avatar" className="avatar" />

                            <h2>{profile.name}</h2>
                            <span>+1 <p> c {profile.joinDate}</p></span>

                            <strong>
                                <p>{userData?.followers?.length} подписчиков</p>
                                <p>{userData?.following?.length} подписок</p>
                            </strong>

                            <div className="buttons">
                                <button
                                    className={activeTab === 'posts' ? 'active' : ''}
                                    onClick={() => setActiveTab('posts')}
                                >
                                    Посты
                                </button>
                                <button
                                    className={activeTab === 'comments' ? 'active' : ''}
                                    onClick={() => setActiveTab('comments')}
                                >
                                    Комментарии
                                </button>
                            </div>
                            <button><LuSettings /></button>
                        </div>
                    </div>


                    {activeTab === 'posts' && <div className='profile-posts'>
                        <div style={{ marginBottom: '5px' }}>
                            <Dropdown
                                overlay={menu}
                                trigger={['click']}
                                onOpenChange={handleDropdownVisibleChange}
                            >
                                <button className="profile-select" >
                                    {selectedCategory} {selectedOpen ? < BsChevronUp /> : <BsChevronDown />}
                                </button>
                            </Dropdown>
                        </div>
                        <div className="profile-card_main"><p>Здесь пока ничего нет</p></div>
                    </div>}
                    {activeTab === 'comments' && <div className='profile-posts'>
                        <div style={{ marginBottom: '5px' }}>
                            <Dropdown
                                overlay={menu}
                                trigger={['click']}
                                onOpenChange={handleDropdownVisibleChange}
                            >
                                <button className="profile-select" >
                                    {selectedCategory} {selectedOpen ? < BsChevronUp /> : <BsChevronDown />}
                                </button>
                            </Dropdown>
                        </div>
                        <div className="profile-card_main"><p>Здесь пока ничего нет</p></div>
                    </div>}



                </div>
            </div>
        </Layout>
    );
};

export default UserProfile;

