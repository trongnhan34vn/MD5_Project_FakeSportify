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

export const findCategoryById = (data) => {
    return {
        type: actionType.FIND_CATEGORY_BY_ID,
        payload: data
    }
}

export const getCategoryById = (data) => {
    return {
        type: actionType.GET_CATEGORY_BY_ID,
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

export const searchAudioPaging = (data) => {
    return { type: actionType.SEARCH_AUDIO_PAGING, payload: data }
}

export const getAudioPaging = (data) => {
    return {
        type: actionType.GET_AUDIO_PAGING,
        payload: data
    }
}

export const findAudioById = (data) => {
    return {
        type: actionType.FIND_AUDIO_BY_ID,
        payload: data
    }
}

export const getAudioById = (data) => {
    return {
        type: actionType.GET_AUDIO_BY_ID,
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

export const searchArtistByCategory = (data) => {
    return {
        type: actionType.SEARCH_ARTIST_BY_CATEGORY,
        payload: data
    }
}

export const getSearchArtistByCategory = (data) => {
    return {
        type: actionType.GET_SEARCH_ARTIST_BY_CATEGORY,
        payload: data
    }
}


// PLAYLIST
export const findPlaylistByName = (data) => {
    return {
        type: actionType.FIND_PLAYLIST_BY_NAME,
        payload: data
    }
}

export const getPlaylistByName = (data) => {
    return {
        type: actionType.GET_PLAYLIST_BY_NAME,
        payload: data
    }
}

export const findPlaylistById = (data) => {
    return {
        type: actionType.FIND_PLAYLIST_BY_ID,
        payload: data
    }
}

export const getPlaylistById = (data) => {
    return {
        type: actionType.GET_PLAYLIST_BY_ID,
        payload: data
    }
}

export const findPlaylistByUserId = (data) => {
    return {
        type: actionType.FIND_PLAYLIST_BY_USER_ID,
        payload: data
    }
}

export const getPlaylistByUserId = (data) => {
    return {
        type: actionType.GET_PLAYLIST_BY_USER_ID,
        payload: data
    }
}

export const createPlaylist = (data) => {
    return {
        type: actionType.CREATE_PLAYLIST,
        payload: data
    }
}

export const getLatestPlaylist = (data) => {
    return {
        type: actionType.GET_LATEST_PLAYLIST,
        payload: data
    }
}

export const updatePlaylist = (data) => {
    return {
        type: actionType.UPDATE_PLAYLIST,
        payload: data
    }
}

export const insertAudioToPlaylist = (data) => {
    return {
        type: actionType.INSERT_AUDIO_TO_PLAYLIST,
        payload: data
    }
}

// OTHER
export const fetching = (data) => {
    return {
        type: actionType.FETCHING,
        payload: data
    }
}

// MUSIC PLAY
export const changeVolumn = (data) => {
    return {
        type: actionType.CHANGE_VOLUMN,
        payload: data
    }
}

export const playTrack = () => {
    return {
        type: actionType.PLAY_TRACK,
    }
}

export const pauseTrack = () => {
    return {
        type: actionType.PAUSE_TRACK,
    }
}




