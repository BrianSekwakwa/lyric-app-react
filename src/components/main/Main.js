import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <form action="">
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="bottom text" />
        <button type="button">Generate</button>
      </form>
      <div className="display">Some image over here</div>
    </div>
  );
}

export default Main;
