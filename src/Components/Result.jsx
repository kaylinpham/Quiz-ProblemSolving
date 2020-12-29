import React, { Component } from "react";
import "./css/Result.css";
const Result = (props) => {
  return (
    <div className={props.className}>
      <h2>SCORE</h2>
      <div>{props.score}</div>
      <button onClick={props.back}>Back</button>
    </div>
  );
};

export default Result;
