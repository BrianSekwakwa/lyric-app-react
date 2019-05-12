import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
  }

  componentDidMount() {
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
