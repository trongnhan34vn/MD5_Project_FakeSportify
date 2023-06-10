import { combineReducers } from "redux";
import getMessLoginRegis from "./userReducer";

const rootReducer = combineReducers(
   {
    getMessLoginRegis
   }
)

export default rootReducer;