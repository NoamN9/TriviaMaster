import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: "",
    };
  }

  render() {
    const isLoggedIn = this.props.isLogin;

    return (
      <div>
        {isLoggedIn ? (
          <div>you are login see the fking profile</div>
        ) : (
          <div>fk u stop hacking </div>
        )}
      </div>
    );
  }
}

export default Profile;
