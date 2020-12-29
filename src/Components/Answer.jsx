import React, { Component } from "react";
import "./css/Answer.css";
const Answer = (props) => {
  return (
    <div value={props.content} onClick={props.onClick} className="ans">
      {props.content}
    </div>
  );
};

export default Answer;
