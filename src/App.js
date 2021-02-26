import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome'
import Login from './components/Login/Index'
import SignUp from './components/SignUp/Index'


function App() {
  useEffect(() => {
    //Reload Required when using React
    window.MemberStack.reload();
    console.log("MS Loaded")
  }, []);

  const [msStorage, setStorage] = React.useState(
    JSON.parse(localStorage.getItem('memberstack')) || ''
  );
  const userEmail = msStorage.email

  console.log("TEST", userEmail)
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return userEmail
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
        <PrivateRoute path='/'><Welcome user={userEmail} /></PrivateRoute>
      </Switch>
    </Router >

  );
}

export default App;
