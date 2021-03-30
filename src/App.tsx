import React from 'react';
import './App.css';
import { Login } from './components/login/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
