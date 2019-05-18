import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import OneRecipe from "./OneRecipe";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/OneRecipe/:id" component={OneRecipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
