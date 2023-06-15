import { combineReducers } from "redux";
import userSlice from "./userReducer";
import albumSlice from "./albumReducer";
import categorySlice from "./categoryReducer";
import artistSlice from "./artistReducer";
import stateOnSearch from "./checkOnSearch";
import audioSlice from "./audioReducer";
import playlistSlice from "./playlistReducer";

const rootReducer = combineReducers(
   {
      userSlice, albumSlice, categorySlice, audioSlice, artistSlice, stateOnSearch, playlistSlice
   }
)

export default rootReducer;