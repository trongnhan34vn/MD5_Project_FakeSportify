import { call, put } from "redux-saga/effects";
import * as playlistService from "../api/playlistService";
import * as actions from "../redux/actions";


export const findPlaylistByName = function* (action) {
    try {
        let playlists = yield call(playlistService.FIND_PLAYLIST_BY_NAME, action.payload)
        yield put(actions.getPlaylistByName(playlists))
    } catch (error) {
        
    }
}

export const findPlaylistById = function* (action) {
    try {
        let playlist = yield call(playlistService.FIND_PLAYLIST_BY_ID, action.payload)
        yield put(actions.getPlaylistById(playlist))
    } catch (error) {
        
    }
}