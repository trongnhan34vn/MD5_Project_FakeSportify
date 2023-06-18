import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    select: null,
    search: []
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
            console.log(action.payload);
            return { ...state, search: action.payload }
        default:
            return state;

    }
}

export default audioSlice;