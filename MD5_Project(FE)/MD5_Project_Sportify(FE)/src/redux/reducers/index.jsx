import { combineReducers } from "redux";
import userSlice from "./userReducer";
import albumSlice from "./albumReducer";

const rootReducer = combineReducers(
   {
      userSlice, albumSlice
   }
)

export default rootReducer;