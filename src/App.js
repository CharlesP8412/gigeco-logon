import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome'
import Login from './components/Login/Index'
import SignUp from './components/SignUp/Index'


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/"><Welcome /></Route>
      </Switch>
    </Router>

  );
}

export default App;
