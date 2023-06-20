import { call, put } from "redux-saga/effects";
import * as audioService from "../api/audioService";
import * as actions from "../redux/actions";


export const searchAudioByName = function* (action) {
    try {
        let audios = yield call(audioService.SEARCH_AUDIO_BY_NAME, action.payload)
        yield put(actions.getAudioByName(audios))
    } catch (error) {

    }
}

export const searchAudioPaging = function* (action) {
    try {
        let audios = yield call(audioService.SEARCH_AUDIO_PAGING, action.payload)
        yield put(actions.getAudioPaging(audios))
    } catch (error) {

    }
}

export const findAudioById = function* (action) {
    try {
        let audio = yield call(audioService.FIND_AUDIO_BY_ID, action.payload);
        yield put(actions.getAudioById(audio))
    } catch (error) {

    }
}

export const findAudioByArtist = function* (action) {
    try { 
        let audios = yield call(audioService.FIND_AUDIO_BY_ARTIST, action.payload);
        yield put(actions.getAudioByArtist(audios))
    } catch (e) {

    }
}

export const findAudioByCategoryAndArtist = function* (action) {
    try {
        let audios = yield call(audioService.FIND_AUDIO_BY_CATEGORY_ARTIST, action.payload);
        yield put(actions.getAudioByCategoryAndArtist(audios))
    } catch (error) {
        
    }
}

export const findFavoriteAudioByCurrentUser = function* () {
    try {
        let audios = yield call(audioService.FIND_FAVORITE_CURRENT_USER);
        yield put(actions.getFavoriteAudio(audios));
    } catch (error) {

    }
}