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
import { Signin } from "./components/signin/signin";
import { getToken } from "./common/user";
import GuardedRoute from "./components/guardedRoute";
import { DoPost } from "./components/do-post/do-post";
import { FindNeedy } from "./components/find-needy/find-needy";
import { DetailedPost } from "./components/detailed-post/detailed-post";
import { help } from "./components/help/help";
import { Contribution} from "./components/contribution-page/contribution"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/landing" component={Landing} />
        <GuardedRoute path="/home" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/find-needy" component={FindNeedy} />
        <Route path="/do-post" component={DoPost} />
        <Route path="/detailed-post" component={DetailedPost} />
        <Route path="/help" component={help} />
        <Route path="/contribution" component={Contribution}/>
      </Switch>
    </Router>
  );
}

export default App;
