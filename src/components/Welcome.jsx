import React from 'react';
import logo from '../Assets/logo.svg';

export default function Welcome() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        Login successful, welcome
      </header>
    </div>
  );
}
