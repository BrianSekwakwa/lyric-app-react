import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

// const apiKey = "73b8f533ede7054333c537ddf91ddb92";

class App extends Component {
  state = {
    apiKey: "73b8f533ede7054333c537ddf91ddb92",
    recipes: []
  };

  getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    let count = e.target.elements.count.value;
    e.preventDefault();

    console.log(count);

    const apiCall = `https://www.food2fork.com/api/search?key=${
      this.state.apiKey
    }&q=${recipeName}&count=${count}`;

    axios.get(apiCall).then(res => {
      this.setState({ recipes: res.data.recipes });
      console.log(this.state.recipes);
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-tittle">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
