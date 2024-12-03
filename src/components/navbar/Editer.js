import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMaximize2 } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Dropdown, Menu } from "antd";
import { MdOutlineCheck } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import { BiGridVertical } from "react-icons/bi";
import PulseLoader from "react-spinners/PulseLoader";
import { AiOutlineEye, AiOutlineHistory } from "react-icons/ai";
import { TbRating18Plus } from "react-icons/tb";


import "./styles/editer.css";

function Editer({ setShowModal }) {
  const [showModel, setShowModel] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    setHasText(e.target.value.length > 0);
  };

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


  const plTexts = [
    "Однажды весной, в час небывалого...",
    "У меня есть мечта...",
    "Я комендор-сержант Хартман...",
    "Люди постоянно спрашивают меня...",
    "В уездном городе N было...",
    "Тишина царила вокруг, лишь шум ветра...",
    "Мы живем, как будто времени не существует...",
    "На далёкой окраине маленького городка...",
    "И вдруг, как гром среди ясного неба...",
    "Жизнь — это не то, что с нами происходит, а то, как мы на это реагируем..."
  ];

  const [placeholder, setPlaceholder] = useState("");

  // Random placeholder o'rnatish
  useEffect(() => {
    const randomText = plTexts[Math.floor(Math.random() * plTexts.length)];
    setPlaceholder(randomText);
  }, []); // Faqat bir marta bajariladi (komponent yuklanganda)


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
          <div className="text_ar_box">
            <div
              className="input_btn"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!(isFocused || !hasText || !isHovered) && (
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <BiGridVertical />
                </button>
              )}
              <input
                type="text"
                className="Заголовокs"
                placeholder="Заголовок"
                onFocus={() => setIsFocused(true)} // Fokus holatida
                onBlur={() => setIsFocused(false)} // Fokusdan chiqishda
                onChange={handleInputChange} // Matnni kuzatish
              />
            </div>

            <div
              className="input_btn_nexts"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!(isFocused || !hasText || !isHovered) ? (
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <BiGridVertical />
                </button>
              )
                : (
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <FiPlus />
                  </button>
                )
              }
              <input

                type="text"
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)} // Fokus holatida
                onBlur={() => setIsFocused(false)} // Fokusdan chiqishda
                onChange={handleInputChange} // Matnni kuzatish
              />
            </div>
          </div>

          <div className="text_ar_btns">
            <button>Опубликовать</button>
            <Dropdown overlay={menu} trigger={["click"]}>
              <div className="moreHorizontal"><FiMoreHorizontal /></div>
            </Dropdown>

            <p>
              Сохранено
              {
                isCheck ?
                  <PulseLoader color="#C9CCCF" size={2} speedMultiplier={0.9} style={{ marginBottom: "-1px" }} />
                  :
                  <MdOutlineCheck style={{ marginBottom: "2.5px" }} />
              }
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Editer;

