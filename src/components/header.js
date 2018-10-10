import React from 'react';
import '../css/header.css';

function Header({ user }) {
  const {name, status} = user;
  return (
    <header className="header">
      <h1 className="header_name">{name}</h1>
      <p className="header_status">{status}</p>
    </header>
  );
}

export default Header;
