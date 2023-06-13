import * as actionType from "./const/actionType"

// CHECK ON SEARCH
export const checkOnSearch = (data) => {
    return {
        type: actionType.CHECK_ON_SEARCH,
        payload: data
    }
}


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

export const searchAlbumByName = (data) => { 
    return {
        type: actionType.SEARCH_ALBUM_BY_NAME,
        payload: data
    }
}

export const getAlbumByName = (data) => {
    return {
        type: actionType.GET_ALBUM_BY_NAME,
        payload: data
    }
}

// CATEGORY
export const findAllCategory = () => {
    return {
        type: actionType.FIND_ALL_CATEGOTY
    }
}

export const getAllCategory = (data) => {
    return {
        type: actionType.GET_ALL_CATEGORY,
        payload: data
    }
}

// AUDIO
export const searchAudioByName = (data) => {
    return {
        type: actionType.SEARCH_AUDIO_BY_NAME,
        payload: data
    }
}

export const getAudioByName = (data) => {
    return {
        type: actionType.GET_AUDIO_BY_NAME,
        payload: data
    }
}

// ARTIST
export const searchArtistByName = (data) => {
    return {
        type: actionType.SEARCH_ARTIST_BY_NAME,
        payload: data
    }
}

export const getSearchArtistByName = (data) => {
    return {
        type: actionType.GET_SEARCH_ARTIST_BY_NAME,
        payload: data
    }
}

