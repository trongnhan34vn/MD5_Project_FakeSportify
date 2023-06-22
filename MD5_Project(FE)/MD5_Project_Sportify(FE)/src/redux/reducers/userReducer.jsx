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
        case actionType.LOGOUT:
            return { user: null, message: ''}
        case actionType.RESET_MESSAGE: 
            return { ...state, message: '' }
        default:
            return state;
    }

}

export default userSlice;