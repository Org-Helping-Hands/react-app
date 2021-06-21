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
import { FollowPost } from "./components/help/follow-post";
import { Contribution } from "./components/contribution-page/contribution";
import { hbox } from "./components/hbox/hbox";
import { Thankyou } from "./components/thankyou/thankyou";
import { useState } from "react";
import { useEffect } from "react";
import { fromEvent } from "rxjs";

function App() {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fromEvent(window, "resize").subscribe((_) => {
      setWidth(window.innerWidth);
    });
  }, []);
  function isDesktop() {
    return width > 471;
  }
  function getElements() {
    if (isDesktop()) {
      return (
        <div className="alert alert-primary m-5">
          <h1>Please switch to mobile or decrease width of window</h1>
        </div>
      );
    } else {
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
            <Route path="/follow-post" component={FollowPost} />
            <Route path="/contribution" component={Contribution} />
            <Route path="/hbox" component={hbox} />
            <Route path="/thankyou" component={Thankyou} />
          </Switch>
        </Router>
      );
    }
  }
  return getElements();
}

export default App;
