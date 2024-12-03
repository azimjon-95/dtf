import React from "react";
import { LuDot } from "react-icons/lu";
import "../index.css";

function LoadingDots() {
    return (
        <div className="loading-container">
            <LuDot className="dot dot-1" />
            <LuDot className="dot dot-2" />
            <LuDot className="dot dot-3" />
        </div>
    );
}

export default LoadingDots;
