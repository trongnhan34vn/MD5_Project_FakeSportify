import * as actionType from "../const/actionType";

const initState = {
    list: [],
    select: null
};

const albumSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_ALBUMS:
            return {...state, list: action.payload};
        case actionType.GET_ALBUM_BY_ID:
            return {...state, select: action.payload}
        default:
            return state
    }
  
}

export default albumSlice;