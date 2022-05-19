import React from 'react';
import playerData from '../data/data';

function Card(props) {
  const { playerId } = props;
  const playerName = playerData.getPlayerName(playerId);
  const imgSrc = playerData.getImgSrc(playerId);

  return (
    <div className="card" id={`card-${playerId}`} key={`key-${playerId}`}>
      <img src={imgSrc} alt="player thumbnail" />
      <p>{playerName.replace('_', ' ')}</p>
    </div>
  );
}

export default Card;
