import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { FireOutlined } from "@ant-design/icons";
import { GoClock } from "react-icons/go";
import { BiMessageSquareCheck } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { PiCompass } from "react-icons/pi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiWarningOctagonLight } from "react-icons/pi";
import { IoStarOutline } from "react-icons/io5";
import { MdQrCodeScanner } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Application from "../application/Application";

function Sidebar() {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let sidebarLinks = [
    {
      id: 1,
      name: "Популярное",
      link: "/",
      icon: <FireOutlined />,
    },
    {
      id: 2,
      name: "Свежее",
      link: "/new",
      icon: <GoClock />,
    },
    {
      id: 3,
      name: "Моя лента",
      link: "/feed",
      icon: <BiMessageSquareCheck />,
    },
    {
      id: 4,
      name: "Сообщения",
      link: "/messages",
      icon: <RiMessage2Line />,
    },
    {
      id: 5,
      name: "Рейтинг",
      link: "/rating",
      icon: <PiCompass />,
    },
  ];

  let groupLinks = [
    {
      id: 1,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 2,
      name: "Игры по жанрам",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 3,
      name: "Игры по платформе Xbox",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 4,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 5,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 6,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 7,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 8,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 9,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 10,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 11,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 12,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 13,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 14,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
    {
      id: 15,
      name: "Игры",
      link: "/games",
      img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/72x72/-/format/webp",
    },
  ];

  const visibleLinks = showAll ? groupLinks : groupLinks.slice(0, 10);

  const sidebar_footer_links = [
    {
      id: 1,
      name: "О проекте",
      link: "/about",
      icon: (
        <AiOutlineExclamationCircle style={{ transform: "rotate(180deg)" }} />
      ),
    },
    {
      id: 2,
      name: "Правила",
      link: "/rules",
      icon: <PiWarningOctagonLight />,
    },
    {
      id: 3,
      name: "Реклама",
      link: "/help",
      icon: <IoStarOutline />,
    },
    {
      id: 4,
      name: "Приложения",
      link: "/help",
      icon: <MdQrCodeScanner />,
    },
  ];

  return (
    <div className="sidebar">
      {sidebarLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.link}
          className={({ isActive }) =>
            isActive ? "sidebar_item active" : "sidebar_item"
          }
        >
          {link.icon} {link.name}
        </NavLink>
      ))}

      <div className="group_lists">
        <span className="group_list_title">Темы</span>
        {visibleLinks.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            className="sidebar_group_list_item"
          >
            <img src={link.img} alt="logo" />
            <span>{link.name}</span>
          </Link>
        ))}
        {!showAll && (
          <button onClick={() => setShowAll(true)} className="show_more_button">
            <FaChevronDown /> Показать все
          </button>
        )}
      </div>

      <div className="sidebar_footer">
        <span className="sidebar_footer_title">DTF</span>
        {sidebar_footer_links.map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            className={({ isActive }) =>
              isActive ? "sidebar_footer_item active" : "sidebar_footer_item"
            }
          >
            {link.icon} {link.name}
          </NavLink>
        ))}
        {showModal && <Application setShowModal={setShowModal} />}
        <button
          onClick={() => setShowModal(true)}
          className="sidebar_footer_item"
        >
          <MdQrCodeScanner />
          Приложения
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
