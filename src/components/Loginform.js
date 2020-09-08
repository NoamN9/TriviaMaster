import React, { Component } from "react";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  someMethod = (e) => {};

  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "300px",
          border: "1px solid black",
          margin: " 0 auto",
          position: "relative",
          bottom: "-50px",
          background: "black",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", bottom: "-50px" }}>
          <label style={{ color: "white", marginRight: "100px" }}>
            <b>Username:</b>
          </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
          ></input>
          <br />
          <label style={{ color: "white", marginRight: "100px" }}>
            <b>Password:</b>
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
          ></input>
          <br />
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Loginform;
