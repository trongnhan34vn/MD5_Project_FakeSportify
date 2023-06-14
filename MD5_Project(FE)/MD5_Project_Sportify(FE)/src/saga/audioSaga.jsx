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