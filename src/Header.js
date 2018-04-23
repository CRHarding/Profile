import React from 'react';

const Header = () => {
  return (
    <nav className="nav-extended hoverable light-blue lighten-1" style={{ height: "150px"}}>
      <div className="nav-wrapper">
        <div className="center"><i className="material-icons">face</i></div>
        <h1
          className="brand-logo center"
          style={{ fontFamily: 'Dawning of a New Day', verticalAlign: 'bottom', fontSize: '40px' }}
        >
          Casey Harding
        </h1>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://www.linkedin.com/in/casey-harding/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CRHarding"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
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
