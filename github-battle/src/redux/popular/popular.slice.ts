import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface IPopularState {
    loading: boolean,
    repos: any[],
    error: null | string
}

const initialState: IPopularState = {
    loading: false,
    repos: [],
    error: null,
};

const popularSlice: Slice<IPopularState> = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        getReposLoading(state: IPopularState): void {
            state.loading = true;
            state.error = null;
        },
        getReposSuccess(state: IPopularState, action: PayloadAction<any[]>): void {
            state.loading = false;
            state.repos = action.payload;
        },
        getReposFailure(state: IPopularState, action: PayloadAction<any[]>): void {
            state.loading = false;
            state.repos = action.payload;
        },
    }
});

export const {getReposLoading, getReposSuccess, getReposFailure} = popularSlice.actions;
export default popularSlice.reducer;

