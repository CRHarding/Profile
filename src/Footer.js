import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer hoverable light-blue lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l12 s12">
            <h5
              className="white-text"
              style={{ fontSize: '30px' }}
            >
              Thanks for visiting!
            </h5>
            <h5
              className="white-text"
            >
              Links
            </h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/casey-harding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '15px' }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/CRHarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '15px' }}
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
