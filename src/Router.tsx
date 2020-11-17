import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AttendanceCode from "./Pages/AttendanceCode";
import Blackboard from "./Pages/Blackboard";
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
          <Route path="/blackboard">
            <Blackboard />
          </Route>
          <Route path="/code">
            <AttendanceCode />
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
