import { RESULT } from "./result.actions";

const initialState = {
  loading: true,
  winner: [],
  loser: [],
  error: null,
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESULT.SET_WINNER:
      return {
        ...state,
        loading: false,
        error: null,
        winner: action.payload,
      };
    case RESULT.SET_LOSER:
      return {
        ...state,
        loading: false,
        error: null,
        loser: action.payload,
      };
    case RESULT.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
