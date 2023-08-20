import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface IPlayerState {
    image: string | null;
    name: string;
}

interface BattleState {
    playerOne: IPlayerState;
    playerTwo: IPlayerState;
}

const initialState: BattleState = {
    playerOne: {
        image: null,
        name: '',
    },
    playerTwo: {
        image: null,
        name: '',
    },
};

const battleSlice: Slice<BattleState> = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setPlayerName(state, action: PayloadAction<{ id: keyof BattleState; name: string }>): void {
            const {id, name} = action.payload;
            state[id].name = name;
        },
        setPlayerImage(state, action: PayloadAction<{ id: keyof BattleState; image: string | null }>): void {
            const {id, image} = action.payload;
            state[id].image = image;
        },
        resetPlayer(state, action: PayloadAction<{ id: keyof BattleState }>) {
            const {id} = action.payload;
            state[id] = {...initialState[id]};
        },
    },
});

export const {setPlayerName, setPlayerImage, resetPlayer} = battleSlice.actions;
export default battleSlice.reducer;
