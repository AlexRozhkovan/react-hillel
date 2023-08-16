export const RESULT = {
  SET_WINNER: "SET_WINNER",
  SET_LOSER: "SET_LOSER",
  SET_ERROR: "SET_ERROR",
};

export const setWinner = (payload) => ({
  type: RESULT.SET_WINNER,
  payload,
});

export const setLoser = (payload) => ({
  type: RESULT.SET_LOSER,
  payload,
});

export const setError = (payload) => ({
  type: RESULT.SET_ERROR,
  payload,
});
