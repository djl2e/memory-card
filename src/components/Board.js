import React from 'react';
import Card from './Card';

function Board(props) {
  const { playerIdOrder, cardClicked } = props;

  return (
    <div className="board" onClick={cardClicked} aria-hidden="true">
      {playerIdOrder.map((playerId) => (
        <Card playerId={playerId} />
      ))}
    </div>
  );
}

export default Board;
