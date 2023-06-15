import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    select: null
}

const categorySlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_CATEGORY:
            return {...state, listAll: action.payload}
        case actionType.GET_CATEGORY_BY_ID:
            return {...state, select: action.payload}
        default:
            return state;
    }
  
}

export default categorySlice;