import { combineReducers } from "redux";
import userSlice from "./userReducer";
import albumSlice from "./albumReducer";
import categorySlice from "./categoryReducer";
import audioSlice from "./audioReducer";
import artistSlice from "./artistReducer";
import stateOnSearch from "./checkOnSearch";

const rootReducer = combineReducers(
   {
      userSlice, albumSlice, categorySlice, audioSlice, artistSlice, stateOnSearch
   }
)

export default rootReducer;