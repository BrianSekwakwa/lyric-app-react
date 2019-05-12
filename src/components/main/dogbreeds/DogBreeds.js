import React from "react";
import "./DogBreeds.css";

function DogBreeds() {
  function test(e) {
    console.log(e.target.value);
  }
  return (
    <div className="breeds">
      <form>
        <select onChange={test}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </form>
    </div>
  );
}

export default DogBreeds;
