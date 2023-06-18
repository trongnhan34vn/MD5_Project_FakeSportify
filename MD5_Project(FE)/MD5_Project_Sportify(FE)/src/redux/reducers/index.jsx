import { combineReducers } from "redux";
import userSlice from "./userReducer";
import albumSlice from "./albumReducer";
import categorySlice from "./categoryReducer";
import artistSlice from "./artistReducer";
import stateOnSearch from "./checkOnSearch";
import audioSlice from "./audioReducer";
import playlistSlice from "./playlistReducer";
import musicPlayerReducer from "./musicPlayerReducer";

const rootReducer = combineReducers(
   {
      userSlice, albumSlice, categorySlice, audioSlice, artistSlice, stateOnSearch, playlistSlice, musicPlayerReducer
   }
)

export default rootReducer;