import React, { Component } from "react";
import "./css/StartBtn.css";
const StartBtn = (props) => {
  return (
    <div className={props.className}>
      <button onClick={props.onClick} className="start__btn">
        Start
      </button>
    </div>
  );
};

export default StartBtn;
