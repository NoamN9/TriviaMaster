import React, { Component } from "react";

class Registerform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onUserchange: "",
      onEmailchange: "",
      onPasswordchange: "",

    };
  }

  onUserchange = (event) => {
    this.setState({ onUserchange: event.target.value });
  };

  onPasswordchange = (event) => {
    this.setState({ onPasswordchange: event.target.value });
  };

  onEmailchange = (event) => {
    this.setState({ onEmailchange: event.target.value });
  };

  onRegister = () => {
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: this.state.onUserchange,
        password: this.state.onPasswordchange,
        email:this.state.onEmailchange
      }),
    })
    .then((res) => {
      if(!res.ok) throw new Error(res.status);
      else 
      return res.json()
    })
    .then((user) => {
      console.log(user); // i will this user to SET THE USER STATE IN THE APP
      this.props.SetLoginTrue();
      this.props.history.push('/game')
    })
    
     
  };



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
            onChange={this.onEmailchange}
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
          <button onClick={this.onRegister}>Register</button>
        </div>
      </div>
    );
  }
}

export default Registerform;
