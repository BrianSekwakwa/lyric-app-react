import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
      <input className="form__input" type="text" name="recipeName" />
      <select className="form__select" name="count" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <button className="form__button">Search</button>
    </form>
  );
}

export default Form;
