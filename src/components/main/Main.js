import React from "react";
import "./Main.css";

function Main(props) {
  let image = "";
  let text = "";
  let randomNumber = 0;

  function generateImage() {
    props
      ? (randomNumber = Math.floor(Math.random() * props.state.meme.length))
      : null;

    console.log(randomNumber);
  }

  console.log(image);

  return (
    <div className="main">
      <button onClick={generateImage} type="button">
        Generate Image
      </button>
      <div className="display">
        <img src={image} alt="" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Main;
