import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AttendanceCode from "./Pages/AttendanceCode";
import Blackboard from "./Pages/Blackboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewMeeting from "./Pages/NewMeeting";
import Participants from "./Pages/Participants";

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
          <Route path="/new-meeting">
            <NewMeeting />
          </Route>
          <Route path="/attendance">
            <Participants />
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
