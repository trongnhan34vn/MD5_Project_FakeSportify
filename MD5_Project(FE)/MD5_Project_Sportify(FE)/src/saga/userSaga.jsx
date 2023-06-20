import { call, put } from "redux-saga/effects";
import * as userService from "../api/userService"
import * as actions from "../redux/actions";
import { findFavoriteAudioByCurrentUser } from "./audioSaga";

export const register = function* (action) {
    try {
        let response = yield call(userService.SIGN_UP, action.payload);
        yield put(actions.getMessage(response.message))
    } catch (error) {
        let message = error.response.data.message;
        yield put(actions.getMessage(message))
    }
}

export const login = function* (action) {
    try {
        let response = yield call(userService.SIGN_IN, action.payload);
        console.log(response);
        yield put(actions.getCurrentUser(response));
    } catch (error) {
        console.log(error);
        let message = error.response.data.message;
        yield put(actions.getMessage(message))
    }
}

export const likeAudio = function* (action) {
    try {
        let response = yield call(userService.LIKE_AUDIO, action.payload)
        yield findFavoriteAudioByCurrentUser();
    } catch (err) {

    }
}