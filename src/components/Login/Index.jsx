import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index(props) {
  const [form, setForm] = useState();
  const test = { username: 'test', password: 'test' };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    console.log('CLICK');
    //Hard Coded auth
    if (form) {
      if (test.username === form.username && test.password === form.password) {
        return props.history.push('/');
      }
    }
  };
  return (
    <div>
      <h1> LOGIN PAGE</h1>
      <form data-ms-form='login' onSubmit={(event) => event.preventDefault()}>
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
        <button type='submit' onClick={handleSubmit}>
          Login
        </button>
      </form>
      <Link to='/signup'>Sign up</Link>
    </div>
  );
}
