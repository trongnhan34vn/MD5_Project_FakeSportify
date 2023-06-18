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
        console.log(error);
    }
}

export const findPlaylistByUserId = function* (action) {
    try {
        let playlists = yield call(playlistService.FIND_PLAYLIST_BY_USER_ID, action.payload)
        yield put(actions.getPlaylistByUserId(playlists))
    } catch (error) {
        
    }
}

export const createPlaylist = function* (action) {
    try {
        let response = yield call(playlistService.CREATE_PLAYLIST, action.payload)
        yield put(actions.getLatestPlaylist(response))
    } catch (error) {
        console.log(error);
    }
}

export const updatePlaylist = function* (action) {
    try {
        let response = yield call(playlistService.UPDATE_PLAYLIST, action.payload)
    } catch (error) {
        console.log(error);
    }
}

export const insertAudioToPlaylist = function* (action) { 
    try {
        let response = yield call(playlistService.INSERT_AUDIO_TO_PLAYLIST, action.payload)
    } catch (error) {
        console.log(error);   
    }
}