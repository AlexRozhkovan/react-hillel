import React from 'react';
import { useSelector } from 'react-redux';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import ResetPlayerButton from './ResetPlayerButton';
import BattleLink from './BattleLink';

const Battle = () => {
  const players = useSelector((state) => state.battle);
  const playerOneId = 'playerOne';
  const playerTwoId = 'playerTwo';
  return (
    <div>
      <div className="row">
        {players.playerOne.image ? (
          <PlayerPreview
            avatar={players.playerOne.image}
            userName={players.playerOne.name}
          >
            <ResetPlayerButton id={playerOneId} />
          </PlayerPreview>
        ) : (
          <PlayerInput id={playerOneId} label="Player 1" />
        )}
        {players.playerTwo.image ? (
          <PlayerPreview
            avatar={players.playerTwo.image}
            userName={players.playerTwo.name}
          >
            <ResetPlayerButton id={playerTwoId} />
          </PlayerPreview>
        ) : (
          <PlayerInput id={playerTwoId} label="Player 2" />
        )}
      </div>
      {players.playerOne.image && players.playerTwo.image ? (
        <BattleLink />
      ) : null}
    </div>
  );
};

export default Battle;
