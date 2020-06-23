import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home.js";
import Diary from "./diary/Diary.js";
import About from "./about/About.js";
import Result from "./result/Result.js";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/about" component={About} />
        <Route exact path="/result" component={Result} />
      </div>
    );
  }
}

export default RouterURL;
