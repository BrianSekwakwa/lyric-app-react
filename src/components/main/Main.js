import React, { Component } from "react";
import "./Main.css";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: "f2e1751f17c5b88c00e4dfeac793e96c",
      character: ""
    };
  }

  fetchData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => {
        console.log(res.data);
        this.setState({
          character: res.data
        });
      });
  };

  render() {
    return (
      <div onClick={this.fetchData}>
        <button>Click Button</button>
      </div>
    );
  }
}

export default Main;
