// jshint ignore: start



import React, { Component } from 'react';
import './App.css';

var axios = require('axios');


export default class CryptoCurrencyPrices extends Component {

  constructor(props){
    super(props);
    this.state = {
      ethbtc: 'loading...',
      ethusd: 'loading...',
      btcusd: 'loading...'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.functionEthBtcData();
  }

  functionEthBtcData() {
    var self = this

    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=BTC,USD')
      .then(function(response) {
        self.setState({ethbtc : response.data.ETH.BTC});
        self.setState({ethusd : response.data.ETH.USD});
        self.setState({btcusd : response.data.BTC.USD});
      });
  }

  render() {
    return (
        <div>
          <h1> ETH:BTC {this.state.ethbtc} </h1>
          <h1> ETH:USD {this.state.ethusd} </h1>
          <h1> BTC:USD {this.state.btcusd} </h1>
        </div>

    )
  }
}
