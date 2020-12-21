import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Assignments from "./Pages/Assigments";
import AttendanceCode from "./Pages/AttendanceCode";
import Blackboard from "./Pages/Blackboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewMeeting from "./Pages/NewMeeting";
import Participants from "./Pages/Participants";
import NewAccount from "./Pages/NewAccount";

function Router() {
  return (
    <div>
      <BrowserRouter>
        {(window.location.pathname.split("/")[1] === "home" ||
          window.location.pathname.split("/")[1] === "blackboard" ||
          window.location.pathname.split("/")[1] === "assignments" ||
          window.location.pathname.split("/")[1] === "attendance") && (
          <Navbar />
        )}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/assignments">
            <Assignments />
          </Route>
          <Route path="/blackboard">
            <Blackboard />
          </Route>
          <Route path="/new-meeting">
            <NewMeeting />
          </Route>
          <Route path="/new-account">
            <NewAccount />
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
