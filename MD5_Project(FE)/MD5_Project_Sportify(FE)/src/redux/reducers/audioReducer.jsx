import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    select: null,
    search: []
}

const audioSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_AUDIO_BY_NAME:
            return {...state, search: [action.payload]}
    
        default:
            return state;

    }
}

export default audioSlice;