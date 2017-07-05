// jshint ignore: start

import React from 'react';
import './App.css';

var axios = require('axios');
var moment = require('moment-timezone');



export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      temp: 'loading',
      sunrise: 'loading',
      sunset: 'loading',
      description: 'loading',
      icon: 'loading'
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
    this.getWeatherData()
  }

  getWeatherData() {
    var self = this

    axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=c0aa4a52800da5ba5d71dbfb5c73a745')
      .then(function(response) {
        self.setState({temp : response.data.main.temp + ' °C'});
        var sunriseUtc =  moment.tz(response.data.sys.sunrise * 1000, "London");
        var sunsetUtc = moment.tz(response.data.sys.sunset * 1000, "London");
        self.setState({sunrise : sunriseUtc._d.getHours() + ":" + sunriseUtc._d.getMinutes() + ' am'});
        self.setState({sunset :  sunsetUtc._d.getHours() + ":" + sunsetUtc._d.getMinutes() + ' pm'});
        self.setState({description : response.data.weather[0].main});
        self.setState({icon : 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png'});
        debugger;
      });
  }

  render() {
    return (
      <div>
        <div>
          <h2>{this.state.temp}</h2>
          <h2>Sunrise at {this.state.sunrise}</h2>
          <h2>Sunset at {this.state.sunset}</h2>
          <h2>{this.state.description}</h2>
        </div>
        <div>
          <img src={this.state.icon}/>
        </div>
      </div>
    );
  }
}
