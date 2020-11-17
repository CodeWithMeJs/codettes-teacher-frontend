import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
