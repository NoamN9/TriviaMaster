import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Loginform from "./components/Loginform";
import About from "./components/About";
import Registerform from "./components/Registerform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  someMethod = (e) => {};

  render() {
    return (
      <Router>
        <div className="App">
          <Logo />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Loginform} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Registerform} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
