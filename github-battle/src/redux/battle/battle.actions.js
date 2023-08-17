export const BATTLE = {
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  SET_PLAYER_IMAGE: 'SET_PLAYER_IMAGE',
  RESET_PLAYER: 'RESET_PLAYER',
};

export const setPlayerName = (payload) => ({
  type: BATTLE.SET_PLAYER_NAME,
  payload: payload,
});

export const setPlayerImage = (payload) => ({
  type: BATTLE.SET_PLAYER_IMAGE,
  payload: payload,
});

export const resetPlayer = (payload) => ({
  type: BATTLE.RESET_PLAYER,
  payload: payload,
});
