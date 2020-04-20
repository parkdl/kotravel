import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "Routes/Home";

import Category from "Routes/Category";
import Area from "Routes/Area";

import Detail from "Routes/Detail";
import SearchResult from "Routes/SearchResult";

export default () => (
  <Router>
    <>
      <Switch>
        {/* Home */}
        <Route path="/" exact component={Home} />
        <Route path="/kor" exact component={Home} />
        <Route path="/eng" exact component={Home} />
        <Route path="/spn" exact component={Home} />
        <Route path="/jpn" exact component={Home} />
        <Route path="/fre" exact component={Home} />
        <Route path="/ger" exact component={Home} />
        <Route path="/chi" exact component={Home} />
        <Route path="/rus" exact component={Home} />

        {/* Search */}
        <Route path="/kor/searchResult" exact component={SearchResult} />
        <Route path="/eng/searchResult" exact component={SearchResult} />
        <Route path="/spn/searchResult" exact component={SearchResult} />
        <Route path="/jpn/searchResult" exact component={SearchResult} />
        <Route path="/chi/searchResult" exact component={SearchResult} />
        <Route path="/fre/searchResult" exact component={SearchResult} />
        <Route path="/ger/searchResult" exact component={SearchResult} />
        <Route path="/rus/searchResult" exact component={SearchResult} />

        {/* Area */}
        <Route path="/kor/area" exact component={Area} />
        <Route path="/eng/area" exact component={Area} />
        <Route path="/spn/area" exact component={Area} />
        <Route path="/jpn/area" exact component={Area} />
        <Route path="/fre/area" exact component={Area} />
        <Route path="/ger/area" exact component={Area} />
        <Route path="/chi/area" exact component={Area} />
        <Route path="/rus/area" exact component={Area} />

        {/* Category */}
        <Route path="/kor/tourist" exact component={Category} />
        <Route path="/kor/cultural" exact component={Category} />
        <Route path="/kor/festival" exact component={Category} />
        <Route path="/kor/food" exact component={Category} />
        <Route path="/kor/rooms" exact component={Category} />
        <Route path="/kor/shopping" exact component={Category} />
        <Route path="/kor/travelCourse" exact component={Category} />
        <Route path="/kor/leisure" exact component={Category} />

        {/* USA */}
        <Route path="/eng/tourist" exact component={Category} />
        <Route path="/eng/cultural" exact component={Category} />
        <Route path="/eng/festival" exact component={Category} />
        <Route path="/eng/food" exact component={Category} />
        <Route path="/eng/rooms" exact component={Category} />
        <Route path="/eng/shopping" exact component={Category} />
        <Route path="/eng/traffic" exact component={Category} />
        <Route path="/eng/leisure" exact component={Category} />
        {/* Spain */}
        <Route path="/spn/tourist" exact component={Category} />
        <Route path="/spn/cultural" exact component={Category} />
        <Route path="/spn/festival" exact component={Category} />
        <Route path="/spn/food" exact component={Category} />
        <Route path="/spn/rooms" exact component={Category} />
        <Route path="/spn/shopping" exact component={Category} />
        <Route path="/spn/traffic" exact component={Category} />
        <Route path="/spn/leisure" exact component={Category} />
        {/* Japan */}
        <Route path="/jpn/tourist" exact component={Category} />
        <Route path="/jpn/cultural" exact component={Category} />
        <Route path="/jpn/festival" exact component={Category} />
        <Route path="/jpn/food" exact component={Category} />
        <Route path="/jpn/rooms" exact component={Category} />
        <Route path="/jpn/shopping" exact component={Category} />
        <Route path="/jpn/traffic" exact component={Category} />
        <Route path="/jpn/leisure" exact component={Category} />
        {/* France */}
        <Route path="/fre/tourist" exact component={Category} />
        <Route path="/fre/cultural" exact component={Category} />
        <Route path="/fre/festival" exact component={Category} />
        <Route path="/fre/food" exact component={Category} />
        <Route path="/fre/rooms" exact component={Category} />
        <Route path="/fre/shopping" exact component={Category} />
        <Route path="/fre/traffic" exact component={Category} />
        <Route path="/fre/leisure" exact component={Category} />
        {/* Germany */}
        <Route path="/ger/tourist" exact component={Category} />
        <Route path="/ger/cultural" exact component={Category} />
        <Route path="/ger/festival" exact component={Category} />
        <Route path="/ger/food" exact component={Category} />
        <Route path="/ger/rooms" exact component={Category} />
        <Route path="/ger/shopping" exact component={Category} />
        <Route path="/ger/traffic" exact component={Category} />
        <Route path="/ger/leisure" exact component={Category} />
        {/* China */}
        <Route path="/chi/tourist" exact component={Category} />
        <Route path="/chi/cultural" exact component={Category} />
        <Route path="/chi/festival" exact component={Category} />
        <Route path="/chi/food" exact component={Category} />
        <Route path="/chi/rooms" exact component={Category} />
        <Route path="/chi/shopping" exact component={Category} />
        <Route path="/chi/traffic" exact component={Category} />
        <Route path="/chi/leisure" exact component={Category} />
        {/* Russia */}
        <Route path="/rus/tourist" exact component={Category} />
        <Route path="/rus/cultural" exact component={Category} />
        <Route path="/rus/festival" exact component={Category} />
        <Route path="/rus/food" exact component={Category} />
        <Route path="/rus/rooms" exact component={Category} />
        <Route path="/rus/shopping" exact component={Category} />
        <Route path="/rus/traffic" exact component={Category} />
        <Route path="/rus/leisure" exact component={Category} />

        {/* Detail */}
        <Route path="/kor/tourist/:id" exact component={Detail} />
        <Route path="/kor/cultural/:id" exact component={Detail} />
        <Route path="/kor/festival/:id" exact component={Detail} />
        <Route path="/kor/food/:id" exact component={Detail} />
        <Route path="/kor/rooms/:id" exact component={Detail} />
        <Route path="/kor/shopping/:id" exact component={Detail} />
        <Route path="/kor/travelCourse/:id" exact component={Detail} />
        <Route path="/kor/leisure/:id" exact component={Detail} />
        {/* USA */}
        <Route path="/eng/tourist/:id" exact component={Detail} />
        <Route path="/eng/cultural/:id" exact component={Detail} />
        <Route path="/eng/festival/:id" exact component={Detail} />
        <Route path="/eng/food/:id" exact component={Detail} />
        <Route path="/eng/rooms/:id" exact component={Detail} />
        <Route path="/eng/shopping/:id" exact component={Detail} />
        <Route path="/eng/traffic/:id" exact component={Detail} />
        <Route path="/eng/leisure/:id" exact component={Detail} />

        {/* Spain */}
        <Route path="/spn/tourist/:id" exact component={Detail} />
        <Route path="/spn/cultural/:id" exact component={Detail} />
        <Route path="/spn/festival/:id" exact component={Detail} />
        <Route path="/spn/food/:id" exact component={Detail} />
        <Route path="/spn/rooms/:id" exact component={Detail} />
        <Route path="/spn/shopping/:id" exact component={Detail} />
        <Route path="/spn/traffic/:id" exact component={Detail} />
        <Route path="/spn/leisure/:id" exact component={Detail} />

        {/* Japan */}
        <Route path="/jpn/tourist/:id" exact component={Detail} />
        <Route path="/jpn/cultural/:id" exact component={Detail} />
        <Route path="/jpn/festival/:id" exact component={Detail} />
        <Route path="/jpn/food/:id" exact component={Detail} />
        <Route path="/jpn/rooms/:id" exact component={Detail} />
        <Route path="/jpn/shopping/:id" exact component={Detail} />
        <Route path="/jpn/traffic/:id" exact component={Detail} />
        <Route path="/jpn/leisure/:id" exact component={Detail} />

        {/* France */}
        <Route path="/fre/tourist/:id" exact component={Detail} />
        <Route path="/fre/cultural/:id" exact component={Detail} />
        <Route path="/fre/festival/:id" exact component={Detail} />
        <Route path="/fre/food/:id" exact component={Detail} />
        <Route path="/fre/rooms/:id" exact component={Detail} />
        <Route path="/fre/shopping/:id" exact component={Detail} />
        <Route path="/fre/traffic/:id" exact component={Detail} />
        <Route path="/fre/leisure/:id" exact component={Detail} />

        {/* Germany */}
        <Route path="/ger/tourist/:id" exact component={Detail} />
        <Route path="/ger/cultural/:id" exact component={Detail} />
        <Route path="/ger/festival/:id" exact component={Detail} />
        <Route path="/ger/food/:id" exact component={Detail} />
        <Route path="/ger/rooms/:id" exact component={Detail} />
        <Route path="/ger/shopping/:id" exact component={Detail} />
        <Route path="/ger/traffic/:id" exact component={Detail} />
        <Route path="/ger/leisure/:id" exact component={Detail} />

        {/* China */}
        <Route path="/chi/tourist/:id" exact component={Detail} />
        <Route path="/chi/cultural/:id" exact component={Detail} />
        <Route path="/chi/festival/:id" exact component={Detail} />
        <Route path="/chi/food/:id" exact component={Detail} />
        <Route path="/chi/rooms/:id" exact component={Detail} />
        <Route path="/chi/shopping/:id" exact component={Detail} />
        <Route path="/chi/traffic/:id" exact component={Detail} />
        <Route path="/chi/leisure/:id" exact component={Detail} />

        {/* Russia */}
        <Route path="/rus/tourist/:id" exact component={Detail} />
        <Route path="/rus/cultural/:id" exact component={Detail} />
        <Route path="/rus/festival/:id" exact component={Detail} />
        <Route path="/rus/food/:id" exact component={Detail} />
        <Route path="/rus/rooms/:id" exact component={Detail} />
        <Route path="/rus/shopping/:id" exact component={Detail} />
        <Route path="/rus/traffic/:id" exact component={Detail} />
        <Route path="/rus/leisure/:id" exact component={Detail} />

        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
