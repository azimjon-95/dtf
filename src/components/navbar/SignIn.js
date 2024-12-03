import React from "react";
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import "./styles/signIn.css";

function SignIn({ setShowModal }) {
  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="dtf_modal">DTF</div>

        <h2>Вход в аккаунт</h2>

        <button className="auth_login">
          <FcGoogle /> Продолжить с Google
        </button>
        <button className="auth_login">
          <IoLogoApple />   Продолжить с Apple
        </button>
        <button className="auth_login">
          <MdOutlineMail /> Почта
        </button>

        <del onClick={closeModal}><IoMdClose /></del>
        <p>Нет аккаунта? <Link>Регистрация</Link> </p>
      </div>
    </div>
  );
}

export default SignIn;



