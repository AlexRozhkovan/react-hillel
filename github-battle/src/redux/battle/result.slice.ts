import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface IResultState {
    loading: boolean;
    winner: any[]; // Здесь замените any на ожидаемый тип для массива
    loser: any[]; // Здесь также замените any на ожидаемый тип для массива
    error: string | null;
}

const initialState: IResultState = {
    loading: true,
    winner: [],
    loser: [],
    error: null,
};

const resultSlice: Slice<IResultState> = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setWinner(state, action: PayloadAction<any[]>): void { // Замените any на ожидаемый тип для массива
            state.loading = false;
            state.error = null;
            state.winner = action.payload;
        },
        setLoser(state, action: PayloadAction<any[]>): void { // Замените any на ожидаемый тип для массива
            state.loading = false;
            state.error = null;
            state.loser = action.payload;
        },
        setError(state, action: PayloadAction<string | null>): void {
            state.error = action.payload;
        },
    },
});

export const {setWinner, setLoser, setError} = resultSlice.actions;
export default resultSlice.reducer;
