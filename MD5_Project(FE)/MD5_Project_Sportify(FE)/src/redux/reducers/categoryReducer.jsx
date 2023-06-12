import * as actionType from "../const/actionType";

const initState = {
    listAll: [],
    select: null
}

const categorySlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_CATEGORY:
        
            return {...state, listAll: action.payload}
        default:
            return state;
    }
  
}

export default categorySlice;