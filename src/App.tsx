import React from 'react';
import './App.css';
import { Landing } from './components/landing/landing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
