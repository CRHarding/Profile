import React from 'react';

const Footer = () => {
  return (
    <footer class="page-footer hoverable">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Thanks for visiting!</h5>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/casey-harding/" target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://github.com/CRHarding" target="_blank"
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
