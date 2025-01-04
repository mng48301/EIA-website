// filepath: /c:/Users/mng48/source/repos/projects/websites/eia-club/src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={require('../EIAlogo.jpeg')} alt="EIA Club Logo" className='logo-img' />
      </div>
      <h1>Entrepreneurs in Action</h1>
      <h2>Oakland University</h2>
    </header>
  );
}

export default Header;