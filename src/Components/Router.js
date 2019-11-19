import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Tourist from "Routes/Tourist";
import Cultural from "Routes/Cultural";
import Festival from "Routes/Festival";
import Food from "Routes/Food";
import Rooms from "Routes/Rooms";
import Shopping from "Routes/Shopping";
import TravelCourse from "Routes/TravelCourse";
import Nav from "./Nav";
import Main from "./Main";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/nav" exact component={Nav} />
      <Route path="/tourist" exact component={Tourist} />
      <Route path="/cultural" exact component={Cultural} />
      <Route path="/festival" exact component={Festival} />
      <Route path="/food" exact component={Food} />
      <Route path="/rooms" exact component={Rooms} />
      <Route path="/shopping" exact component={Shopping} />
      <Route path="/travelCourse" exact component={TravelCourse} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
