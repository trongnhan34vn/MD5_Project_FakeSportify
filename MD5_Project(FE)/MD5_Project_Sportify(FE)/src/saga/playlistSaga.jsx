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
        let sortPlaylist = yield [...playlist.audios].sort((a, b) => a.id - b.id);
        playlist.audios = yield sortPlaylist;
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
        let fakeAction = { payload: action.payload.id }
        yield findPlaylistById(fakeAction)
    } catch (error) {
        console.log(error);
    }
}

export const insertAudioToPlaylist = function* (action) {
    try {
        let response = yield call(playlistService.INSERT_AUDIO_TO_PLAYLIST, action.payload)
        let fakeAction = { payload: action.payload.playlistId }
        yield findPlaylistById(fakeAction);
    } catch (error) {
        console.log(error);
    }
}

export const removeAudioFromPlaylist = function* (action) {
    try {
        let response = yield call(playlistService.REMOVE_AUDIO_FROM_PLAYLIST, action.payload)
        let fakeAction = { payload: action.payload.playlistId }
        yield findPlaylistById(fakeAction);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const deletePlaylistById = function* (action) {
    try {
        let response = yield call(playlistService.DELETE_PLAYLIST_BY_ID, action.payload.playlistId);
        console.log(action.payload.paging);
        yield findPlaylistByUserId(action.payload.paging)
    } catch (error) {

    }
}

export const findPlaylistByIdOrderByAudio = function* (action) {
    try {
        let response = yield call(playlistService.FIND_PLAYLIST_BY_ID_ORDER_BY_AUDIO, action.payload)
        yield put(actions.getPlaylistByIdOrderByAudioId(response))
    } catch (e) {

    }
}