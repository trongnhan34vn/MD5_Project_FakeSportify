import * as actionType from "../const/actionType";

const initState = {
    searchVal: ""
}

const stateOnSearch = (state = initState, action) => {
    switch (action.type) {
        case actionType.CHECK_ON_SEARCH:
            return {...state, searchVal: action.payload}
        default:
            return state;
    }
}

export default stateOnSearch;