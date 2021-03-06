/* eslint-disable no-plusplus */
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import playerData from './data/data';

function App() {
  const arrayLength = 18;
  const isMounted = useRef(false);

  const [isLoading, setIsLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playerIdOrder, setPlayerIdOrder] = useState([]);
  const [numClicked, setNumClicked] = useState(
    Object.fromEntries([...Array(arrayLength).keys()].map((key) => [key, 0])),
  );
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    async function fetchSrc() {
      await playerData.fetchSrc();
      setIsLoading(false);
    }
    fetchSrc();
  }, []);

  useEffect(() => {
    setPlayerIdOrder(playerData.constructor.getPlayerIds());
  }, [numClicked, isGameOver]);

  useEffect(() => {
    if (isGameOver) {
      setBestScore(Math.max(bestScore, currentScore));
      setCurrentScore(0);
      setNumClicked(Object.fromEntries([...Array(arrayLength).keys()].map((key) => [key, 0])));
      setIsGameOver(false);
      isMounted.current = false;
    }
  }, [isGameOver]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    setCurrentScore(currentScore + 1);
  }, [numClicked]);

  function cardClicked(e) {
    const cardId = e.target.closest('.card').id.slice(5);
    const cardPrevClicked = numClicked[cardId];
    if (cardPrevClicked === 1) {
      setIsGameOver(true);
    } else {
      setNumClicked({ ...numClicked, [cardId]: cardPrevClicked + 1 });
    }
  }

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Board
        playerData={playerData}
        playerIdOrder={playerIdOrder}
        cardClicked={(e) => { cardClicked(e); }}
      />
    </div>
  );
}

export default App;
