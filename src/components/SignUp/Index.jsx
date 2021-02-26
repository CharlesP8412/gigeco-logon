import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    // return props.history.push('/');
  };
  return (
    <div>
      <h1> SIGNUP PAGE!</h1>
      <form data-ms-form='signup' onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor='username'>
          <b>Username</b>
        </label>
        <input
          data-ms-member='email'
          type='text'
          placeholder='Enter Username'
          name='username'
          required
          onChange={handleChange}
        />
        <label htmlFor='password'>
          <b>Password</b>
        </label>
        <input
          data-ms-member='password'
          type='password'
          placeholder='Enter Password'
          name='password'
          required
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
      <Link to='/login'>Login</Link>
      <button data-ms-membership='60381549ec2dc10004917c87'>Test</button>
    </div>
  );
}
