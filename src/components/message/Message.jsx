import React from "react";
import "./Message.css";
import Layout from "../layout/Layout";

function Message() {
  return (
    <Layout>
      <div className="message">
        <p className="message_caption">Сообщения</p>
        <div className="message_wrapper">
          <p className="no_message_text">Здесь пока ничего нет</p>
        </div>
      </div>
    </Layout>
  );
}

export default Message;
