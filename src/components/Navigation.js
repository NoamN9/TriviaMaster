import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
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
      <Link to="/" style={{color:'white'}}>
        <p style={{ paddingRight: "5px", paddingLeft: "2px", color: "white" }}>
          Home
        </p>
      </Link>
      <Link to="/about"  style={{color:'white'}}>
        <p style={{ paddingRight: "5px", color: "white" }}>About</p>
      </Link>
      <Link to='/register'  style={{color:'white'}}>
        <p style={{ color: "white" }}>Register</p>
      </Link>
    </nav>
  );
};

export default Navigation;
