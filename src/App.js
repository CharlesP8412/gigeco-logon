import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome'
import Login from './components/Login/Index'
import SignUp from './components/SignUp/Index'


function App() {
  let auth = true
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return auth === true
          ? children
          : <Redirect to="/login" />
      }} />
    )
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path='/'><Welcome /></PrivateRoute>
      </Switch>
    </Router >

  );
}

export default App;
