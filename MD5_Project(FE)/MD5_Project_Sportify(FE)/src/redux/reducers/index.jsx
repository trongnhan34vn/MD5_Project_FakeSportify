import { combineReducers } from "redux";
import userSlice from "./userReducer";
import albumSlice from "./albumReducer";
import categorySlice from "./categoryReducer";

const rootReducer = combineReducers(
   {
      userSlice, albumSlice, categorySlice
   }
)

export default rootReducer;