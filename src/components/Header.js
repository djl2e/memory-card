import React from 'react';

function Header(props) {
  const { currentScore, bestScore } = props;
  return (
    <div className="header-container">
      <div className="current-score-container">
        <h2>Current Score: </h2>
        <h2>{currentScore}</h2>
      </div>
      <h1>Basketball Memory Game</h1>
      <div className="best-score-container">
        <h2>Best Score: </h2>
        <h2>{bestScore}</h2>
      </div>
    </div>
  );
}

export default Header;
