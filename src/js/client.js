import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Ranking from "./pages/Ranking";

import Login from "./pages/Login";

import { Provider } from "react-redux";
import store from "./store";

const app = document.getElementById('app');
const dashboard = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Dashboard}></IndexRoute>
    <Route path="Dashboard" component={Dashboard}></Route>
    <Route path="notification" component={Notification}></Route>
    <Route path="ranking" component={Ranking}></Route>
  </Route>
)

const login = (
  <Route path="/" component={Login}>
  </Route>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {login}
    </Router>
  </Provider>, app);
