import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      breed: {},
      count: 0
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          breed: data.message
        });
      });
  }

  fetchData() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          image: data.message
        });
      });
  }

  render() {
    const dogBreeds = Object.keys(this.state.breed);
    let list = document.createElement("ul");
    let breedItems = "";
    dogBreeds.forEach(item => {
      breedItems = document.createElement("li");
      breedItems.innerHTML = item;
      list.appendChild(breedItems);
    });
    console.log(list);
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
