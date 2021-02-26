import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Index(props) {
  const [form, setForm] = useState();
  // useEffect(() => {
  //   window.MemberStack.reload();
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1> Please Login</h1>
      <form data-ms-form='login' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='email'>
          <b>Email: </b>
        </label>
        <input
          data-ms-member='email'
          type='text'
          placeholder='Enter your email'
          name='email'
          required
          onChange={handleChange}
        />
        <label htmlFor='password'>
          <b>Password: </b>
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
      <Link to='/signup'>Sign up</Link>
    </div>
  );
}
