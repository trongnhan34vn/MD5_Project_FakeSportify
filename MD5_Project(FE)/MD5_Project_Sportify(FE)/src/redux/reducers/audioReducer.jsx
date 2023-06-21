import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    select: null,
    search: [],
    favorites: []
}

const audioSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_AUDIO_BY_NAME:
            return { ...state, search: action.payload }
        case actionType.GET_AUDIO_PAGING:
            return { ...state, search: action.payload }
        case actionType.GET_AUDIO_BY_ID:
            return { ...state, select: action.payload }
        case actionType.GET_AUDIO_BY_CATEGORY_ARTIST:
            return { ...state, search: action.payload }
        case actionType.GET_FAVORITE_AUDIO:
            return { ...state, favorites: action.payload }
        case actionType.GET_FAVORITE_AUDIO_PAGING:
            return { ...state, favorites: action.payload }
        default:
            return state;

    }
}

export default audioSlice;