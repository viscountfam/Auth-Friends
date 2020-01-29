import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <nav>
            <Link to="/login">Login</Link>
      </nav>
      <Switch>
        <PrivateRoute path="/home" component={Home}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
