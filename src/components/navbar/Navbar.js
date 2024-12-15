import React, { useEffect, useState } from "react";
import { Dropdown, List, Button, Avatar } from "antd";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { FiBookmark } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
import { BiRuble } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import diamond from "../../assets/diamond.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./styles/navbar.css";
import Editer from "./Editer";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import DarkModeSetting from "../../hooks/DarkModeSetting";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../api";
import { sendUserInfo } from "../../context/userInfoSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((s) => s.auth);

  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: "https://via.placeholder.com/32",
      content: "Ваш пост получил 1 реакцию",
      date: "3 дек",
      read: false,
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/32",
      content:
        "Zyxsch прокомментировал публикацию, на которую вы подписаны Salom",
      date: "3 дек",
      read: false,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/32",
      content:
        "Y. Volchek прокомментировал публикацию, на которую вы подписаны",
      date: "3 дек",
      read: false,
    },
    {
      id: 4,
      avatar: "https://via.placeholder.com/32",
      content:
        "Flexboy1945 и ещё 5 человек прокомментировали публикацию, на которую вы подписаны",
      date: "3 дек",
      read: false,
    },
  ]);

  // check token
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setToken(token);
    }
  }, [auth]);

  const openModal = (modalType) => setShowModal(modalType);

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const notificationSetting = (
    <div className="notificationList_Setting_box">
      <button
        type="link"
        onClick={handleMarkAllAsRead}
        style={{ textAlign: "center", width: "100%" }}
      >
        <HiOutlineEnvelope /> Пометить все как прочитанные
      </button>

      <Link to="/settings/notifications">
        <button
          type="link"
          // onClick={handleMarkAllAsRead}21`
          style={{ textAlign: "center", width: "100%" }}
        >
          <LuSettings /> Настройки уведомлений
        </button>
      </Link>
    </div>
  );
  const notificationList = (
    <div className="notificationList_modal">
      <div className="notificationList_navbar">
        <h3>Уведомления</h3>
        <Dropdown
          overlay={notificationSetting}
          trigger={["click"]}
          placement="bottomRight"
        >
          <button>
            <BiDotsHorizontalRounded />
          </button>
        </Dropdown>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <p style={{ color: "#fff", fontWeight: 500, fontSize: "13px" }}>
                  {item.content}
                </p>
              }
              description={
                <span style={{ color: "#ffffff93", fontWeight: 500 }}>
                  {item.date}
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );

  const openModalPay = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const logOut = ({ key }) => {
    if (key === "logout") {
      localStorage.removeItem("access_token");
      window.location.reload();
    }
    setMenuVisible(false);
  };

  // get user info
  useEffect(() => {
    if (token) {
      axios
        .get("/users/me")
        .then((res) => {
          dispatch(sendUserInfo(res?.data?.innerData));
          setUserInfo(res?.data?.innerData);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const menu = (
    <div className="avatar_modal">
      <div className="avatar__navbar">
        <h3>Мой профиль</h3>
      </div>

      <div className="avatar_menu_box">
        <Link to={`/u/${userInfo?._id}-${userInfo?.fullname}`}>
          <div className="avatar_myProfile">
            <Avatar
              size={45}
              src={userInfo?.avatar}
              onClick={(e) => e.preventDefault()}
            >
              {!userInfo?.avatar ? userInfo?.fullname?.slice(0, 1) : ""}
            </Avatar>
            <span>
              <h1>{userInfo?.fullname}</h1>
              <p>Личный блог</p>
            </span>
          </div>
        </Link>
        <Link to="/drafts">
          <button>
            <GoPencil /> Черновики
          </button>
        </Link>
        <Link to="/bookmarks">
          <button><FiBookmark /> Закладки</button>
        </Link>

        <span>
          <Link to="/settings" onClick={openModalPay}>
            <button>
              <BiRuble /> Донаты
            </button>

            <p>Подключить</p>
          </Link>
        </span>
        <span>
          <Link to="/settings">
            <button>
              <LuSettings /> Настройки
            </button>
          </Link>
          <Dropdown
            overlay={<DarkModeSetting />}
            trigger={["click"]}
            placement="bottomRight"
          >
            <b>
              <VscColorMode />
            </b>
          </Dropdown>
        </span>
        <button>
          <img width={20} src={diamond} alt="" /> Подписка Plus
        </button>
        <button onClick={() => logOut({ key: "logout" })}>
          <MdLogout /> Выйти
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div>
          {/* Blur Background */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1000,
            }}
            onClick={closeModal} // Modalni orqaga bosganda yopish
          />
        </div>
      )}
    </div>
  );
  return (
    <div className="Navbar">
      <h1>DTF</h1>
      <div className="nav_links">
        {/* Search Box */}
        <div className="search-box">
          {showSearch ? (
            <div className="search-bar show">
              <IoSearch />
              <input type="text" placeholder="Поиск" />
            </div>
          ) : (
            <button
              className="search-bar_icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <IoSearch />
            </button>
          )}
        </div>

        {/* Notifications */}
        {token && (
          <Dropdown
            overlay={notificationList}
            trigger={["click"]}
            placement="bottomRight"
          >
            <span className="notifications_navbar">
              <IoNotificationsOutline />
              {unreadCount > 0 && (
                <div className="notifications_navbar_news">2</div>
              )}
            </span>
          </Dropdown>
        )}
        {/* Buttons */}
        <Button
          icon={<GoPencil />}
          type="link"
          onClick={() => (!token ? openModal("login") : openModal("write"))}
        >
          Написать
        </Button>
        {token ? (
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            onOpenChange={(visible) => setMenuVisible(visible)}
            open={menuVisible}
          >
            <div className="avatar_user">
              <Avatar
                size={40}
                style={{ cursor: "pointer" }}
                onClick={(e) => e.preventDefault()}
                src={userInfo?.avatar}
              >
                {!userInfo?.avatar ? userInfo?.fullname?.slice(0, 1) : ""}
              </Avatar>
              <BsChevronDown />
            </div>
          </Dropdown>
        ) : (
          <Button type="link" onClick={() => openModal("login")}>
            Войти
          </Button>
        )}
      </div>

      {/* Modal rendering */}
      {showModal === "login" && <SignIn setShowModal={setShowModal} />}
      {showModal === "write" && <Editer setShowModal={setShowModal} />}

      {/* Modal Content */}
      {isModalOpen && (
        <div>
          {/* Blur Background */}
          <div className="navbar-modal-backdrop" onClick={closeModal} />

          {/* Modal Content */}
          <div className="navbar-modal-content">
            <h2>Подключить Донаты</h2>
            <p>Эта функциональность скоро будет доступна!</p>
            <button className="close-modal-btn" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
