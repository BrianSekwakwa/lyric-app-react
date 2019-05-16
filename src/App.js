import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      meme: ""
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        // console.log(data.data.memes);
        this.setState({
          meme: data.data.memes
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
