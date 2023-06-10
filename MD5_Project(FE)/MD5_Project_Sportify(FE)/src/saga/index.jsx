import { all, put, takeLatest } from "redux-saga/effects"
import * as actionType from "../redux/const/actionType"
import * as userSaga from "./userSaga"


export const rootSaga = function* () {
    yield all(
        [
            // USER
            takeLatest(actionType.REGISTER, userSaga.register),
            takeLatest(actionType.LOGIN, userSaga.login)
        ]
    )
}