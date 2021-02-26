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

  return (
    <div className='signUp'>
      <h1> Sign Up</h1>
      <form data-ms-form='signup' onSubmit={(e) => e.preventDefault()} autoComplete='off'>
        <label htmlFor='email'>
          <b>Email: </b>
        </label>
        <input
          data-ms-member='email'
          type='text'
          placeholder='Enter email'
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
        <button type='submit'>Sign Up</button>
      </form>
      <Link to='/login'>Already have an account? Login</Link>
    </div>
  );
}
