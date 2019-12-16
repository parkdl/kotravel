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

import Main from "./Main";
import Detail from "Routes/Detail";
import Header from "../Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
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
        <Redirect to="*" from="/" />
      </Switch>
    </>
  </Router>
);
