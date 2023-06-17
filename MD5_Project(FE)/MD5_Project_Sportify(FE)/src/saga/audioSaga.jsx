import { call, put } from "redux-saga/effects";
import * as audioService from "../api/audioService";
import * as actions from "../redux/actions";


export const searchAudioByName = function* (action) {
    try {
        let audios = yield call(audioService.SEARCH_AUDIO_BY_NAME, action.payload)
        console.log(audios);
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