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
const token = localStorage.getItem("token");

function redirectLogin(nextState, replace) {

    if(!token){
      replace({
        pathname: "/login"
      });
    }
}

function redirectDashboard(nextState, replace) {

    if(token){
      replace({
        pathname: "/dashboard"
      });
    }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="login" component={Login} onEnter={redirectDashboard}></Route>
      <Route path="/" component={Layout} onEnter={redirectLogin}>
        <IndexRoute component={Dashboard}></IndexRoute>
        <Route path="dashboard" component={Dashboard}></Route>
        <Route path="notification" component={Notification}></Route>
        <Route path="ranking" component={Ranking}></Route>
      </Route>
    </Router>
  </Provider>, app);
