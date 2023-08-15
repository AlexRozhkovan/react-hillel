import { combineReducers } from "redux";
import { popularReducer } from "./popular/popular.reducer";

export default combineReducers({
  popular: popularReducer,
});
