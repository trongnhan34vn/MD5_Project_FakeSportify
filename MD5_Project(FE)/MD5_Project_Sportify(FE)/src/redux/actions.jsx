import * as actionType from "./const/actionType"




// USER
export const register = (data) => {
    return {
        type: actionType.REGISTER,
        payload: data
    }
}

export const getMessage = (data) => {
    return {
        type: actionType.GET_MESSAGE,
        payload: data
    }
}

export const login = (data) => {
    return {
        type: actionType.LOGIN,
        payload: data
    }
}

export const getCurrentUser = (data) => {
    return {
        type: actionType.GET_CURRENT_USER,
        payload: data
    }
}