import { POPULAR } from './popular.actions';
const initialState = {
  loading: false,
  repos: [],
  error: null,
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR.GET_REPOS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POPULAR.GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case POPULAR.GET_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    default:
      return state;
  }
};
