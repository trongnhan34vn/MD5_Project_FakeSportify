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