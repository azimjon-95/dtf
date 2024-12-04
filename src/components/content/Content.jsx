import React from "react";
import "./Content.css";
import Layout from "../layout/Layout";
import { Menu, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { GiftOutlined } from "@ant-design/icons";
import { FlagOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineArrowUturnRight } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";

import { PiArrowBendUpRightBold } from "react-icons/pi";

function Content() {
  let data = [1, 2, 3, 4, 5];

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

  return (
    <Layout>
      <div className="content">
        <div className="content_filter">
          <select
            name=""
            defaultValue={"five"}
            id=""
            className="content_filter_select"
          >
            <option value="new">Новое</option>
            <option value="five">От +5</option>
            <option value="ten">От +10</option>
          </select>
        </div>
        <div className="content_cards">
          {data.map((item) => (
            <div key={item} className="post_item">
              <div className="post_item_header">
                <div className="post_item_profile_info">
                  <div className="post_item_profile_picture">
                    <img
                      src="https://leonardo.osnova.io/c538048c-2517-5a39-92fa-e075d9afd21d/-/scale_crop/144x144/-/format/webp"
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
                    <EllipsisOutlined
                      style={{ fontSize: "24px", cursor: "pointer" }}
                    />
                  </Dropdown>
                </div>
              </div>
              <div className="post_content">
                <p className="post_content_title">
                  Исследование: геймеры тратят больше времени на просмотр видео
                  об играх, чем на сами игры
                </p>
                <p className="post_content_text">
                  Эксперты считают, что издателям нужно пользоваться этим и
                  «интегрировать видеоконтент в игровые экосистемы».
                </p>
                <img
                  src="https://leonardo.osnova.io/7d96240a-0a73-5c88-b37a-72f9732483ba/-/preview/1184x/-/format/webp"
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
                </div>
                <div className="post_actions">
                  <div className="post_actions_left">
                    <button>
                      <TbMessageCircle className="post_actions_comment_icon" />{" "}
                      435
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
                    Блин, а мне рассказали тут что Сталкер 2 хорошо работает и
                    багов нет. А багов нет. А багов нет. А
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Content;
