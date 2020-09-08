import React from "react";
import Picture from "./TriviaLogo.png";

const Logo = () => {
  return (
    <>
      <div style={{ width: "maxwidth", background: "#00BFBF", height: "130px" }}>
        <img
          src={Picture}
          alt=""
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
    </>
  );
};

export default Logo;
