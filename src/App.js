import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome'


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/"><Welcome /></Route>
      </Switch>
    </Router>

  );
}

export default App;
