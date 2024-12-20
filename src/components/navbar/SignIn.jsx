import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiChevronLeft } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { message } from "antd";

import { auth, provider } from "../../firebase";
import axios from "../../api/index";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { auth as authSlice } from "../../context/authSlice";

import "./styles/signIn.css";

function SignIn({ setShowModal }) {
  const dipatch = useDispatch();
  const authValue = useSelector((s) => s.auth);
  const [activeModal, setActiveModal] = useState("mainModal");
  const closeModal = () => setShowModal(null);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result?.user;
      let userInfo = {
        fullname: user.displayName,
        email: user.email,
        password: "123456",
        avatar: user.photoURL,
      };

      const { data } = await axios.post("/users/register", userInfo);

      localStorage.setItem("access_token", data.innerData.access_token);
      message[data.status](data.message);
      dipatch(authSlice(!authValue));
      closeModal();
    } catch (error) {
      message.error(error.response?.data?.message);
    }
  };

  const loginWithEmail = async (e) => {
    const auth = getAuth();
    try {
      e.preventDefault();
      let formData = new FormData(e.target);
      let obj = Object.fromEntries(formData);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        obj.email,
        obj.password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        let res = await axios.post("/users/login", obj);

        localStorage.setItem("access_token", res.data.innerData.access_token);
        message[res.data.status](res.data.message);
        dipatch(authSlice(!authValue));
        closeModal();
      } else {
        message.error("Подтвердите электронную почту!");
      }
    } catch (error) {
      if (error.code && error.code.startsWith("auth/")) {
        return message.error("Логин или пароль неверный");
      }
      message.error(error.response?.data?.message);
    }
  };

  const registerWithEmail = async (e) => {
    const auth = getAuth();
    try {
      e.preventDefault();
      let formData = new FormData(e.target);
      let obj = Object.fromEntries(formData);
      let res = await axios.post("/users/registerWithEmail", obj);
      // console.log(res.data);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        obj.email,
        obj.password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      // localStorage.setItem("access_token", res.data.innerData.access_token);
      // message[res.data.status](res.data.message);
      message.success("Подтвердите электронную почту!");
      // closeModal();
      dipatch(authSlice(!authValue));
      setActiveModal("emailModal");
    } catch (error) {
      message.error(error.response?.data?.message);
    }
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className={`main_modal ${
            activeModal === "mainModal" ? "active_modal" : ""
          }`}
        >
          <div className="dtf_modal">DTF</div>

          <h2>Вход в аккаунт</h2>

          <button onClick={loginWithGoogle} className="auth_login">
            <FcGoogle /> Продолжить с Google
          </button>
          {/* <button onClick={registerWithApple} s className="auth_login">
            <IoLogoApple /> Продолжить с Apple
          </button> */}
          <button
            onClick={() => setActiveModal("emailModal")}
            className="auth_login"
          >
            <MdOutlineMail /> Почта
          </button>

          <del onClick={closeModal}>
            <IoMdClose />
          </del>
          <p>
            Нет аккаунта?{" "}
            <Link onClick={() => setActiveModal("registerModal")}>
              Регистрация
            </Link>{" "}
          </p>
        </div>

        <form
          onSubmit={loginWithEmail}
          className={`main_modal modal_email ${
            activeModal === "emailModal" ? "active_modal" : ""
          }`}
        >
          <h2>Вход в аккаунт</h2>

          <input name="email" type="email" placeholder="Почта" />
          <input name="password" type="text" placeholder="Пароль" />
          <button type="submit" className="login_btn_email">
            Войти
          </button>
          <FiChevronLeft
            onClick={() => setActiveModal("mainModal")}
            className="arrow_left"
          />
          <del onClick={closeModal}>
            <IoMdClose />
          </del>
          <p className="forgot_password">Забыли пароль?</p>
        </form>

        <div
          className={`main_modal ${
            activeModal === "registerModal" ? "active_modal" : ""
          }`}
        >
          <div className="dtf_modal">DTF</div>

          <h2>Вход в аккаунт</h2>

          <button onClick={loginWithGoogle} className="auth_login">
            <FcGoogle /> Продолжить с Google
          </button>
          {/* <button className="auth_login">
            <IoLogoApple /> Продолжить с Apple
          </button> */}
          <button
            onClick={() => setActiveModal("emailRegisterModal")}
            className="auth_login"
          >
            <MdOutlineMail /> Почта
          </button>

          <FiChevronLeft
            onClick={() => setActiveModal("mainModal")}
            className="arrow_left"
          />

          <del onClick={closeModal}>
            <IoMdClose />
          </del>
          <span className="register_rules">
            Регистрируясь, вы соглашаетесь <br /> с
            <Link target="_blank" to={"/terms"}>
              {" "}
              условиями использования
            </Link>
          </span>
        </div>

        {/* register email and password  */}
        <form
          onSubmit={registerWithEmail}
          className={`main_modal modal_email ${
            activeModal === "emailRegisterModal" ? "active_modal" : ""
          }`}
        >
          <h2>Регистрация</h2>
          <input
            name="fullname"
            type="text"
            required
            placeholder="Имя или название"
          />
          <input name="email" type="email" required placeholder="Почта" />
          <input name="password" type="text" required placeholder="Пароль" />
          <button type="submit" className="login_btn_email">
            Зарегистрироваться
          </button>
          <FiChevronLeft
            onClick={() => setActiveModal("mainModal")}
            className="arrow_left"
          />
          <del onClick={closeModal}>
            <IoMdClose />
          </del>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
