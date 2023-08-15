export const POPULAR = {
  GET_REPOS_LOADING: "POPULAR.GET_REPOS_LOADING",
  GET_REPOS_SUCCESS: "POPULAR.GET_REPOS_SUCCESS",
  GET_REPOS_FAILURE: "POPULAR.GET_REPOS_FAILURE",
};

export const getReposLoading = () => ({
  type: POPULAR.GET_REPOS_LOADING,
});
export const getReposSuccess = (payload) => ({
  type: POPULAR.GET_REPOS_SUCCESS,
  payload,
});
export const getReposFailure = (payload) => ({
  type: POPULAR.GET_REPOS_FAILURE,
  payload,
});
