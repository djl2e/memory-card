import React, { useEffect, useState } from 'react';
import playerData from '../data/data';

function Card(props) {
  const { playerId } = props;
  const playerName = playerData.getPlayerName(playerId);

  const [imgSrc, changeImgSrc] = useState('');

  console.log('card update');

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        changeImgSrc(response.player[0].strThumb);
      });
    console.log('card img update');
  }, [playerId]);

  return (
    <div className="card" id={`card-${playerId}`} key={`key-${playerId}`}>
      <img src={imgSrc} alt="player thumbnail" />
      <p>{playerName.replace('_', ' ')}</p>
    </div>
  );
}

export default Card;
