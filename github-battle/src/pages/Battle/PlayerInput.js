import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayerName,
  setPlayerImage,
} from "../../redux/battle/battle.actions";

const PlayerInput = memo(({ id, label }) => {
  const dispatch = useDispatch();
  const playerName = useSelector((state) => state.battle[id].name);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      setPlayerImage({
        id,
        image: `https://github.com/${playerName}.png?size=200`,
      })
    );
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor="userName">
        {label}
      </label>
      <input
        id="userName"
        type="text"
        autoComplete="off"
        placeholder="GitHub UserName"
        onChange={(event) => {
          const name = event.target.value;
          dispatch(setPlayerName({ id, name }));
        }}
      />
      <button className="button" type="submit" disabled={!playerName}>
        Submit
      </button>
    </form>
  );
});

export default PlayerInput;
