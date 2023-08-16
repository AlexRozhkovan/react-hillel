import { battle } from "../../app/github-api";
import { setError, setLoser, setWinner } from "./result.actions";

export const getBattleResults = (playerOne, playerTwo) => (dispatch) => {
  battle([playerOne, playerTwo])
    .then(([winner, loser]) => {
      dispatch(setWinner(winner));
      dispatch(setLoser(loser));
    })
    .catch((error) => dispatch(setError(error)));
};
