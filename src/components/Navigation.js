import React from "react";
import { Link } from "react-router-dom";




const Navigation = (props) => {

  function handleSignout() {
    props.SetLoginFalse()
    props.setinitialState()
  }

  return (
    <nav
      style={{
        background: "#008080",
        paddingTop: "1px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {props.isLogin ? (
        <>
         <Link to="/profile" style={{ color: "white" }}>
            <p
              style={{
                paddingRight: "5px",
                paddingLeft: "2px",
                color: "white",
              }}
            >
              Profile
            </p>
          </Link>
          <Link to="/game" style={{ color: "white" }}>
            <p  style={{  paddingRight: "5px",
                paddingLeft: "2px",
                color: "white", }}>Game</p>
          </Link>
          <Link to="/" style={{ color: "white" }}>
            <p onClick={handleSignout} style={{ color: "white" }}>Signout</p>
          </Link>
        
        </>
      ) : (
        <>
          <Link to="/" style={{ color: "white" }}>
            <p
              style={{
                paddingRight: "5px",
                paddingLeft: "2px",
                color: "white",
              }}
            >
              Login
            </p>
          </Link>
          <Link to="/register" style={{ color: "white" }}>
            <p style={{ color: "white" }}>Register</p>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
