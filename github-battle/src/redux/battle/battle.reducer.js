import { BATTLE } from './battle.actions';
const initialState = {
  playerOne: {
    image: null,
    name: '',
  },
  playerTwo: {
    image: null,
    name: '',
  },
};

export const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BATTLE.SET_PLAYER_NAME:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          name: action.payload.name,
        },
      };
    case BATTLE.SET_PLAYER_IMAGE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          image: action.payload.image,
        },
      };
    case BATTLE.RESET_PLAYER:
      return {
        ...state,
        [action.payload.id]: {
          ...initialState[action.payload.id],
        },
      };
    default:
      return state;
  }
};
