
import React, { useState } from "react";
import { Dropdown, Badge, List, Button } from "antd";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

import "./styles/navbar.css";
import Editer from "./Editer";
import SignIn from "./SignIn";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(null); // Modalni boshqarish uchun
  const token = true; // Tokenni o'rniga haqiqiy autentifikatsiya holatini kiriting

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };

  const openModal = (modalType) => {
    setShowModal(modalType);
  };




  const [notifications, setNotifications] = useState([
    { id: 1, message: "Новое сообщение от пользователя", read: false },
    { id: 2, message: "Комментарий на ваш пост", read: false },
    { id: 3, message: "Вас упомянули в комментарии", read: true },
  ]);

  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const notificationList = (
    <div style={{ width: 300 }}>
      <List
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item style={{ padding: "10px", background: item.read ? "#f0f0f0" : "#fff" }}>
            {item.message}
          </List.Item>
        )}
        footer={
          <Button
            type="link"
            onClick={handleMarkAllAsRead}
            style={{ textAlign: "center", width: "100%" }}
          >
            Отметить все как прочитанное
          </Button>
        }
      />
    </div>
  );
  return (
    <div className="Navbar">
      <h1>DTF</h1>

      <div className="nav_links">
        <div className="search-box">
          <div className={`search-bar ${showSearch ? "show" : "search-bar_none"}`}>
            <IoSearch />
            <input type="text" placeholder="Поиск" />
          </div>

          {!showSearch ? (
            <button className="search-bar_icon" onClick={toggleSearchBar}>
              <IoSearch />
            </button>
          ) : null}
        </div>

        {/* <span className="notifications_navbar">
          <IoNotificationsOutline />
          <div className="notifications_navbar_news">2</div>
        </span> */}
        <Dropdown overlay={notificationList} trigger={['click']} placement="bottomRight">
          <span className="notifications_navbar" style={{ position: "relative", cursor: "pointer" }}>
            <IoNotificationsOutline size={24} />
            {unreadCount > 0 && (
              <Badge
                count={unreadCount}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  background: "#ff4d4f",
                  color: "#fff",
                }}
              />
            )}
          </span>
        </Dropdown>

        <button onClick={() => openModal(token ? "write" : "login")}>
          <GoPencil /> Написать
        </button>
        <button onClick={() => openModal("login")}>Войти</button>
      </div>

      {/* Modalni ko'rsatish */}
      {
        showModal === "login" && (
          <SignIn setShowModal={setShowModal} />
        )
      }

      {
        showModal === "write" && (
          <Editer setShowModal={setShowModal} />
        )
      }
    </div >
  );
}

export default Navbar;



