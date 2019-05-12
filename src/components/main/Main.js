import React from "react";
import "./Main.css";
import DogBreeds from "./dogbreeds/DogBreeds";
import DogImages from "./dogimages/DogImages";

function Main() {
  return (
    <div>
      <DogBreeds />
      <DogImages />
    </div>
  );
}

export default Main;
