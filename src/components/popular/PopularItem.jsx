import React, { useEffect, useRef, useState } from "react";
import { Menu, Dropdown } from "antd";
import {
  EllipsisOutlined,
  FlagOutlined,
  GiftOutlined,
  HeartOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { FaRegBookmark } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

import cat from "../../assets/reactions/cat.png";
import cubic from "../../assets/reactions/cubic.png";
import cubic2 from "../../assets/reactions/cubic2.png";
import diamond from "../../assets/reactions/diamond.png";
import dinazavr from "../../assets/reactions/dinazavr.png";
import down from "../../assets/reactions/down.png";
import eggplant from "../../assets/reactions/eggplant.png";
import eighten from "../../assets/reactions/eighten.png";
import eyes from "../../assets/reactions/eyes.png";
import fire from "../../assets/reactions/fire.png";
import funny from "../../assets/reactions/funny.png";
import gamgin from "../../assets/reactions/gamgin.png";
import glassSmile from "../../assets/reactions/glassSmile.png";
import heartSmile from "../../assets/reactions/heart.png";
import jahl from "../../assets/reactions/jahl.png";
import knife from "../../assets/reactions/knife.png";
import lips from "../../assets/reactions/lips.png";
import masqaraboz from "../../assets/reactions/masqaraboz.png";
import maxluq from "../../assets/reactions/maxluq.png";
import olayish from "../../assets/reactions/olayish.png";
import person1 from "../../assets/reactions/person1.png";
import person2 from "../../assets/reactions/person2.png";
import person3 from "../../assets/reactions/person3.png";
import person4 from "../../assets/reactions/person4.png";
import person5 from "../../assets/reactions/person5.png";
import person6 from "../../assets/reactions/person6.png";
import person7 from "../../assets/reactions/person7.png";
import person8 from "../../assets/reactions/person8.png";
import popkorn from "../../assets/reactions/popkorn.png";
import shar from "../../assets/reactions/shar.png";
import strawberry from "../../assets/reactions/strawberry.png";
import sun from "../../assets/reactions/sun.png";
import tulki from "../../assets/reactions/tulki.png";

function ContentItem({ item }) {
  const [showReactions, setShowReactions] = useState(false); // Smilelarni ko'rsatish holati
  const [selectedReaction, setSelectedReaction] = useState(null); // Tanlangan reaksiya
  const reactionContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      reactionContainerRef.current &&
      !reactionContainerRef.current.contains(event.target)
    ) {
      setShowReactions(false);
    }
  };
  useEffect(() => {
    if (showReactions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showReactions]);

  const reactions = [
    { id: 1, url: heartSmile, premium: false },
    { id: 2, url: fire, premium: false },
    { id: 3, url: glassSmile, premium: false },
    { id: 4, url: funny, premium: false },
    { id: 5, url: tulki, premium: false },
    { id: 6, url: gamgin, premium: false },
    { id: 7, url: olayish, premium: false },
    { id: 8, url: jahl, premium: false },
    { id: 9, url: popkorn, premium: false },
    { id: 10, url: eyes, premium: false },
    { id: 11, url: masqaraboz, premium: true },
    { id: 12, url: maxluq, premium: true },
    { id: 13, url: dinazavr, premium: true },
    { id: 14, url: knife, premium: true },
    { id: 15, url: cat, premium: true },
    { id: 16, url: cubic, premium: true },
    { id: 17, url: cubic2, premium: true },
    { id: 18, url: diamond, premium: true },
    { id: 19, url: down, premium: true },
    { id: 20, url: eggplant, premium: true },
    { id: 21, url: eighten, premium: true },
    { id: 22, url: lips, premium: true },
    { id: 23, url: person1, premium: true },
    { id: 24, url: person2, premium: true },
    { id: 25, url: person3, premium: true },
    { id: 26, url: person4, premium: true },
    { id: 27, url: person5, premium: true },
    { id: 28, url: person6, premium: true },
    { id: 29, url: person7, premium: true },
    { id: 30, url: person8, premium: true },
    { id: 31, url: shar, premium: true },
    { id: 32, url: strawberry, premium: true },
    { id: 33, url: sun, premium: true },
  ];

  const menu = (
    <Menu
      style={{
        background: "#1f1f1f",
        border: "none", // Borderni o'chirish uchun
        color: "#c9cccf", // Textni rangini o'zgartirish uchun
      }}
      theme="light"
    >
      <Menu.Item key="1">
        <HeartOutlined /> Реакции
      </Menu.Item>
      <Menu.Item key="2">
        <GiftOutlined /> Подарить Plus
      </Menu.Item>
      <Menu.Item key="3">
        <FlagOutlined /> Пожаловаться
      </Menu.Item>
      <Menu.Item key="4">
        <EyeInvisibleOutlined /> Скрыть
      </Menu.Item>
    </Menu>
  );

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setShowReactions(false); // Smile oynasini yopish
    // Reaksiya qo'shish logikasi (masalan, API chaqiruvi)
    console.log(`Tanlangan reaksiya: ${reaction}`);
  };

  return (
    <div key={item} className="post_item">
      <div className="post_item_header">
        <div className="post_item_profile_info">
          <div className="post_item_profile_picture">
            <img
              src="https://leonardo.osnova.io/5ea7dcba-b430-5878-ba5a-a5398237a581/-/preview/1184x/-/format/webp/"
              alt=""
            />
          </div>
          <div>
            <p className="post_item_profile_info_name">Granger</p>
            <p className="post_item_profile_info_username">
              Реви с RPG
              <span>44м</span>
            </p>
          </div>
        </div>
        <div className="post_item_header_right">
          <button className="post_item_follow_btn">Подписаться</button>
          <Dropdown overlay={menu} trigger={["click"]}>
            <EllipsisOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
          </Dropdown>
        </div>
      </div>
      <div className="post_content">
        <p className="post_content_title">
          Исследование: геймеры тратят больше времени на просмотр видео об
          играх, чем на сами игры
        </p>
        <p className="post_content_text">
          Эксперты считают, что издателям нужно пользоваться этим и
          «интегрировать видеоконтент в игровые экосистемы».
        </p>
        <img
          src="https://leonardo.osnova.io/5ea7dcba-b430-5878-ba5a-a5398237a581/-/preview/1184x/-/format/webp/"
          alt="BLACKPINK"
          className="post-image"
        />
      </div>
      <div className="post-footer">
        <div className="reaction-buttons">
          <button>👍 10</button>
          <button>😂 132</button>
          <button>😢 232</button>
          <button>👀 51</button>
          <button>🔥 147</button>
          <button>💬 186</button>
          <button
            onClick={() => setShowReactions(!showReactions)}
            className="add_reaction_btn"
          >
            {showReactions && (
              <div className="reactions_container" ref={reactionContainerRef}>
                {reactions.map((icon) => (
                  <button
                    key={icon.id}
                    onClick={() => handleReactionClick(icon)}
                  >
                    <img src={icon.url} alt="" />
                    {icon.premium && <span className="premium_icon">💎</span>}
                  </button>
                ))}
              </div>
            )}
            <FiPlus />
          </button>
        </div>

        <div className="post_actions">
          <div className="post_actions_left">
            <button>
              <TbMessageCircle className="post_actions_comment_icon" /> 435
            </button>
            <button>
              <FaRegBookmark /> 123
            </button>
            <button>
              <PiArrowBendUpRightBold />
            </button>
            <button>
              <GiftOutlined />
            </button>
          </div>
          <span className="views">
            <IoEyeOutline className="views_icon" />
            <span>48K</span>
          </span>
        </div>
        <div className="post_comment_container">
          <figure>
            <img
              src="https://leonardo.osnova.io/c538048c-2517-5a39-92fa-e075d9afd21d/-/scale_crop/144x144/-/format/webp"
              alt=""
            />
          </figure>
          <p>
            Блин, а мне рассказали тут что Сталкер 2 хорошо работает и багов
            нет. А багов нет. А багов нет. А
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
