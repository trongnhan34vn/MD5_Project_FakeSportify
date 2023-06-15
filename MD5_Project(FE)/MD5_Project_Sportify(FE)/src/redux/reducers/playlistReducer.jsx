import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    search: [],
    select: null
}

const playlistSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_PLAYLIST_BY_NAME:
            return {...state, search: action.payload};
        case actionType.GET_PLAYLIST_BY_ID:
            return {...state, select: action.payload}
        default:
            return state;
    }
}

export default playlistSlice;