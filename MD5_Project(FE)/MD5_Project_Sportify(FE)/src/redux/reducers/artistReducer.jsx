import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    search: [],
    select: null
}

const artistSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_SEARCH_ARTIST_BY_NAME:
            return {...state, search: [...action.payload]};
        default:
            return state;
    }
}

export default artistSlice;