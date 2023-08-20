import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";
import {fetchPopularRepos} from "../../app/github-api";
import {getReposFailure, getReposLoading, getReposSuccess} from "./popular.slice";

export const getRepos: AsyncThunk<any, any, any> = createAsyncThunk(
    'popular/getRepos',
    async (selectedLanguage: string, {dispatch}): Promise<void> => {
        // @ts-ignore
        dispatch(getReposLoading());
        try {
            const repos = await fetchPopularRepos(selectedLanguage);
            dispatch(getReposSuccess(repos));
        } catch (error) {
            dispatch(getReposFailure(error));
        }
    }
);
