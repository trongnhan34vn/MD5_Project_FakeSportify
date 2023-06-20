import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    search: [],
    select: null
}

const artistSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_SEARCH_ARTIST_BY_NAME:
            return { ...state, search: [...action.payload] };
        case actionType.GET_SEARCH_ARTIST_BY_CATEGORY:
            return { ...state, search: [...action.payload] };
        case actionType.GET_ARTIST_BY_ID:
            return { ...state, select: action.payload };
        case actionType.GET_ARTIST_BY_PLAYLIST:
            return { ...state, search: [...action.payload] };
        default:
            return state;
    }
}

export default artistSlice;