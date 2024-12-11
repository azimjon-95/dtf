import React from "react";
import "./MyReels.css";
import Layout from "../layout/Layout";
function MyReels() {
  return (
    <Layout>
      <div className="my_reels">
        <div className="content_filter">
          <select
            name=""
            defaultValue={"date"}
            id=""
            className="content_filter_select"
          >
            <option value="new">По дате</option>
            <option value="five">По популярности</option>
          </select>
        </div>
        <div className="empty_reels">
          <p>
            Лента для постов из блогов и сообществ, на которые вы подпишетесь
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default MyReels;
