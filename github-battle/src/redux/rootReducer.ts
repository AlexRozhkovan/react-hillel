import {combineReducers} from "redux";
import battleReducer from './battle/battle.slice';
import resultReducer from './battle/result.slice';
import popularReducer from './popular/popular.slice';

export default combineReducers({
    popular: popularReducer,
    battle: battleReducer,
    result: resultReducer,
})