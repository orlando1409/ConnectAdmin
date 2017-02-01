import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Ranking from "./pages/Ranking";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="notification" component={Notification}></Route>
      <Route path="ranking" component={Ranking}></Route>
    </Route>
  </Router>,
app);
