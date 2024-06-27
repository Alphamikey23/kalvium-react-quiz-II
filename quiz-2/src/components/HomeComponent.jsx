import React, { Component } from 'react';

import "./HomeComponent.css";

class HomeComponent extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='app-title'>Welcome to the Quiz App</h1>
        <button className='play-button'>Play</button>
      </div>
    );
  }
}

export default HomeComponent;
