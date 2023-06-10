import { call, put } from "redux-saga/effects";
import * as userService from "../api/userService"
import * as actions from "../redux/actions";


export const register = function* (action) {
    try {
        let response = yield call(userService.SIGN_UP, action.payload);
        console.log(response);
        yield put(actions.getMessage(response.message))
    } catch (error) {
        console.log(error);
        let message = error.response.data.message;
        yield put(actions.getMessage(message))
    }
}