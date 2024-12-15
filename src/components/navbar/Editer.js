import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMaximize2 } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Dropdown, Menu, Select, Input, Avatar } from "antd";
import { MdOutlineCheck } from "react-icons/md";
import { TbWashDrycleanOff } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import { SearchOutlined } from "@ant-design/icons";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import PulseLoader from "react-spinners/PulseLoader";
import { AiOutlineEye, AiOutlineHistory } from "react-icons/ai";
import { TbRating18Plus } from "react-icons/tb";
import "./styles/editer.css";
import { useSelector } from "react-redux";

const menuOptions = [
  {
    value: "nodata",
    label: "Без темы",
    img: "",
  },
  {
    value: "games",
    label: "Игры",
    img: "https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "offtop",
    label: "Офтоп",
    img: "https://leonardo.osnova.io/097c16c9-4459-5f8d-9da6-ce8e76831f3e/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "questions",
    label: "Вопросы",
    img: "https://leonardo.osnova.io/b5463920-7d83-df60-e73e-52d547bf5ae0/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "viabu",
    label: "Виабу",
    img: "https://leonardo.osnova.io/561ac538-5c4d-5aa6-ba39-1d544f0f414c/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "music",
    label: "Музыка",
    img: "https://leonardo.osnova.io/1c00b5aa-00e4-5c78-a8ee-107725c1dcaf/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "creativity",
    label: "Творчество",
    img: "https://leonardo.osnova.io/34be5067-2cdf-2eb3-d9af-415abb861967/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "nightMusic",
    label: "Ночной музпостинг",
    img: "https://leonardo.osnova.io/fc1c9f9c-ab62-5bb1-b0bb-5674eb3502b2/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "cinema",
    label: "Кино и сериалы",
    img: "https://leonardo.osnova.io/5d198df0-3ba4-6837-b9c3-ac8c04fb9181/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "porno",
    label: "О, порно",
    img: "https://leonardo.osnova.io/b787c0f0-23f7-2537-76a0-f604ca50118f/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "video",
    label: "Видео",
    img: "https://leonardo.osnova.io/fac10315-1c6f-4dd0-1f7c-8fdd394acdad/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "cuteAnimals",
    label: "Милые животные",
    img: "https://leonardo.osnova.io/d043463b-7273-56ec-9f42-a896fc32cd77/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "memes",
    label: "Мемы",
    img: "https://leonardo.osnova.io/fe7edd7a-f3e2-540b-9230-1eaa1c3583c1/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "guides",
    label: "Гайды",
    img: "https://leonardo.osnova.io/47a6c16b-ed6a-1847-a573-f27ab8c3dc07/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "indie",
    label: "Инди",
    img: "https://leonardo.osnova.io/044c3d8c-3200-4bdc-c4e3-40e99fec6777/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "screenshots",
    label: "Скриншоты",
    img: "https://leonardo.osnova.io/7159cd56-f70b-59a8-be12-c433632e1fbf/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "noContextDTF",
    label: "no context DTF",
    img: "https://leonardo.osnova.io/66c425f3-b46c-3749-21d0-9cfa2ac67cc8/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "discounts",
    label: "Скидки",
    img: "https://leonardo.osnova.io/4b976a9b-6d27-1411-0d14-04725f32ebfa/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "art",
    label: "Арт",
    img: "https://leonardo.osnova.io/6fc2eb2e-d050-7bc1-f884-34721bdf353c/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "stalker",
    label: "S.T.A.L.K.E.R.",
    img: "https://leonardo.osnova.io/aa98709b-e47e-5d29-8933-ef775a61d689/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "toRead",
    label: "Почитать",
    img: "https://leonardo.osnova.io/0a4ffbce-37d2-0ad8-0326-5802e773262b/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "hardware",
    label: "Железо",
    img: "https://leonardo.osnova.io/2556f43c-9828-69ec-6072-931fe2417175/-/format/jpeg/-/scale_crop/72x72/",
  },
  {
    value: "life",
    label: "Жизнь",
    img: "https://leonardo.osnova.io/968a91e7-3a3c-5c79-a0cb-2b3df974a697/-/format/jpeg/-/scale_crop/72x72/",
  },
];

function Editer({ setShowModal }) {
  const userInfo = useSelector((state) => state.userInfo);


  const [showModel, setShowModel] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredInputId, setHoveredInputId] = useState(null); // Hozirda hover bo'lgan input ID sini saqlash uchun

  const handleInputChange = (e) => {
    setHasText(e.target.value.length > 0);
    setInputTitle(e.target.value);
  };

  const closeModal = () => {
    setShowModal(null);
    document.title = "DTF - игры, кино, сериалы, разработка, сообщество";
  };
  const menu = (
    <Menu className="custom-menu">
      <Menu.Item key="1">
        <span className="menu_item">
          <AiOutlineEye /> Предпросмотр
        </span>
      </Menu.Item>

      <Menu.Item key="2">
        <span className="menu_item">
          <TbRating18Plus /> Снять отметку 18+
        </span>
      </Menu.Item>

      <Menu.Item key="3">
        <span className="menu_item">
          <AiOutlineHistory /> История версий
        </span>
      </Menu.Item>
    </Menu>
  );

  // HTML title ni o'zgartirish
  useEffect(() => {
    if (inputTitle) {
      document.title = `✏️ ${inputTitle}`; // Inputdagi qiymatni title sifatida o'rnatish
    } else {
      document.title = "✏️ Новый пост"; // Default title
    }
  }, [inputTitle]); // inputTitle o'zgarganda effect ishlaydi

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
    "Жизнь — это не то, что с нами происходит, а то, как мы на это реагируем...",
  ];

  const [placeholder, setPlaceholder] = useState("");

  // Random placeholder o'rnatish
  useEffect(() => {
    const randomText = plTexts[Math.floor(Math.random() * plTexts.length)];
    setPlaceholder(randomText);
  }, []); // Faqat bir marta bajariladi (komponent yuklanganda)

  const [isFirstInputVisible, setIsFirstInputVisible] = useState(false); // Birinchi input ko'rinishini boshqarish

  const [elements, setElements] = useState([]);

  const addElement = () => {
    // Yangi inputni yaratish
    setElements((prevElements) => [
      ...prevElements,
      {
        id: prevElements.length + 1,
        inputValue: "", // Yangi input bo'sh qiymat bilan boshlanadi
        hasText: false,
      },
    ]);
  };

  useEffect(() => {
    if (elements.length >= 1 && !elements[elements.length - 1]?.inputValue) {
      setIsFirstInputVisible(true);
    } else {
      setIsFirstInputVisible(false);
    }
  }, [elements]);

  const handleInputChangese = (id, event) => {
    if (!event || !event.target) return;

    const value = event.target.value;
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id
          ? { ...el, inputValue: value, hasText: value.trim() !== "" }
          : el
      )
    );
  };

  const handleContainerClick = (e) => {
    // Agar ichidagi tugmalar yoki inputlar bosilmagan bo'lsa, addElement chaqiriladi
    if (
      !e.target.closest(".input_btn") &&
      !e.target.closest(".input_btn_nexts")
    ) {
      addElement();
    }
  };

  const handleWrapperClick = (e) => {
    if (!isFirstInputVisible) {
      handleContainerClick(e);
    }
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleVisibleChange = (visible) => {
    setIsDropdownVisible(visible);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredOptions = menuOptions.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const content = (
    <div className="dropdown-select">
      <Input
        placeholder="Поиск"
        value={searchText}
        onChange={handleSearch}
        className="custom-search-input"
        prefix={<SearchOutlined style={{ color: "#c9cccf" }} />} // Qidiruv ikonkasi
        style={{
          marginBottom: 5,
          background: "transparent",
          borderRadius: 8,
          color: "#c9cccf",
        }}
      />
      <div className="dropdown-select-box">
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(option)}
            className="opntiomImage"
            style={{ display: "flex", alignItems: "center" }}
          >
            {option.img === "" ? (
              <TbWashDrycleanOff
                style={{ fontSize: "24px", marginRight: "10px" }}
              />
            ) : (
              <img
                src={option.img}
                alt={option.label}
                style={{
                  width: 26,
                  height: 26,
                  marginRight: 8,
                  borderRadius: "50%",
                }}
              />
            )}
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="modal-editor" onClick={closeModal}>
      <div
        className={`${showModel ? "modal_ed_overflow" : "modal_ed"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dtf_modal_head">
          {showModel ? (
            <span onClick={() => setShowModel(false)}>
              <FiMinimize2 />
            </span>
          ) : (
            <span onClick={() => setShowModel(true)}>
              <FiMaximize2 />
            </span>
          )}
          <del onClick={closeModal}>
            <IoMdClose />
          </del>
        </div>
        <div className="dtf_modal_box">
          <div>
            <div className="user_model-box">
              <Avatar src={userInfo?.avatar || ""} size={45} />
              {/* <div className="user_model-bo_img">
              <img src={userInfo?.avatar || ""} alt="" />
            </div> */}
              <span>
                <b>{userInfo?.fullname || ""}</b> <br />
                <Dropdown
                  overlay={content}
                  trigger={["click"]}
                  title="Tanlang"
                  placement="bottom"
                  onOpenChange={handleVisibleChange}
                >
                  <div>
                    {selectedValue?.label || "Без темы"}{" "}
                    {isDropdownVisible ? <BsChevronUp /> : <BsChevronDown />}
                    {selectedValue?.img === "" ||
                      selectedValue?.img === undefined ? (
                      ""
                    ) : (
                      <span>
                        <img src={selectedValue?.img} alt="" />
                      </span>
                    )}
                  </div>
                </Dropdown>
              </span>
            </div>

            <div onClick={(e) => handleWrapperClick(e)} className="text_ar_box">
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

              {elements.map((element, index) => (
                <div
                  className="input_btn_nexts"
                  key={element.id}
                  style={{ marginBottom: "10px" }}
                  onMouseEnter={() => setHoveredInputId(element.id)} // Hoverga kirganida ID ni o'rnatish
                  onMouseLeave={() => setHoveredInputId(null)} // Hoverdan chiqqanida ID ni tozalash
                >
                  {hoveredInputId === element.id ? (
                    <button>
                      <BiGridVertical />
                    </button>
                  ) : (
                    <button>
                      <FiPlus />
                    </button>
                  )}
                  <input
                    type="text"
                    placeholder={
                      index === 0
                        ? placeholder // Birinchi input uchun alohida placeholder
                        : "Нажмите Tab для выбора инструмента" // Qolgan inputlar uchun umumiy placeholder
                    }
                    value={element?.inputValue || ""} // Har bir input qiymatini boshqarish
                    onChange={(e) => handleInputChangese(element.id, e)} // Input o'zgarishini kuzatish
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text_ar_btns">
            <button>Опубликовать</button>
            <Dropdown overlay={menu} trigger={["click"]}>
              <div className="moreHorizontal">
                <FiMoreHorizontal />
              </div>
            </Dropdown>

            <p>
              Сохранено
              {isCheck ? (
                <PulseLoader
                  color="#C9CCCF"
                  size={2}
                  speedMultiplier={0.9}
                  style={{ marginBottom: "-1px" }}
                />
              ) : (
                <MdOutlineCheck style={{ marginBottom: "2.5px" }} />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editer;
