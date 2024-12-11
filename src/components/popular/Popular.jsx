import React from "react";
import "./Popular.css";
import Layout from "../layout/Layout";
import ContentItem from "./PopularItem";

function Content() {
  let data = [1, 2, 3, 4, 5];

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
          {data.map((item, index) => (
            <ContentItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Content;
