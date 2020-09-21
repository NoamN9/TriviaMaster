import React, { Component } from "react";

class Registerform extends Component {
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
          height: "350px",
          border: "1px solid black",
          margin: " 0 auto",
          position: "relative",
          bottom: "-50px",
          background: "black",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", position: "relative", bottom: "-60px" }}>
          Register
        </h1>
        Login
        <div style={{ position: "relative", bottom: "-50px" }}>
          <label style={{ color: "white", marginRight: "100px" }}>
            <b>Username:</b>
          </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={this.onUserchange}
          ></input>
          <br />
          <label style={{ color: "white", marginRight: "100px" }}>
            <b>Email:</b>
          </label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={this.onUserchange}
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
            onChange={this.onPasswordchange}
          ></input>
          <br />
          <button onClick={this.onLogin}>Register</button>
        </div>
      </div>
    );
  }
}

export default Registerform;
