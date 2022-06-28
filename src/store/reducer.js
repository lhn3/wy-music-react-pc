import { combineReducers } from "redux";
import { recommendReducer } from "./discoverStore/reducer";

//合并reducer
const reducer = combineReducers({
  recommend:recommendReducer
})

export default reducer