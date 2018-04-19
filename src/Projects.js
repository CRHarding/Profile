import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: false,
      showFoodist: false,
      showAppATite: false,
      showCaseyBook: false,
      showWaiterApp: false,
      showPartyHouse: false,
      showCasino: false,
    };
    this.renderProjects = this.renderProjects.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);

    this.toggleFoodist = this.toggleFoodist.bind(this);
    this.toggleAppATite = this.toggleAppATite.bind(this);
    this.toggleCaseyBook = this.toggleCaseyBook.bind(this);
    this.toggleWaiterApp = this.toggleWaiterApp.bind(this);
    this.togglePartyHouse = this.togglePartyHouse.bind(this);
    this.toggleCasino = this.toggleCasino.bind(this);
  }

  toggleProjects() {
    this.setState({
      showProjects: !this.state.showProjects,
    });
  }

  toggleFoodist() {
    this.setState({
      showFoodist: !this.state.showFoodist,
    });
  }

  toggleAppATite() {
    this.setState({
      showAppATite: !this.state.showAppATite,
    });
  }

  toggleCaseyBook() {
    this.setState({
      showCaseyBook: !this.state.showCaseyBook,
    });
  }

  toggleWaiterApp() {
    this.setState({
      showWaiterApp: !this.state.showWaiterApp,
    });
  }

  togglePartyHouse() {
    this.setState({
      showPartyHouse: !this.state.showPartyHouse,
    });
  }

  toggleCasino() {
    this.setState({
      showCasino: !this.state.showCasino,
    });
  }

  renderProjects() {
    return (
      <div className="row">
        <div className="col s8">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={require('./images/Foodist.png')}
                alt="food"
              />
            </div>
            <div className="card-content">
              <h5
                card-title
                activator
                grey-text
                text-darken-4
                onClick={this.toggleFoodist}
                style={{ cursor: 'pointer' }}
              >
                <span className="card-title activator grey-text text-darken-4">
                  <i className="material-icons right">more_vert</i>
                </span>
                YouAreFoodist : React, Redux, Rails
              </h5>
            </div>
            <div className="card-reveal">
              <h5>Foodist</h5>
              <span class="card-title grey-text text-darken-4">
                Card Title<i class="material-icons right">close</i>
              </span>{' '}
              <p className="flow-text">
                Have you ever looked up a recipe only to have to scroll through
                five hundred comments to make sure that it's worthwhile to
                invest your time, energy, and money into making? This app acts
                as the Reddit of recipes. Users can vote recipes as well as
                comments up and down and the highest rated comments for each
                recipe are shown first.
              </p>
              <a
                href="https://github.com/CRHarding/Foodist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  settings
                </i>Github
              </a>
              <a
                href="https://youarefoodist.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  add_to_queue
                </i>See Live
              </a>
            </div>
          </div>
        </div>
        <div class="col s8">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={require('./images/AppATite.png')}
                alt="App A Tite"
              />
            </div>
            <div className="card-content">
              <h5
                card-title
                activator
                grey-text
                text-darken-4
                onClick={this.toggleFoodist}
                style={{ cursor: 'pointer' }}
              >
                <span className="card-title activator grey-text text-darken-4">
                  <i className="material-icons right">more_vert</i>
                </span>
                App-A-Tite : React, Express, Node
              </h5>
            </div>
            <div className="card-reveal">
              <h5>App-A-Tite</h5>
              <span class="card-title grey-text text-darken-4">
                Card Title<i class="material-icons right">close</i>
              </span>{' '}
              <p className="flow-text">
                This app was created to solve the current problem of
                Yelp-Fatigue. Visitors will be able to read and review their
                favorite/least favorite restaraunts. Reviews posted on a
                particular restaraunt will feature 3rd party reviews from sites
                such as yelp and google reviews. It allows the users to form a
                better opinion of a restaraunt without having to dig through the
                quagmire of Yelp...
              </p>
              <a
                href="https://github.com/CRHarding/appatite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  settings
                </i>Github
              </a>
              <a
                href="https://app-a-tite.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  add_to_queue
                </i>See Live
              </a>
            </div>
          </div>
        </div>
        <div class="col s8">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={require('./images/CaseyBook.png')}
                alt="Casey Book"
              />
            </div>
            <div className="card-content">
              <h5
                card-title
                activator
                grey-text
                text-darken-4
                onClick={this.toggleFoodist}
                style={{ cursor: 'pointer' }}
              >
                <span className="card-title activator grey-text text-darken-4">
                  <i className="material-icons right">more_vert</i>
                </span>
                CaseyBook : Express, Node
              </h5>
            </div>
            <div className="card-reveal">
              <h5>Casey Book</h5>
              <span class="card-title grey-text text-darken-4">
                Card Title<i class="material-icons right">close</i>
              </span>{' '}
              <p className="flow-text">
                CaseyBook is a rough clone of the popular social media site,
                Facebook...only without the data mining / selling. I went onto
                Facebook one day after buying a pair of shoes on Amazon and saw
                nothing but shoe ads...I got sick of it, so I made this app. The
                user will have the ability to create a new account, friend other
                users, write on users walls, comment on users comments on their
                walls, and delete their account.
              </p>
              <a
                href="https://github.com/CRHarding/CaseyBook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  settings
                </i>Github
              </a>
              <a
                href="https://caseybook.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  add_to_queue
                </i>See Live
              </a>
            </div>
          </div>
        </div>
        <div class="col s8">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={require('./images/WaiterApp.png')}
                alt="Waiter App"
              />
            </div>
            <div className="card-content">
              <h5
                card-title
                activator
                grey-text
                text-darken-4
                onClick={this.toggleWaiterApp}
                style={{ cursor: 'pointer' }}
              >
                <span className="card-title activator grey-text text-darken-4">
                  <i className="material-icons right">more_vert</i>
                </span>
                Waiter-App : Ruby, Rails
              </h5>
            </div>
            <div className="card-reveal">
              <h5>Waiter App</h5>
              <span class="card-title grey-text text-darken-4">
                Card Title<i class="material-icons right">close</i>
              </span>{' '}
              <p className="flow-text">
                As a server for twelve years I know full well the frustration of
                a bad Point of Service system. This app was made to solve a lot
                of the problems that most popular POS sytems have.
              </p>
              <a
                href="https://github.com/britt-ryant/waiter_app_ruby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  settings
                </i>Github
              </a>
              <a
                href="https://waiter-app-rails.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons" style={{ cursor: 'pointer' }}>
                  add_to_queue
                </i>See Live
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2 onClick={this.toggleProjects} style={{ cursor: 'pointer' }}>
          <i className="material-icons">add</i>
          Projects
        </h2>
        {this.state.showProjects ? this.renderProjects() : ''}
      </div>
    );
  }
}

export default Projects;

/* <div class="col s12">
  <div class="card-image waves-effect waves-block waves-light">
    <div>
      <h5 onClick={this.togglePartyHouse} style={{ cursor: 'pointer' }}>
        Party House : Python, Django
      </h5>
      <i
        className="material-icons"
        onClick={this.togglePartyHouse}
        style={{ cursor: 'pointer' }}
      >
        {this.state.showPartyHouse
          ? 'arrow_drop_up'
          : 'arrow_drop_down'}
      </i>
      {this.state.showPartyHouse ? (
        <div>
          <p className="flow-text">
            Have you ever planned a super cool party only to realize
            that you don't have any friends? Well I have, and it sucks.
            This app solves that problem by being an airbnb / couch
            hopping app. People can post a party with only a general
            location (zip code, city, etc, etc) and users can sign up to
            attend the party based on the location / description. From
            there the party hoster can view past comments of users /
            past parties the user said they were going to attend /
            parties that the user actually attended and judge whether to
            invite the person to their party or not. After the party has
            ended both party-goers and party-throwers can review / rate
            each other.
          </p>
          <a href="https://github.com/CRHarding/party_house">
            <i className="material-icons" style={{ cursor: 'pointer' }}>
              settings
            </i>Github
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
</div>
<div class="col s12">
  <div class="card-image waves-effect waves-block waves-light">
    <div>
      <h5 onClick={this.toggleCasino} style={{ cursor: 'pointer' }}>
        Casino : JavaScript
      </h5>
      <i
        className="material-icons"
        onClick={this.toggleCasino}
        style={{ cursor: 'pointer' }}
      >
        {this.state.showCasino ? 'arrow_drop_up' : 'arrow_drop_down'}
      </i>
      {this.state.showCasino ? (
        <div>
          <p className="flow-text">
            I created Casino because my Dad got sick of playing
            Solitaire on his computer and I wanted to give him something
            a bit more interesting. You start by playing Minesweeper to
            earn credits which you can then bet at the BlackJack / Poker
            tables.
          </p>
          <a href="https://github.com/CRHarding/Casino">
            <i className="material-icons" style={{ cursor: 'pointer' }}>
              settings
            </i>Github
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
</div> */
