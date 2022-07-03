import { combineReducers } from "redux";
import { recommendReducer } from "./discoverStore/reducer";
import { playerReducer } from "./player/reducer";

//合并reducer
const reducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer
})

export default reducer