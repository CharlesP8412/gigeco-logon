import React from 'react';
import logo from '../Assets/logo.svg';

export default function Welcome({ user }) {
  const handleLogout = () => {
    window.MemberStack.logout();
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome {user} </h2>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <footer>By Charles Prystupa @CharlesP8412 26 Feb 21</footer>
    </div>
  );
}
