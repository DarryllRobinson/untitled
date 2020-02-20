import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: 1
    };
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  gotoCard(card) {
    console.log('gotoCard');
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          isAuthenticated() && (
            <div>
              <p>List of active cards</p>
              <button onClick={this.gotoCard.bind(this, this.state.campaign)}>Load card</button>
              <p>List of other cards</p>

              <button onClick={this.logout.bind(this)}>Log out</button>
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <div>
              <button onClick={this.login.bind(this)}>Log in or sign up here</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;
