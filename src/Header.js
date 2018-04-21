import React from 'react';

const Header = () => {
  return (
    <nav className="nav-extended hoverable light-blue lighten-1" style={{ height: "150px"}}>
      <div className="nav-wrapper">
        <div className="center"><i className="material-icons">face</i></div>
        <h1
          className="brand-logo center"
          style={{ fontFamily: 'Script12 BT', verticalAlign: 'bottom' }}
        >
          Casey Harding
        </h1>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://www.linkedin.com/in/casey-harding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CRHarding"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
