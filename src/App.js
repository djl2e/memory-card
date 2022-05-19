import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import playerData from './data/data';

function App() {
  // const [loading, setLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playerIdOrder, setPlayerIdOrder] = useState([]);
  const [numClicked, setNumClicked] = useState(
    Object.fromEntries([...Array(16).keys()].map((key) => [key, 0])),
  );
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setPlayerIdOrder(playerData.constructor.getPlayerIds());
    console.log('shuffle', playerIdOrder);
  }, [numClicked, isGameOver]);

  useEffect(() => {
    console.log('click', numClicked);
    setCurrentScore(currentScore + 1);
  }, [numClicked]);

  useEffect(() => {
    if (isGameOver) {
      setBestScore(Math.max(bestScore, currentScore));
      setCurrentScore(0);
      setNumClicked(Object.fromEntries([...Array(16).keys()].map((key) => [key, 0])));
      setIsGameOver(false);
    }
    console.log('gameover?');
  }, [isGameOver]);

  function cardClicked(e) {
    const cardId = e.target.closest('.card').id.slice(5);
    const cardPrevClicked = numClicked[cardId];
    if (cardPrevClicked === 1) {
      setIsGameOver(true);
    } else {
      setNumClicked({ ...numClicked, [cardId]: cardPrevClicked + 1 });
    }
    console.log('card', numClicked);
  }

  return (
    <div className="container">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Board playerIdOrder={playerIdOrder} cardClicked={(e) => { cardClicked(e); }} />
    </div>
  );
}

export default App;
