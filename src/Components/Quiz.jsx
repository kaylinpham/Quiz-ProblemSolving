import React, { Component } from "react";
import Answer from "./Answer";
import * as f from "../Controllers";
const Quiz = (props) => {
  let ans = [];
  let data = props.content;
  let wrongAns = data.incorrect_answers ? data.incorrect_answers : [];
  let answers = [data.correct_answer, ...wrongAns];
  answers = f.shuffle(answers);
  for (let i = 0; i < 4; i++) {
    ans.push(<Answer onClick={props.onClick} content={answers[i]} />);
  }
  return (
    <div className={props.className}>
      <h3>{data.question}</h3>
      {ans}
    </div>
  );
};

export default Quiz;
