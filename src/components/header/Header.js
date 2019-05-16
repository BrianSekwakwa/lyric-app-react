import React from "react";
import "./Header.css";
import img from "./meme-face.png";

function Header() {
  return (
    <div className="header">
      <img src={img} width="100px" height="100px" alt="meme face" />
      <h1>MEME GENERATOR</h1>
    </div>
  );
}

export default Header;
