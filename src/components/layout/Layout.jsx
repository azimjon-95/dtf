import React from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";

function Layout({ children }) {
  console.log(children);

  return (
    <div className="layout">
      <Sidebar />
      <div className="layout_wrapper">{children}</div>
    </div>
  );
}

export default Layout;
