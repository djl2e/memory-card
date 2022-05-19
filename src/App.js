import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playerIdOrder, setPlayerIdOrder] = useState([]);
  const [numClicked, setNumClicked] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <div className="container">
      <Header currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}

export default App;
