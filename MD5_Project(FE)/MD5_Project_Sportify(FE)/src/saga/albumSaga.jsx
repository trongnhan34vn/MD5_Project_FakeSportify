import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";
import * as albumService from "../api/albumService";

export const findAllAlbums = function* () {
    try {
        let albums = yield call(albumService.FIND_ALL_ALBUMS)
        yield put(actions.getAllAlbums(albums))
    } catch (error) {
        console.log(error);
    }
}

export const findAlbumById = function* (action) {
    try {
        let album = yield call(albumService.FIND_ALBUM_BY_ID, action.payload);
        yield put(actions.getAlbumById(album))
    } catch (error) {
        console.log(error);
    }
}

export const searchAlbumByName = function* (action) {
    try {
        let albums = yield call(albumService.SEARCH_ALBUM_BY_NAME, action.payload)
        yield put(actions.getAlbumByName(albums))
    } catch (error) {

    }
}