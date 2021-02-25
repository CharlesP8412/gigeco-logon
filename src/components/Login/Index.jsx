import React, { useState } from 'react';

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
    console.log('CLICK Submit', form);
  };
  return (
    <div>
      <h1> LOGIN PAGE</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label for='username'>
          <b>Username</b>
        </label>
        <input type='text' placeholder='Enter Username' name='username' required onChange={handleChange} />
        <label for='password'>
          <b>Password</b>
        </label>
        <input type='password' placeholder='Enter Password' name='password' required onChange={handleChange} />
        <button type='submit' onClick={() => handleSubmit()}>
          Login
        </button>
      </form>
    </div>
  );
}
