import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Main from "./Main";
import Header from "../Components/Header";
import SearchForm from "../Components/SearchForm";

import Tourist from "Routes/Tourist";
import Cultural from "Routes/Cultural";
import Festival from "Routes/Festival";
import Food from "Routes/Food";
import Rooms from "Routes/Rooms";
import Shopping from "Routes/Shopping";
import TravelCourse from "Routes/TravelCourse";
import Leisure from "Routes/Leisure";
import Search from "Routes/Search";

import TouristDetail from "Routes/Detail/TouristDetail";
import CulturalDetail from "Routes/Detail/CulturalDetail";
import FestivalDetail from "Routes/Detail/FestivalDetail";
import FoodDetail from "Routes/Detail/FoodDetail";
import LeisureDetail from "Routes/Detail/LeisureDetail";
import RoomsDetail from "Routes/Detail/RoomsDetail";
import ShoppingDetail from "Routes/Detail/ShoppingDetail";
import TravelCourseDetail from "Routes/Detail/TravelCourseDetail";

export default () => (
  <Router>
    <>
      <Header />
      <SearchForm />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/tourist" exact component={Tourist} />
        <Route path="/tourist/:id" exact component={TouristDetail} />
        <Route path="/cultural" exact component={Cultural} />
        <Route path="/cultural/:id" exact component={CulturalDetail} />
        <Route path="/festival" exact component={Festival} />
        <Route path="/festival/:id" exact component={FestivalDetail} />
        <Route path="/food" exact component={Food} />
        <Route path="/food/:id" exact component={FoodDetail} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:id" exact component={RoomsDetail} />
        <Route path="/shopping" exact component={Shopping} />
        <Route path="/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/travelCourse" exact component={TravelCourse} />
        <Route path="/travelCourse/:id" exact component={TravelCourseDetail} />
        <Route path="/leisure" exact component={Leisure} />
        <Route path="/leisure/:id" exact component={LeisureDetail} />

        <Route path="/search" exact component={Search} />
        <Redirect to="*" from="/" />
      </Switch>
    </>
  </Router>
);
