import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogState from './Auth/LogState';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;



    return (
      <div>
        {
          isAuthenticated() && (
            <div>isAuthenticated</div>
          )
        }
      </div>
    )
  }
}

export default App;
