import React from 'react';

const Projects = () => {
  return (
    <div className="container">
      <p
        className="center flow-text grey-text text-darken-1"
      >
        <span style={{ fontSize: '40px', fontStyle: 'bold', fontFamily: 'Dawning of a New Day' }}>Projects</span>

      </p>

      <ul className="collapsible">
        <li>
          <div className="collapsible-header grey-text text-darken-1" style={{ fontSize: '20px', fontFamily: 'Anonymous Pro' }}>
            YouAreFoodist: React, Redux, Rails
            <i className="material-icons right">dehaze</i>
          </div>
          <div className="collapsible-body">
            <span style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}>
              Have you ever looked up a recipe only to have to scroll through
              five hundred comments to make sure that it's worthwhile to invest
              your time, energy, and money into making? This app acts as the
              Reddit of recipes. Users can vote recipes as well as comments up
              and down and the highest rated comments for each recipe are shown
              first.
            </span>
            <br />
            <a
              href="https://github.com/CRHarding/Foodist"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                settings
              </i>Github
            </a>
            <a
              href="https://youarefoodist.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                add_to_queue
              </i>See Live
            </a>
          </div>
        </li>
        <li>
          <div className="collapsible-header grey-text text-darken-1" style={{ fontSize: '20px', fontFamily: 'Anonymous Pro' }}>
            App-A-Tite : React, Express, Node
            <i className="material-icons right">dehaze</i>
          </div>
          <div className="collapsible-body">
            <span style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}>
              This app was created to solve the current problem of Yelp-Fatigue.
              Visitors will be able to read and review their favorite/least
              favorite restaraunts. Reviews posted on a particular restaraunt
              will feature 3rd party reviews from sites such as Yelp and Google
              reviews. It allows the users to form a better opinion of a
              restaraunt without having to dig through the quagmire of Yelp...
            </span>
            <br />
            <a
              href="https://github.com/CRHarding/appatite"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                settings
              </i>Github
            </a>
            <a
              href="https://app-a-tite.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                add_to_queue
              </i>See Live
            </a>
          </div>
        </li>
        <li>
          <div className="collapsible-header grey-text text-darken-1" style={{ fontSize: '20px', fontFamily: 'Anonymous Pro' }}>
            CaseyBook : Express, Node
            <i className="material-icons right">dehaze</i>
          </div>
          <div className="collapsible-body">
            <span style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}>
              CaseyBook is a rough clone of the popular social media site,
              Facebook...only without the data mining / selling. I went onto
              Facebook one day after buying a pair of shoes on Amazon and saw
              nothing but shoe ads...I got sick of it, so I made this app. The
              user will have the ability to create a new account, friend other
              users, write on users' walls, comment on users' comments on their
              walls, and delete their account.
            </span>
            <br />
            <a
              href="https://github.com/CRHarding/CaseyBook"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                settings
              </i>Github
            </a>
            <a
              href="https://caseybook.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                add_to_queue
              </i>See Live
            </a>
          </div>
        </li>
        <li>
          <div className="collapsible-header grey-text text-darken-1" style={{ fontSize: '20px', fontFamily: 'Anonymous Pro' }}>
            Waiter-App : Ruby, Rails
            <i className="material-icons right">dehaze</i>
          </div>
          <div className="collapsible-body">
            <span style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}>
              As a server for twelve years I know full well the frustration of a
              bad Point of Service system. This app was made to solve a lot of
              the problems that most popular POS systems have.
            </span>
            <br />
            <a
              href="https://github.com/britt-ryant/waiter_app_ruby"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                settings
              </i>Github
            </a>
            <a
              href="https://waiter-app-rails.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontFamily: 'Anonymous Pro' }}
            >
              <i className="material-icons" style={{ cursor: 'pointer' }}>
                add_to_queue
              </i>See Live
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
