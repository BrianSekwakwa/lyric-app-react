import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import OneRecipe from "./OneRecipe";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/OneRecipe/:id" component={OneRecipe} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
