import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

const PLAYER_ID_ENUM = {
  playerOne: "playerOne",
  playerTwo: "playerTwo",
};

const Battle = () => {
  const [players, setPlayers] = useState({
    playerOneImage: null,
    playerTwoImage: null,
    playerOneName: "",
    playerTwoName: "",
  });

  const handeSublit = useCallback((id, userName) => {
    setPlayers((prevState) => ({
      ...prevState,
      [`${id}Name`]: userName,
      [`${id}Image`]: `https://github.com/${userName}.png?size=200`,
    }));
  }, []);

  const handleReset = (id) => {
    setPlayers((prevState) => ({
      ...prevState,
      [`${id}Name`]: "",
      [`${id}Image`]: null,
    }));
  };

  return (
    <div>
      <div className="row">
        {players.playerOneImage ? (
          <PlayerPreview
            avatar={players.playerOneImage}
            userName={players.playerOneName}
          >
            <button
              className="reset"
              onClick={() => handleReset(PLAYER_ID_ENUM.playerOne)}
            >
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id={PLAYER_ID_ENUM.playerOne}
            label="Player 1"
            onSubmit={handeSublit}
          />
        )}
        {players.playerTwoImage ? (
          <PlayerPreview
            avatar={players.playerTwoImage}
            userName={players.playerTwoName}
          >
            <button
              className="reset"
              onClick={() => handleReset(PLAYER_ID_ENUM.playerTwo)}
            >
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id={PLAYER_ID_ENUM.playerTwo}
            label="Player 2"
            onSubmit={handeSublit}
          />
        )}
      </div>
      {players.playerOneImage && players.playerTwoImage ? (
        <Link
          className="button"
          to={{
            pathname: "results",
            search: `?playerOneName=${players.playerOneName}&playerTwoName=${players.playerTwoName}`,
          }}
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
