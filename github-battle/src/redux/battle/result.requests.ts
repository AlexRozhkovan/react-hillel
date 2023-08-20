import {createAsyncThunk} from "@reduxjs/toolkit";
import {battle} from "../../app/github-api";
import {setError, setLoser, setWinner} from "./result.slice";

export interface BattlePlayers {
    playerOneName: string;
    playerTwoName: string;
}


export const getBattleResults = createAsyncThunk(
    'result/getBattleResults',
    async ({playerOneName, playerTwoName}: BattlePlayers, {dispatch}): Promise<void> => {
        try {
            const [winner, loser] = await battle([playerOneName, playerTwoName]);
            dispatch(setWinner(winner));
            dispatch(setLoser(loser));
        } catch (error) {
            dispatch(setError(error));
        }
    }
);