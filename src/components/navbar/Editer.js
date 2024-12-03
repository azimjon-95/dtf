import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMaximize2 } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Dropdown, Menu } from "antd";
import { FiMinimize2 } from "react-icons/fi";
import { AiOutlineEye, AiOutlineHistory } from "react-icons/ai";
import { TbRating18Plus } from "react-icons/tb";
import LoadingDots from "../../hooks/LoadingDots";

import "./styles/editer.css";

function Editer({ setShowModal }) {
  const [showModel, setShowModel] = useState(false);

  const closeModal = () => {
    setShowModal(null);
  };
  const menu = (
    <Menu className="custom-menu">
      <Menu.Item key="1">
        <span className="menu_item">
          <AiOutlineEye />  Предпросмотр
        </span>
      </Menu.Item>

      <Menu.Item key="2" >
        <span className="menu_item">
          <TbRating18Plus /> Снять отметку 18+
        </span>
      </Menu.Item>

      <Menu.Item key="3" >
        <span className="menu_item">
          <AiOutlineHistory /> История версий
        </span>
      </Menu.Item>
    </Menu>
  );

  // HTML title ni o'zgartirish
  useEffect(() => {
    document.title = "✏️ Новый пост"; // pen ikonkasi bilan nomni yangilash
  }, []);

  return (
    <div className="modal-editor" onClick={closeModal}>
      <div className={`${showModel ? "modal_ed_overflow" : "modal_ed"}`} onClick={(e) => e.stopPropagation()}>
        <div className="dtf_modal_head">
          {
            showModel ?
              <span onClick={() => setShowModel(false)}><FiMinimize2 /></span>
              :
              <span onClick={() => setShowModel(true)}><FiMaximize2 /></span>
          }
          <del onClick={closeModal}><IoMdClose /></del>
        </div>
        <div className="dtf_modal_box">


          <div className="user_model-box">
            <div className="user_model-bo_img"></div>
            <span>
              <b>Azimjon Mamutaliyev</b> <br />
              <select name="" id="">
                <option value="">Без темы</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </span>
          </div>
          <div className="text_ar_box"></div>

          <div className="text_ar_btns">
            <button>Опубликовать</button>
            <Dropdown overlay={menu} trigger={["click"]}>
              <div closeModal="moreHorizontal"><FiMoreHorizontal /></div>
            </Dropdown>

            <LoadingDots />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Editer;



