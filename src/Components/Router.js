import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Tourist from "Routes/Tourist";

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Tourist} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
