import React, { Component } from 'react';

import "./ResultComponent.css";

class ResultComponent extends Component {
  render() {
    return (
      <div className='result-container'>
        <h2 className='result-header'>Result</h2>
        <div className='result-content'>
          <h3 className='result-score'>You need more practice!</h3>
          <h1>Your score is : 20%</h1>
          <div className='result-stats'>
            <p>Total number of questions: 15</p>
            <p>Number of attempted questions: 9</p>
            <p>Number of correct answers: 3</p>
            <p>Number of wrong answers: 6</p>
          </div>
        </div>
        <div className='result-buttons'>
          <button to="/" className='play-again-btn'>Play Again</button>
          <button to="/" className='home-btn'>Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
