
import {createSlice, Slice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    repos: [],
    error: null,
};

const popularSlice: Slice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        getReposLoading(state):void {
            state.loading = true;
            state.error = null;
        },
        getReposSuccess(state, action):void {
            state.loading = false;
            state.repos = action.payload;
        },
        getReposFailure(state, action):void {
            state.loading = false;
            state.repos = action.payload;
        },
    }
});

export const { getReposLoading, getReposSuccess, getReposFailure } = popularSlice.actions;
export default popularSlice.reducer;

