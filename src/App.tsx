import React from 'react';
import './App.css';
import { Login } from './components/login/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/home/home';
import { EnterOtp } from './components/enterOtp/enterOtp';
import { Signin } from './components/signin/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/enterOtp" component={EnterOtp} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
