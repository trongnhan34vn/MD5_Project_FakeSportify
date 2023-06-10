import { combineReducers } from "redux";
import userSlice from "./userReducer";

const rootReducer = combineReducers(
   {
      userSlice
   }
)

export default rootReducer;