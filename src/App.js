// jshint ignore: start

import React, { Component } from 'react';
import logo from './logo.svg';
import TimeNow from './TimeNow';
import Weather from './Weather';
import CryptoCurrencyPrices from './EthData';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Ed-Intro" >
          <h2 className="Ed-Intro">Eds Personal Dashbaord</h2>
            <img src={logo} className="App-logo" alt="logo" />
            < TimeNow />
          </div>
        </div>
        <p className="App-intro">
          < CryptoCurrencyPrices />
        </p>
        < Weather />
      </div>
    );
  }
}

export default App;
