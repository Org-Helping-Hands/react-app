import React from "react";
import "./App.css";
import { Landing } from "./components/landing/landing";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home } from "./components/home/home";
import { EnterOtp } from "./components/enterOtp/enterOtp";
import { Signin } from "./components/signin/signin";
import { getToken } from "./common/user";
import GuardedRoute from "./components/guardedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/landing" component={Landing} />
        <GuardedRoute path="/home" component={Home} />
        <Route path="/enterOtp" component={EnterOtp} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
