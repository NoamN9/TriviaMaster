import React, { Component } from "react";



class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onUserchange: "",
      onPasswordchange: "",
    };
  }


  onUserchange = (event) => {
    this.setState({ onUserchange: event.target.value });
  };

  onPasswordchange = (event) => {
    this.setState({ onPasswordchange: event.target.value });
  };

  onLogin = () => {
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: this.state.onUserchange,
        password: this.state.onPasswordchange,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === "succsess") {
          this.props.SetLoginTrue();
          this.props.history.push('/game')
        } else {
          alert("wrong password or user name please try agien");
        }
      });
  };

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
        <h1 style={{ color: "white", position: "relative", bottom: "-60px" }}>
          Login
        </h1>
        <div style={{ position: "relative", bottom: "-50px" }}>
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
          <button onClick={this.onLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Loginform;
