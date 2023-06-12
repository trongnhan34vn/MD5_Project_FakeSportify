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

// ALBUM
export const findAllAlbums = () => {
    return {
        type: actionType.FIND_ALL_ALBUMS
    }
}

export const getAllAlbums = (data) => {
    return {
        type: actionType.GET_ALL_ALBUMS,
        payload: data
    }
}

export const findAlbumById = (data) => {
    return {
        type: actionType.FIND_ALBUM_BY_ID,
        payload: data
    }
}

export const getAlbumById = (data) => {
    return {
        type: actionType.GET_ALBUM_BY_ID,
        payload: data
    }
}

export const setPlayStat = (data) => {
    return {
        type: actionType.SET_PLAY_STAT,
        payload: data
    }
} 

export const setResetStat = (data) => {
    return {
        type: actionType.SET_RESET_STAT,
        payload: data
    }
}