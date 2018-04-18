import React from 'react';

const Header = () => {
  return (
    <nav className="nav-extended hoverable">
      <div className="nav-wrapper">
        <h1 className="brand-logo">Casey Harding</h1>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://www.linkedin.com/in/casey-harding/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/CRHarding" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
