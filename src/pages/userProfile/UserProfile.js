import React, { useState, useRef } from "react";
import './style.css'
import Layout from "../../components/layout/Layout";
import { LuSettings } from "react-icons/lu";
import { PiImageSquareBold } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [image, setImage] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const fileInputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false); // Tahrirlash holati

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



    const profile = {
        name: "Azimjon Mamutaliyev",
        joinDate: "02.12.2024",
        avatar: "https://via.placeholder.com/100",
    };

    const posts = [
        {
            id: 1,
            author: 'Azimjon Mamutaliyev',
            date: '3 дек',
            avatar: 'https://via.placeholder.com/40',
            image: 'https://via.placeholder.com/600',
            likes: 1,
            comments: 1,
            views: 229,
        },
        // Yangi postlar qo'shish uchun shu yerga yozing...
    ];
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
                            <img src={profile.avatar} alt="User Avatar" className="avatar" />
                            <h2>{profile.name}</h2>
                            <span>+1 <p> c {profile.joinDate}</p></span>

                            <strong>
                                <p>0 подписчиков</p>
                                <p>0 подписок</p>
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

                    <div className="content">
                        {activeTab === 'posts' && <div className="box">Контент Постов</div>}
                        {activeTab === 'comments' && <div className="box">Контент Комментариев</div>}
                    </div>

                    {/* <div className="post-list">
                        {posts.map((post) => (
                            <div key={post.id} className="post-card">
                                <div className="post-header">
                                    <img src={post.avatar} alt="User Avatar" className="post-avatar" />
                                    <div>
                                        <h3>{post.author}</h3>
                                        <p>{post.date}</p>
                                    </div>
                                </div>
                                <img src={post.image} alt="Post Content" className="post-image" />
                                <div className="post-footer">
                                    <p>{post.likes} ❤️</p>
                                    <p>{post.comments} 💬</p>
                                    <p>{post.views} 👁️</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </Layout>
    );
};

export default UserProfile;

