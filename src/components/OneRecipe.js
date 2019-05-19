import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiKey = "73b8f533ede7054333c537ddf91ddb92";

class OneRecipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    const reqUrl = `https://www.food2fork.com/api/search?key=${apiKey}&q=${title}`;

    axios.get(reqUrl).then(res => {
      this.setState({
        activeRecipe: res.data.recipes[0]
      });
    });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default OneRecipe;
