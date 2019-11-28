import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Tourist from "Routes/Tourist";
import Cultural from "Routes/Cultural";
import Festival from "Routes/Festival";
import Food from "Routes/Food";
import Rooms from "Routes/Rooms";
import Shopping from "Routes/Shopping";
import TravelCourse from "Routes/TravelCourse";
import Leisure from "Routes/Leisure";
import Nav from "./Nav";
import Main from "./Main";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/nav" exact component={Nav} />
      <Route path="/tourist" exact component={Tourist} />
      <Route path="/tourist/:id" exact component={Detail} />
      <Route path="/cultural" exact component={Cultural} />
      <Route path="/cultural/:id" exact component={Detail} />
      <Route path="/festival" exact component={Festival} />
      <Route path="/festival/:id" exact component={Detail} />
      <Route path="/food" exact component={Food} />
      <Route path="/food/:id" exact component={Detail} />
      <Route path="/rooms" exact component={Rooms} />
      <Route path="/rooms/:id" exact component={Detail} />
      <Route path="/shopping" exact component={Shopping} />
      <Route path="/shopping/:id" exact component={Detail} />
      <Route path="/travelCourse" exact component={TravelCourse} />
      <Route path="/travelCourse/:id" exact component={Detail} />
      <Route path="/leisure" exact component={Leisure} />
      <Route path="/leisure/:id" exact component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
