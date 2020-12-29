import "./App.css";
import StartBtn from "./Components/StartBtn";
import React, { Component } from "react";
import Quiz from "./Components/Quiz";
import Rate from "./Components/Rate";
import Result from "./Components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeStatus: true,
      quizStatus: false,
      order: 0,
      quizzes: {},
      score: 0,
      reply: false,
      result: false,
    };
    this.startQuiz = this.startQuiz.bind(this);
    this.reply = this.reply.bind(this);
    this.back = this.back.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ quizzes: res });
      });
  }
  startQuiz() {
    this.setState({ quizStatus: !this.state.quizStatus, homeStatus: false });
  }
  reply(e) {
    if (
      e.target.textContent ===
      this.state.quizzes.results[this.state.order].correct_answer
    ) {
      this.setState({
        display: true,
        reply: "rate rate__green",
        score: this.state.score + 10,
      });
    } else {
      this.setState({ display: true, reply: "rate rate__red" });
    }
    setTimeout(() => {
      if (this.state.order < 4) {
        this.setState({ display: false, order: this.state.order + 1 });
      } else {
        this.setState({
          display: false,
          quizStatus: false,
          order: 0,
          result: true,
        });
      }
    }, 700);
  }
  back() {
    window.location.reload();
  }
  render() {
    return (
      <div className="container">
        <h1 className={this.state.homeStatus ? "" : "none"}>Quiz App</h1>
        <StartBtn
          className={this.state.homeStatus ? "" : "none"}
          onClick={this.startQuiz}
        />
        <div className={this.state.quizStatus ? "score" : "score none"}>
          {this.state.score}
        </div>
        <Quiz
          content={
            this.state.quizzes.results
              ? this.state.quizzes.results[this.state.order]
              : {}
          }
          className={this.state.quizStatus ? "" : "none"}
          onClick={this.reply}
        />
        <Rate className={this.state.display ? this.state.reply : "none"} />
        <Result
          score={this.state.score}
          className={this.state.result ? "result" : "none"}
          back={this.back}
        />
      </div>
    );
  }
}

export default App;
