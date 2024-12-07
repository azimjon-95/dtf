import React from "react";
import "./About.css";
import Layout from "../layout/Layout";
import {
  EllipsisOutlined,
  GiftOutlined,
  FlagOutlined,
  EyeInvisibleFilled,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { HiBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import ContentItem from "./ContentItem";
// import { FaStarOfLife } from "react-icons/fa6";

function About() {
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
        <GiftOutlined /> Подарить Plus
      </Menu.Item>
      <Menu.Item key="2">
        <FlagOutlined /> Пожаловаться
      </Menu.Item>
      <Menu.Item key="3">
        <EyeInvisibleFilled /> Заблокировать
      </Menu.Item>
    </Menu>
  );

  document.title = "Что такое DTF — DTF на DTF";

  let data = [1, 2, 3, 4, 5];

  return (
    <Layout>
      <div className="about">
        <div className="about_top">
          <div className="about_top_header">
            <div className="about_top_profile_info">
              <div className="about_top_profile_picture">
                <img
                  src="https://leonardo.osnova.io/43a3c177-6ef6-c782-a737-51295786d729/-/scale_crop/144x144/-/format/webp"
                  alt="about_top_text"
                />
              </div>
              <div>
                <p className="about_top_profile_info_name">
                  DTF <HiBadgeCheck />
                </p>
                <p className="about_top_profile_info_username">28.05.2018</p>
              </div>
            </div>
            <div className="about_top_header_right">
              <button className="about_top_follow_btn">Подписаться</button>
              <Dropdown overlay={menu} trigger={["click"]}>
                <EllipsisOutlined
                  style={{ fontSize: "24px", cursor: "pointer" }}
                />
              </Dropdown>
            </div>
          </div>

          <h1 className="about_top_title">Что такое DTF</h1>
          <p className="about_top_text">
            DTF — это платформа для обсуждения игр, кино, разработки и
            технологий. У площадки нет консолидированной позиции, здесь
            собираются люди с разными мнениями и взглядами на одни и те же
            продукты развлекательной индустрии.
          </p>
          <p className="about_top_text">
            Платформа существует на созданной в сотрудничестве ООО "ДТФ" и ООО
            "Комитет" программной разработке – Osnova. Она используется для
            функционирования сайта, предоставления доступа к расширенным
            возможностям DTF (подписка Plus и подписка Pro), а также
            демонстрации рекламы.
          </p>

          <h2 className="about_top_title">Наши читатели — писатели</h2>
          <p className="about_top_text">
            Вместе с редакцией созданием контента занимаются пользователи,
            которые свободно, но аргументированно, без мата, спама и
            политических тем, формулируют свои ощущения от новых игр, фильмов,
            сериалов в различных подсайтах DTF. Другие читатели поддерживают
            инициативу и видят суть материала, а не минусуют его за
            пунктуационные ошибки, так у нас устроено.
          </p>
          <p className="about_top_text">
            Материалы редакции помечаются специальной галочкой, вы не
            пропустите.
          </p>
          <Link className="about_top_link" to="/">
            Как правильно оформить вывод поста в ленте DTF и почему вашу запись
            могут отредактировать
          </Link>
          <Link className="about_top_link" to="/">
            Как написать текст на DTF и всем понравиться
          </Link>
          <h2 className="about_top_title">
            DTF — это не журнал, а разноформатная платформа
          </h2>
          <p className="about_top_text">
            Мы не классическое издание. И не стремимся им стать, предпочитая
            экспериментировать с форматами, в том числе короткими. Писать на
            наши якорные темы — игры, кино и разработка — можно как текстом, так
            и твитами или развлекательными гифками.
          </p>
          <h2 className="about_top_title">DTF следит за чистотой комьюнити</h2>
          <p className="about_top_text">
            Пожалуй, это даже можно назвать нашей миссией — бан токсичных и
            хамоватых людей. Мы исходим из гипотезы, что если не превращать сайт
            в рекламную помойку и поддерживать адекватные дискуссии, то читатели
            самостоятельно построят DTF таким, каким хотят видеть.
          </p>
          <Link className="about_top_link" to="/">
            Правила общения на DTF
          </Link>
          <Link className="about_top_link" to="/">
            Правила пользования сайтом DTF
          </Link>
          <h2 className="about_top_title">
            Наши официальные адреса в соцсетях
          </h2>
          <Link className="about_top_link" to="/">
            ВКонтакте
          </Link>
          <Link className="about_top_link" to="/">
            X
          </Link>
          <Link className="about_top_link" to="/">
            Телеграм
          </Link>
          <Link className="about_top_link" to="/">
            Facebook*
          </Link>
          <Link className="about_top_link" to="/">
            Youtube
          </Link>
          <Link className="about_top_link" to="/">
            Twitch
          </Link>
          <h2 className="about_top_title">Контакты</h2>
          <h3 className="about_top_sub_title">Реклама и спецпроекты</h3>
          <Link className="about_top_link" to="/">
            sales@cmtt.ru
          </Link>
          <h3 className="about_top_sub_title">Редакция</h3>
          <Link className="about_top_link" to="/">
            editors@dtf.ru
          </Link>
          <h3 className="about_top_sub_title">Поддержка</h3>
          <Link className="about_top_link" to="/">
            support@dtf.ru
          </Link>
          <h3 className="about_top_sub_title">Модерация</h3>
          <Link className="about_top_link" to="/">
            moderation@dtf.ru
          </Link>
          <h3 className="about_top_sub_title">Продукт и интеграции</h3>
          <p className="about_top_link about_top_integration ">
            <span>Продукт и интеграции,</span>{" "}
            <Link to={"/"}>vlad@cmtt.ru</Link>
          </p>
          <p className="about_top_link about_top_integration ">
            <span>Филипп Концаренко,</span>{" "}
            <Link to={"/"}> philipp@cmtt.ru</Link>
          </p>
          <h3 className="about_top_sub_title">Администрация Сайта</h3>
          <p className="about_top_text">
            Общество с ограниченной ответственностью «ДТФ», ОГРН 5167746376672,
            юридический и почтовый адрес: 115184 г. Москва, ул. Большая
            Татарская, д. 35 стр. 3, пом. 602/1А, 602/2А
          </p>
          <h2 className="about_top_title">
            ИНН: 7714961161 ОГРН: 5167746376672
          </h2>
          <h3 className="about_top_sub_title about_top_integration ">
            Контактный email: <Link>support@dtf.ru</Link>
          </h3>
          <div className="about_stars">
            {/* <FaStarOfLife />
            <FaStarOfLife />
            <FaStarOfLife /> */}
            <b>*</b>
            <b>*</b>
            <b>*</b>
          </div>
          <i className="about_top_italic_text">
            *Экстремистская организация, деятельность которой запрещена на
            территории Российской Федерации
          </i>
        </div>

        <div className="content_cards">
          <h2 className="content_cards_title">Рекомендации</h2>

          {data.map((item, index) => (
            <ContentItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default About;
