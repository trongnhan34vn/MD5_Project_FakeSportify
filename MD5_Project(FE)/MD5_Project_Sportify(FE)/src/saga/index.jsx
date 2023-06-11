import { all, put, takeLatest } from "redux-saga/effects"
import * as actionType from "../redux/const/actionType"
import * as userSaga from "./userSaga"
import * as albumSaga from "./albumSaga"


export const rootSaga = function* () {
    yield all(
        [
            // USER
            takeLatest(actionType.REGISTER, userSaga.register),
            takeLatest(actionType.LOGIN, userSaga.login),
            // ALBUM
            takeLatest(actionType.FIND_ALL_ALBUMS,albumSaga.findAllAlbums),
            takeLatest(actionType.FIND_ALBUM_BY_ID,albumSaga.findAlbumById)
        ]
    )
}