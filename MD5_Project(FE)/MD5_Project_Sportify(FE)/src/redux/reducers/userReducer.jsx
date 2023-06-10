import * as actionType from "../const/actionType";

const initState = {
    user: null,
    message: "",
}

const getMessLoginRegis = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state;
    }

}

export default getMessLoginRegis;