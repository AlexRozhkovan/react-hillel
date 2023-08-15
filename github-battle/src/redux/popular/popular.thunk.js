import {
  getReposLoading,
  getReposSuccess,
  getReposFailure,
} from "./popular.actions";
import { fetchPopularRepos } from "../../app/github-api";

export const getRepos = (selectedLanguage) => async (dispatch) => {
  dispatch(getReposLoading());
  try {
    const repos = await fetchPopularRepos(selectedLanguage);
    dispatch(getReposSuccess(repos));
  } catch (error) {
    dispatch(getReposFailure(error));
  }
};
