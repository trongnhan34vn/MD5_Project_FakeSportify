import { combineReducers } from "redux";
import userSlice from "./userReducer";
import albumSlice from "./albumReducer";
import controllAlbum from "./controllAlbum";

const rootReducer = combineReducers(
   {
      userSlice, albumSlice, controllAlbum
   }
)

export default rootReducer;