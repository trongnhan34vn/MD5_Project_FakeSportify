import * as actionType from "../const/actionType";

const initState = {
    user: null,
    message: "",
}

const userSlice = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_MESSAGE:
            console.log(action.payload);
            return { ...state, message: action.payload }
        case actionType.GET_CURRENT_USER:
            return { ...state, user: action.payload }
        default:
            return state;
    }

}

export default userSlice;