import React from "react";
import Layout from "../layout/Layout";
import "./Rules.css";
import { HiBadgeCheck } from "react-icons/hi";
import {
  EllipsisOutlined,
  GiftOutlined,
  FlagOutlined,
  EyeInvisibleFilled,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

function Rules() {
  const menu = (
    <Menu
      style={{
        background: "#1f1f1f",
        border: "none",
        color: "#c9cccf",
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
  return (
    <Layout>
      <div className="rules">
        <div className="rules_top">
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

          <h2 className="rules_top_title">Правила общения на DTF</h2>
          <p className="blockquote">
            Создавая аккаунт на DTF, вы принимаете{" "}
            <Link to="/">юридические правила</Link>
            использования нашего продукта.
          </p>
          <p className="ruler_top_text">
            DTF — медиаплатформа, состоящая из тем и блогов. Контент в них
            создают пользователи или редакция
          </p>
          <h3 className="rules_top_sub_title">1.1 Спам и реклама</h3>
          <p className="ruler_top_text">
            Мы не препятствуем публикации ссылок на собственные ресурсы и
            проекты, пока они остаются в интересах сообщества и публикуются в
            контексте дискуссий — например, чтобы объяснить экспертизу автора.
          </p>
          <p className="ruler_top_text">
            Если аккаунт создан исключительно с целью рекламы сомнительного или
            непроверенного продукта, материалы профиля не соответствуют тематике
            сайта, мы можем ограничить аккаунт.
          </p>
          <p className="ruler_top_text">
            Реклама различных подозрительных финансовых действий,
            представительских и других услуг, безопасность которых мы не можем
            гарантировать пользователям, может расцениваться в качестве спама.
          </p>
          <h3 className="rules_top_sub_title">1.2 NSFW (Not Safe For Work)</h3>
          <p className="ruler_top_text">
            Речь о порнографии и жестоком контенте, в том числе это касается
            ссылок на сторонние ресурсы.
          </p>
          <ul>
            <li>
              Запрещены изображения сцен секса с демонстрацией половых органов и
              половых органов отдельно.
            </li>
            <li>
              Под категорию жестокого контента попадают материалы, в которых
              содержатся: насилие, расчлененка, жестокое обращение с животными,
              убийства и изувеченные тела.
            </li>
          </ul>
          <p className="ruler_top_text">
            Чрезмерно откровенный контент и эротика в статьях и комментариях
            могут подпадать под правило на всём сайте. Например, изображения
            женской груди без цензуры запрещены везде, кроме «О, порно». Если
            такое изображение необходимо для материала, соски следует «прикрыть»
            черным квадратом или другим способом.
          </p>
          <p className="ruler_top_text">
            В блогах, в которых появляется эротика, мы будем автоматически
            помечать все материалы пользователя «18+», а также скрывать их из
            лент «Свежее», «Популярное», рекомендаций и рейтинга.
          </p>
          <h3 className="rules_top_sub_title">1.3.1 Нарушение законов РФ</h3>
          <p className="ruler_top_text">
            Некоторые правонарушения могут иметь последствия как для площадки,
            так и для самого пользователя, потому что мы работаем в юрисдикции
            РФ. Явные нарушения пресекаются в момент обнаружения, неочевидные —
            по запросу контролирующих органов.
          </p>
          <p className="ruler_top_text">
            Запрещено продавать или рекламировать наркотики, VPN и обход
            блокировок, ссылаться на онлайн-казино, продвигать пиратский контент
            и нарушать другие законы. Отдельно <Link to="/">напомним</Link>, что
            некоторые виды манги и аниме могут попасть под действие этого
            правила.
          </p>
          <h3 className="rules_top_sub_title">
            1.3.2 Призывы к насилию и разжигание межнациональной розни
          </h3>
          <p className="ruler_top_text">
            Публикации, содержащие призывы к насилию, пожелания смерти,
            возбуждающие ненависть по признакам расы, национальности и
            происхождения, а также провокации на этой почве, запрещены на
            площадке.
          </p>
          <h3 className="rules_top_sub_title">
            1.4 Создание аккаунтов для обхода ограничений
          </h3>
          <p className="ruler_top_text">
            Если пользователь получил бан, был скрыт из лент или ограничен иным
            способом, а затем создал новый аккаунт или использовал старый, чтобы
            обойти это, он будет заблокирован. Основной профиль нарушителя
            попадет под дополнительную ответственность.
          </p>
          <p className="ruler_top_text">
            Мы не препятствуем созданию других аккаунтов, в том числе ботов и
            скриптов, если они не используются для нарушения правил площадки.
          </p>
          <h3 className="rules_top_sub_title">1.4.1 Деструктивное поведение</h3>
          <p className="ruler_top_text">
            На площадке запрещено целенаправленное вредительство.
            Систематические провокации и оскорбления, флуд, токсичное поведение,
            эксплуатация уязвимостей платформы, преследование пользователей и
            другие действия, которые наносят вред сайту или сообществу, приведут
            к ограничению аккаунта.
          </p>
          <p className="ruler_top_text">
            В случаях, когда пользователь использует оскорбительные имя или
            описание блога, названия статей, изображения, публикации в профиле,
            мы будем автоматически помечать все материалы пользователя «18+», а
            также скрывать их из лент «Свежее», «Популярное», рекомендаций и
            рейтинга.
          </p>
          <h3 className="rules_top_sub_title">1.4.2 Манипуляции с рейтингом</h3>
          <p className="ruler_top_text">
            Нельзя использовать такие же или максимально схожие с другими
            пользователями имена и названия, оформление блогов. У пользователей
            должна быть возможность различать блоги даже одной и той же
            тематики.
          </p>
          <p className="ruler_top_text">
            Нельзя создавать аккаунты, намеренно копирующие имена и фамилии
            публичных личностей, названия известных компаний и организаций.
          </p>
          <p className="ruler_top_text">
            На площадке запрещено представляться официальными представителями
            DTF или человеком, связанным с администрацией, если вы не работаете
            в компании.
          </p>
          <p className="ruler_top_text">
            Намеренное введение в заблуждение пользователей без очевидного
            юмористического подтекста будет пресекаться.
          </p>
          <h3 className="rules_top_sub_title">
            1.6 Преследование пользователей
          </h3>
          <p className="ruler_top_text">
            Вежливое общение портят не только оскорбления — например, кто-то
            выражает свой негатив, донимая пользователя одними и теми же
            вопросами или через массовые реакции к материалам. Мы рассматриваем
            такие ситуации по жалобе пострадавшего.
          </p>
          <p className="ruler_top_text">
            Если вам неприятен конкретный человек, его можно{" "}
            <Link to="/">игнорировать</Link>. Также можно скрыть все публикации
            с определенным хэштегом.
          </p>
          <h3 className="rules_top_sub_title">
            1.7 Бездоказательные вбросы и клевета
          </h3>
          <p className="ruler_top_text">
            Если мы посчитаем, что цель вашей публикации — вброс, чтобы устроить
            агрессивную полемику, подорвать чью-то репутацию внутри сайта или
            использовать имя DTF для дальнейшего распространения информации в
            СМИ, мы оставляем за собой право ограничить материал.
          </p>
          <h3 className="rules_top_sub_title">1.8 Флуд</h3>
          <p className="ruler_top_text">
            Запрещено регулярно забивать ленту пользователей частыми
            публикациями нетематического и малосодержательного контента,
            систематически препятствовать чтению и комфортному общению.
          </p>
          <h3 className="rules_top_sub_title">1.9 Политика</h3>
          <p className="ruler_top_text">
            Политика не должна быть основной повесткой блога и комментариев,
            потому что DTF — площадка про игры, технологии, сериалы и кино.
            Разговоры о политике неизбежно скатываются в бессодержательные
            горячие споры.
          </p>
          <h3 className="rules_top_sub_title">
            2.1 Поднятие в ленте и повторные публикации
          </h3>
          <p className="ruler_top_text">
            Публиковать новые копии ранее опубликованных материалов без
            согласования запрещено. Если вы удалите статью и опубликуете ее
            заново или используете другие доступные механизмы с целью поднятия в
            ленте или манипуляций с поисковыми системами — это будет считаться
            нарушением.
          </p>
          <h3 className="rules_top_sub_title">2.2 Копипаст</h3>
          <p className="ruler_top_text">
            Полное копирование чужих материалов под запретом. Если вы хотите
            поделиться интересной статьей, можно опубликовать ссылку на нее в
            теме « <Link to="/">Ссылки в интернете</Link> ».
          </p>
          <p className="ruler_top_text">
            Полнотекстовая публикация чужих материалов допускается:
          </p>
          <ul>
            <li>С указанием ссылки на оригинал,</li>
            <li>
              При наличии разрешения автора, об этом написано в тексте и у вас
              есть доказательства.
            </li>
          </ul>
          <p className="ruler_top_text">
            Перенести собственный текст с другого сайта можно без ссылки на
            оригинал.
          </p>
          <p className="ruler_top_text">
            Открытый мат в заголовках статей или коротком описании, выведенном в
            ленту, запрещен. Такие материалы мы ограничим. Допустим
            завуалированный мат, если он необходим для понимания контекста.
            Используйте звездочки ****.
          </p>
          <h3 className="rules_top_sub_title">2.4 Провокации и токсичность</h3>
          <p className="ruler_top_text">
            Если цель публикации устроить агрессивную полемику, мы можем
            ограничить материал и аккаунт автора. На сайте запрещены: намеренная
            грубость, неконструктивный негатив, токсичное поведение. От
            злоупотребления нецензурной лексикой тоже стоит воздержаться.
          </p>
          <p className="ruler_top_text">
            Например, в негативном контексте запрещены «консолевойны», «битвы
            платформ» и провокации на эту тему. «Агуши схавают», «биллибои не
            люди», «сине-», «зелено-», «краснопузые» и другим похожим выражениям
            в отрицательном значении не место в адекватном общении.
          </p>
          <p className="ruler_top_text">
            Под токсичностью мы понимаем ненависть и эмоциональную критику без
            твердых оснований ко всему подряд, которая отравляет атмосферу
            вокруг дискуссии и может сопровождаться ярко-агрессивным поведением.
          </p>
          <p className="ruler_top_text">
            Сюда же относится намеренный постинг спойлеров вне контекста
            обсуждения, чтобы испортить впечатление от произведения.
          </p>
          <h3 className="rules_top_sub_title">2.5 Введение в заблуждение</h3>
          <p className="ruler_top_text">
            Если в публикации искажены факты, используются некорректные
            заголовки (введение в заблуждение), в ней нет авторитетного
            источника или есть признаки «фейковой новости», она может быть
            ограничена, как и профиль автора.
          </p>
          <h3 className="rules_top_sub_title">
            2.6.1 Оскорбление пользователей
          </h3>
          <p className="ruler_top_text">
            В дискуссиях не переходите на личности, относитесь к собеседнику с
            уважением. Оскорбления, под которыми мы понимаем унижение чести и
            достоинства другого пользователя или его близких, приведут к
            блокировке.
          </p>
          <p className="ruler_top_text">
            В качестве оскорбления может выступать любой формат: текст,
            изображение, гифка, видео, ссылка и прочее. Не забывайте, что
            пользователей можно <Link to="/">игнорировать</Link> .
          </p>
          <h3 className="rules_top_sub_title">
            2.6.2 Оскорбительные обобщения и оскорбления социальных групп
          </h3>
          <p className="ruler_top_text">
            Речь идет не только о расистских и сексистских высказываниях, но и о
            прочих собирательных оскорблениях вроде «консольщики — идиоты». К
            таким оскорблениям также относятся этнофолизмы вроде «хохлы», «хачи»
            или «русня». Подобные высказывания не несут пользы сообществу.
          </p>
          <h2 className="rules_top_title">Порядок применения наказаний</h2>
          <p className="ruler_top_text">
            Пункты правил работают на всём сайте, в том числе в личных блогах и
            темах. На любое нарушение в комментариях или материалах модератор
            реагирует самостоятельно либо по жалобам пользователей с помощью
            кнопки «Пожаловаться». Решение о наличии нарушения принимается на
            основании правил модерации и контекста обсуждения.
          </p>
          <p className="ruler_top_text">
            При наличии нарушения пользователь временно или навсегда блокируется
            с указанием причины блокировки (пункт правил), комментарий или ветка
            комментариев с нарушениями удаляются и скрывается.
          </p>
          <p className="ruler_top_text">
            Блог пользователя может быть отмечен автоматической маркировкой
            «18+», его материалы могут скрываться из лент «Свежее»,
            «Популярное», рекомендаций и рейтинга.
          </p>
          <h2 className="rules_top_title">Ответственность за нарушение</h2>
          <p className="ruler_top_text">
            Сразу и без возможности восстановления мы можем заблокировать
            пользователя на всей площадке за:
          </p>
          <ul>
            <li>1.1 Спам и реклама,</li>
            <li>1.3.1 Нарушение законов РФ,</li>
            <li>1.3.2 Призывы к насилию и разжигание межнациональной розни,</li>
            <li>1.4 Создание аккаунтов для обхода ограничений,</li>
            <li>1.4.1 Деструктивное поведение,</li>
            <li>1.4.2 Манипуляции с рейтингом,</li>
            <li>1.5 Подражание,</li>
            <li>1.7 Бездоказательные вбросы и клевета.</li>
          </ul>
          <p className="ruler_top_text">
            По решению модератора пользователь может быть заблокирован первый
            раз на 30 дней, а при повторном нарушении навсегда за:
          </p>
          <ul>
            <li>1.3.2 Призывы к насилию и разжигание межнациональной розни,</li>
            <li>1.4.1 Деструктивное поведение.</li>
          </ul>
          <p className="ruler_top_text">
            Для остальных случаев действует прогрессивная шкала банов. Всего
            допустимы пять блокировок: 1, 3, 7, 14 и 30 дней, а шестая будет
            перманентной.
          </p>
          <h2 className="rules_top_title">Скрытие материалов или блога</h2>
          <p className="ruler_top_text">
            Модераторы могут скрывать отдельные статьи или пользовательские
            блоги целиком. Скрытые профили доступны подписчикам в «Моей ленте»,
            напрямую в ленте блога, а также по ссылке.
          </p>
          <p className="rules_top_title">Основные принципы применения:</p>
          <ul>
            <li>Авторы публикаций регулярно нарушают правила сайта,</li>
            <li>
              Пользователь систематически совершает провокации, флудит,
              оскорбляет других,
            </li>
            <li>Обсуждение политических тем,</li>
            <li>Слишком частые посты без смысловой нагрузки,</li>
            <li>
              Тексты с плохим оформлением, капсом, обилием эмодзи, излишней
              эмоциональностью,
            </li>
            <li>Материалы с жестокостью и унижающей повесткой,</li>
            <li>
              Статьи с контентом, который выходит за рамки основной
              направленности сайта.
            </li>
          </ul>
          <p className="ruler_top_text">
            Например, слишком частый постинг, мешающий комфортному чтению ленты.
            Сюда относятся мемы, аниме, эротика (и посты с намеренно
            сексуализированными людьми), треш-контент, реклама. Список не
            исчерпывающий.
          </p>
          <p className="ruler_top_text">
            Чтобы минимизировать вероятность скрытия, изучите это:
          </p>
          <ul>
            <li>
              Ответы на наиболее частые вопросы:{" "}
              <Link to="/">dtf.ru/support</Link> ,
            </li>
            <li>
              Оформление статей на главной: <Link to="/">dtf.ru/28097</Link>{" "}
            </li>
            <li>
              Как написать хороший пост: <Link to="/">dtf.ru/13487</Link>,
            </li>
            <li>
              Правила общения: <Link to="/">dtf.ru/rules</Link>.
            </li>
          </ul>
          <p className="ruler_top_text">
            Каждый кейс рассматривается отдельно. Написать по поводу снятия
            скрытия можно на почту <Link to="/">moderation@dtf.ru</Link>.
          </p>
          <h2 className="rules_top_title">Срок давности нарушения </h2>
          <p className="ruler_top_text">
            Спустя год после блокировки есть возможность попросить снять
            ограничение. Для этого нужно написать на{" "}
            <Link to="/">moderation@dtf.ru</Link>
          </p>
          <ul>
            <li>
              Отправляйте письма с почты, на которую зарегистрирован профиль.
              Если почта не прикреплена, то вот{" "}
              <Link to="/">инструкция по восстановлению.</Link>
              Другой способ — напишите на <Link to="/">support@dtf.ru</Link>,
            </li>
            <li>
              Прикрепите ссылку на ваш аккаунт и опишите запрос максимально
              конкретно.
            </li>
          </ul>
          <p className="ruler_top_text">
            Сам по себе факт того, что прошел год после блокировки, не означает
            амнистию. Положительное или отрицательное решение модераторы
            принимают после обращения или самостоятельно при выдаче следующего
            бана при выполнении условий:
          </p>
          <ul>
            <li>Пользователь систематически не нарушает правила,</li>
            <li>
              Отсутствие блокировок по пунктам из первого абзаца{" "}
              <Link to="/">главы «Ответственность за нарушение»</Link> (1.1,
              1.3.1, 1.3.2, 1.4, 1.4.1, 1.4.2, 1.5, 1.7).
            </li>
          </ul>
          <div className="rules_stars">
            <b>*</b>
            <b>*</b>
            <b>*</b>
          </div>
          <p className="ruler_top_text">
            Правила, описанные здесь, обязательно будут дополняться и
            обновляться. Этот список не является исчерпывающим, а решение о
            допустимости того или иного поступка и мера наказания могут
            меняться. По решению администрации любой материал может быть признан
            нарушающим принципы сообщества в соответствии с юридическими
            правилами использования продукта.
          </p>
          <p className="ruler_top_text">
            Вы можете пожаловаться на любой комментарий или материал, который
            вам кажется неподходящим для DTF. Нужно нажать на три точки в правом
            верхнем углу и выбрать пункт «Пожаловаться». Модераторы получат
            жалобу и примут решение.
          </p>
          <p className="ruler_top_text">
            Подтянутый уровень дискуссии привлечет на DTF еще больше хороших
            авторов и специалистов, которые перестанут бояться делиться личным
            опытом и быть оскорбленными в комментариях. Больше специалистов —
            больше знаний. Больше знаний — больше идей, проектов, денег и всего,
            что мы пожелаем.
          </p>
          <p className="ruler_top_text">Спасибо.</p>
        </div>
      </div>
    </Layout>
  );
}

export default Rules;