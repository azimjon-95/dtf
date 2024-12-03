import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import "./styles/navbar.css";
import Editer from "./Editer";
import SignIn from "./SignIn";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showModal, setShowModal] = useState(null); // Modalni boshqarish uchun
  const token = true; // Tokenni o'rniga haqiqiy autentifikatsiya holatini kiriting

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };

  const openModal = (modalType) => {
    setShowModal(modalType);
  };


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

        <button onClick={() => openModal(token ? "write" : "login")}>
          <GoPencil /> Написать
        </button>
        <button onClick={() => openModal("login")}>Войти</button>
      </div>

      {/* Modalni ko'rsatish */}
      {showModal === "login" && (
        <SignIn setShowModal={setShowModal} />
      )}

      {showModal === "write" && (
        <Editer setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default Navbar;



