import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer hoverable light-blue lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text" style={{ fontFamily: 'Script12 BT' }}>Thanks for visiting!</h5>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text" style={{ fontFamily: 'Script12 BT' }}>Links</h5>
            <ul>
              <li>
                <a style={{ fontFamily: 'Script12 BT' }}
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/casey-harding/" target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a style={{ fontFamily: 'Script12 BT' }}
                  className="grey-text text-lighten-3"
                  href="https://github.com/CRHarding" target="_blank"
                  rel="noopener noreferrer"
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
