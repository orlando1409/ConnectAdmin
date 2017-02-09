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

function requireAuth(nextState, replace) {

    var x = false;

    if(!x){
      console.log(replace)
      replace({
        pathname: "/login",
      });
    }

}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="login" component={Login}></Route>
      <Route path="/" component={Layout} onEnter={requireAuth}>
        <IndexRoute component={Dashboard}></IndexRoute>
        <Route path="dashboard" component={Dashboard}></Route>
        <Route path="notification" component={Notification}></Route>
        <Route path="ranking" component={Ranking}></Route>
      </Route>
    </Router>
  </Provider>, app);
