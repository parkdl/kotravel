import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Main from "Routes/Main";
import Header from "../Components/Header";
/*import SearchForm from "../Components/SearchForm";
import Login from "Routes/Login";
import Board from "../Components/Board";
import Authenticate from "./Authenticate";
*/

import Tourist from "Routes/Tourist";
import Cultural from "Routes/Cultural";
import Festival from "Routes/Festival";
import Food from "Routes/Food";
import Rooms from "Routes/Rooms";
import Shopping from "Routes/Shopping";
import TravelCourse from "Routes/TravelCourse";
import Leisure from "Routes/Leisure";
import Search from "Routes/Search";
import Traffic from "Routes/Traffic";

import Join from "Routes/Join";

import TouristDetail from "Routes/Detail/TouristDetail";
import CulturalDetail from "Routes/Detail/CulturalDetail";
import FestivalDetail from "Routes/Detail/FestivalDetail";
import FoodDetail from "Routes/Detail/FoodDetail";
import LeisureDetail from "Routes/Detail/LeisureDetail";
import RoomsDetail from "Routes/Detail/RoomsDetail";
import ShoppingDetail from "Routes/Detail/ShoppingDetail";
import TravelCourseDetail from "Routes/Detail/TravelCourseDetail";
import TrafficDetail from "Routes/Detail/TrafficDetail";

export default () => (
  <Router>
    <>
      <Header />

      <Switch>
        <Route path="/join" exact component={Join} />

        <Route path="/search" exact component={Search} />

        {/* KorService */}
        <Route path="/" exact component={Main} />

        {/* category */}

        <Route path="/kor/tourist" exact component={Tourist} />
        <Route path="/kor/tourist/:id" exact component={TouristDetail} />
        <Route path="/kor/cultural" exact component={Cultural} />
        <Route path="/kor/cultural/:id" exact component={CulturalDetail} />
        <Route path="/kor/festival" exact component={Festival} />
        <Route path="/kor/festival/:id" exact component={FestivalDetail} />
        <Route path="/kor/food" exact component={Food} />
        <Route path="/kor/food/:id" exact component={FoodDetail} />
        <Route path="/kor/rooms" exact component={Rooms} />
        <Route path="/kor/rooms/:id" exact component={RoomsDetail} />
        <Route path="/kor/shopping" exact component={Shopping} />
        <Route path="/kor/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/kor/travelCourse" exact component={TravelCourse} />
        <Route path="/kor/travelCourse/:id" exact component={TravelCourseDetail} />
        <Route path="/kor/leisure" exact component={Leisure} />
        <Route path="/kor/leisure/:id" exact component={LeisureDetail} />

        {/* EngService */}
        <Route path="/eng" exact component={Main} />
        <Route path="/eng/tourist" exact component={Tourist} />
        <Route path="/eng/tourist/:id" exact component={TouristDetail} />
        <Route path="/eng/cultural" exact component={Cultural} />
        <Route path="/eng/cultural/:id" exact component={CulturalDetail} />
        <Route path="/eng/festival" exact component={Festival} />
        <Route path="/eng/festival/:id" exact component={FestivalDetail} />
        <Route path="/eng/food" exact component={Food} />
        <Route path="/eng/food/:id" exact component={FoodDetail} />
        <Route path="/eng/rooms" exact component={Rooms} />
        <Route path="/eng/rooms/:id" exact component={RoomsDetail} />
        <Route path="/eng/shopping" exact component={Shopping} />
        <Route path="/eng/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/eng/traffic" exact component={Traffic} />
        <Route path="/eng/traffic/:id" exact component={TrafficDetail} />
        <Route path="/eng/leisure" exact component={Leisure} />
        <Route path="/eng/leisure/:id" exact component={LeisureDetail} />

        {/* SpnService */}
        <Route path="/spn" exact component={Main} />
        <Route path="/spn/tourist" exact component={Tourist} />
        <Route path="/spn/tourist/:id" exact component={TouristDetail} />
        <Route path="/spn/cultural" exact component={Cultural} />
        <Route path="/spn/cultural/:id" exact component={CulturalDetail} />
        <Route path="/spn/festival" exact component={Festival} />
        <Route path="/spn/festival/:id" exact component={FestivalDetail} />
        <Route path="/spn/food" exact component={Food} />
        <Route path="/spn/food/:id" exact component={FoodDetail} />
        <Route path="/spn/rooms" exact component={Rooms} />
        <Route path="/spn/rooms/:id" exact component={RoomsDetail} />
        <Route path="/spn/shopping" exact component={Shopping} />
        <Route path="/spn/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/spn/traffic" exact component={Traffic} />
        <Route path="/spn/traffic/:id" exact component={TrafficDetail} />
        <Route path="/spn/leisure" exact component={Leisure} />
        <Route path="/spn/leisure/:id" exact component={LeisureDetail} />

        {/* JpnService */}
        <Route path="/jpn" exact component={Main} />
        <Route path="/jpn/tourist" exact component={Tourist} />
        <Route path="/jpn/tourist/:id" exact component={TouristDetail} />
        <Route path="/jpn/cultural" exact component={Cultural} />
        <Route path="/jpn/cultural/:id" exact component={CulturalDetail} />
        <Route path="/jpn/festival" exact component={Festival} />
        <Route path="/jpn/festival/:id" exact component={FestivalDetail} />
        <Route path="/jpn/food" exact component={Food} />
        <Route path="/jpn/food/:id" exact component={FoodDetail} />
        <Route path="/jpn/rooms" exact component={Rooms} />
        <Route path="/jpn/rooms/:id" exact component={RoomsDetail} />
        <Route path="/jpn/shopping" exact component={Shopping} />
        <Route path="/jpn/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/jpn/traffic" exact component={Traffic} />
        <Route path="/jpn/traffic/:id" exact component={TrafficDetail} />
        <Route path="/jpn/leisure" exact component={Leisure} />
        <Route path="/jpn/leisure/:id" exact component={LeisureDetail} />

        {/* FreService */}
        <Route path="/fre" exact component={Main} />
        <Route path="/fre/tourist" exact component={Tourist} />
        <Route path="/fre/tourist/:id" exact component={TouristDetail} />
        <Route path="/fre/cultural" exact component={Cultural} />
        <Route path="/fre/cultural/:id" exact component={CulturalDetail} />
        <Route path="/fre/festival" exact component={Festival} />
        <Route path="/fre/festival/:id" exact component={FestivalDetail} />
        <Route path="/fre/food" exact component={Food} />
        <Route path="/fre/food/:id" exact component={FoodDetail} />
        <Route path="/fre/rooms" exact component={Rooms} />
        <Route path="/fre/rooms/:id" exact component={RoomsDetail} />
        <Route path="/fre/shopping" exact component={Shopping} />
        <Route path="/fre/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/fre/traffic" exact component={Traffic} />
        <Route path="/fre/traffic/:id" exact component={TrafficDetail} />
        <Route path="/fre/leisure" exact component={Leisure} />
        <Route path="/fre/leisure/:id" exact component={LeisureDetail} />

        {/* GerService */}
        <Route path="/ger" exact component={Main} />
        <Route path="/ger/tourist" exact component={Tourist} />
        <Route path="/ger/tourist/:id" exact component={TouristDetail} />
        <Route path="/ger/cultural" exact component={Cultural} />
        <Route path="/ger/cultural/:id" exact component={CulturalDetail} />
        <Route path="/ger/festival" exact component={Festival} />
        <Route path="/ger/festival/:id" exact component={FestivalDetail} />
        <Route path="/ger/food" exact component={Food} />
        <Route path="/ger/food/:id" exact component={FoodDetail} />
        <Route path="/ger/rooms" exact component={Rooms} />
        <Route path="/ger/rooms/:id" exact component={RoomsDetail} />
        <Route path="/ger/shopping" exact component={Shopping} />
        <Route path="/ger/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/ger/traffic" exact component={Traffic} />
        <Route path="/ger/traffic/:id" exact component={TrafficDetail} />
        <Route path="/ger/leisure" exact component={Leisure} />
        <Route path="/ger/leisure/:id" exact component={LeisureDetail} />

        {/* ChiService */}
        <Route path="/chi" exact component={Main} />
        <Route path="/chi/tourist" exact component={Tourist} />
        <Route path="/chi/tourist/:id" exact component={TouristDetail} />
        <Route path="/chi/cultural" exact component={Cultural} />
        <Route path="/chi/cultural/:id" exact component={CulturalDetail} />
        <Route path="/chi/festival" exact component={Festival} />
        <Route path="/chi/festival/:id" exact component={FestivalDetail} />
        <Route path="/chi/food" exact component={Food} />
        <Route path="/chi/food/:id" exact component={FoodDetail} />
        <Route path="/chi/rooms" exact component={Rooms} />
        <Route path="/chi/rooms/:id" exact component={RoomsDetail} />
        <Route path="/chi/shopping" exact component={Shopping} />
        <Route path="/chi/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/chi/traffic" exact component={Traffic} />
        <Route path="/chi/traffic/:id" exact component={TrafficDetail} />
        <Route path="/chi/leisure" exact component={Leisure} />
        <Route path="/chi/leisure/:id" exact component={LeisureDetail} />

        {/* RusService */}
        <Route path="/chi" exact component={Main} />
        <Route path="/chi/tourist" exact component={Tourist} />
        <Route path="/chi/tourist/:id" exact component={TouristDetail} />
        <Route path="/chi/cultural" exact component={Cultural} />
        <Route path="/chi/cultural/:id" exact component={CulturalDetail} />
        <Route path="/chi/festival" exact component={Festival} />
        <Route path="/chi/festival/:id" exact component={FestivalDetail} />
        <Route path="/chi/food" exact component={Food} />
        <Route path="/chi/food/:id" exact component={FoodDetail} />
        <Route path="/chi/rooms" exact component={Rooms} />
        <Route path="/chi/rooms/:id" exact component={RoomsDetail} />
        <Route path="/chi/shopping" exact component={Shopping} />
        <Route path="/chi/shopping/:id" exact component={ShoppingDetail} />
        <Route path="/chi/traffic" exact component={Traffic} />
        <Route path="/chi/traffic/:id" exact component={TrafficDetail} />
        <Route path="/chi/leisure" exact component={Leisure} />
        <Route path="/chi/leisure/:id" exact component={LeisureDetail} />

        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
