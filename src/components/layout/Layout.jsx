import React from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout_wrapper">
        {children}
        <div className="rigth_sidebar">ADS</div>
      </div>
    </div>
  );
}

export default Layout;
