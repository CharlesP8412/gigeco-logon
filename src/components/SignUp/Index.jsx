import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

export default function Index(props) {
  const [form, setForm] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CLICK SUBMIT');
    //Create User Obj and Send to mbrstack
    //Once Cfm'd redirect to home
    return props.history.push('/');
  };
  return (
    <div>
      <h1> SIGNUP PAGE!</h1>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor='username'>
          <b>Username</b>
        </label>
        <input type='text' placeholder='Enter Username' name='username' required onChange={handleChange} />
        <label htmlFor='password'>
          <b>Password</b>
        </label>
        <input type='password' placeholder='Enter Password' name='password' required onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
      <Link to='/login'>Login</Link>
    </div>
  );
}
