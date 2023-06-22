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

export const logOut = () => {
    return {
        type: actionType.LOGOUT,
    }
}

export const resetMessage = () => {
    return {
        type: actionType.RESET_MESSAGE
    }
}

export const getMessage = (data) => {
    console.log(data);
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

export const likeAudio = (data) => {
    return {
        type: actionType.LIKE_AUDIO,
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

export const findAudioByArtist = (data) => {
    return {
        type: actionType.FIND_AUDIO_BY_ARTIST,
        payload: data
    }
}

export const getAudioByArtist = (data) => {
    return {
        type: actionType.GET_AUDIO_BY_ARTIST,
        payload: data
    }
}

export const findAudioByCategoryAndArtist = (data) => {
    return {
        type: actionType.FIND_AUDIO_BY_CATEGORY_ARTIST,
        payload: data
    }
}

export const getAudioByCategoryAndArtist = (data) => {
    return {
        type: actionType.GET_AUDIO_BY_CATEGORY_ARTIST,
        payload: data
    }
}

export const findFavoriteAudioByCurrentUser = () => {
    return {
        type: actionType.FIND_FAVORITE_CURRENT_USER
    }
}

export const getFavoriteAudio = (data) => {
    return {
        type: actionType.GET_FAVORITE_AUDIO,
        payload: data
    }
}

export const findFavoriteAudioPaging = (data) => {
    return {
        type: actionType.FIND_FAVORITE_AUDIO_PAGING,
        payload: data
    }
}

export const getFavoriteAudioPaging = (data) => {
    return {
        type: actionType.GET_FAVORITE_AUDIO_PAGING,
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

export const findArtistById = (data) => {
    return {
        type: actionType.FIND_ARTIST_BY_ID,
        payload: data
    }
}

export const getArtistById = (data) => {
    return {
        type: actionType.GET_ARTIST_BY_ID,
        payload: data
    }
}

export const findArtistByPlaylist = (data) => {
    return {
        type: actionType.FIND_ARTIST_BY_PLAYLIST,
        payload: data
    }
}

export const getArtistByPlaylist = (data) => {
    return {
        type: actionType.GET_ARTIST_BY_PLAYLIST,
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

export const removeAudioFromPlaylist = (data) => {
    return {
        type: actionType.REMOVE_AUDIO_FROM_PLAYLIST,
        payload: data
    }
}

export const deletePlaylistById = (data) => {
    return {
        type: actionType.DELETE_PLAYLIST_BY_ID,
        payload: data
    }
}

export const storeDailyMix = (data) => {
    return {
        type: actionType.STORE_DAILY_MIX,
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


// PLAY MUSIC  

export const playTrack = (data) => {
    return {
        type: actionType.PLAY_TRACK,
        payload: data
    }
}

export const pauseTrack = (data) => {
    return {
        type: actionType.PAUSE_TRACK,
        payload: data
    }
}

export const nextTrack = (data) => {
    return {
        type: actionType.NEXT_TRACK,
        payload: data
    }
}

export const previousTrack = (data) => {
    return {
        type: actionType.PREVIOUS_TRACK,
        payload: data
    }
}

export const setTrack = (data) => {
    return {
        type: actionType.SET_TRACK,
        payload: data
    }
}

export const setCurrentTrackIndex = (data) => {
    return {
        type: actionType.SET_CURRENT_TRACK_INDEX,
        payload: data
    }
}

export const setTypeData = (data) => {
    return {
        type: actionType.SET_TYPE_DATA,
        payload: data
    }
}

export const resetTrack = (data) => { 
    return {
        type: actionType.RESET_TRACK,
        payload: data
    }
}




