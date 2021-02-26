import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';

export default function Welcome({ user }) {
  const handleLogout = () => {
    window.MemberStack.logout();
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Login successful, welcome {user} </h2>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign up</Link>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
}
