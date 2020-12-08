import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Loginform from "./components/Loginform";
import Registerform from "./components/Registerform";
import Questions from "./components/Questions";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false, user: {} };
  }

  SetLoginTrue = () => {
    this.setState({ isLogin: true });
  };

  SetLoginFalse = () => {
    this.setState({ isLogin: false });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Logo />
          <Navigation
            isLogin={this.state.isLogin}
            SetLoginFalse={this.SetLoginFalse}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Loginform {...props} SetLoginTrue={this.SetLoginTrue} />
              )}
            />
            <Route 
            path="/register"
            render={(props) => (
              <Registerform {...props} SetLoginTrue={this.SetLoginTrue} />
            )}
          />
            <Route
              path="/game"
              render={(props) => (
                <Questions {...props} isLogin={this.state.isLogin} />
              )}
            />
            <Route path="/profile" 
             render={(props) => (
              <Profile {...props} isLogin={this.state.isLogin} />
            )}
          />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
