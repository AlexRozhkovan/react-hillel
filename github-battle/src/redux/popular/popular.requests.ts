import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchPopularRepos} from "../../app/github-api";
import {getReposFailure, getReposLoading, getReposSuccess} from "./popular.slice";

export const getRepos = createAsyncThunk(
    'popular/fetchRepos',
        async (selectedLanguage, { dispatch }) => {
            // @ts-ignore
            dispatch(getReposLoading());
            try {
                // @ts-ignore
                const repos = await fetchPopularRepos(selectedLanguage);
                dispatch(getReposSuccess(repos));
            } catch (error) {
                dispatch(getReposFailure(error));
            }
        }
);
