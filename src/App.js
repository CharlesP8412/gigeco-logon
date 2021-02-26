import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome'
import Login from './components/Login/Index'
import SignUp from './components/SignUp/Index'


function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={Welcome} />
    </Router>

  );
}

export default App;
