import { all, put, takeLatest } from "redux-saga/effects"
import * as actionType from "../redux/const/actionType"
import * as userSaga from "./userSaga"
import * as albumSaga from "./albumSaga"
import * as categorySaga from "./categorySaga"
import * as audioSaga from "./audioSaga"
import * as artistSaga from "./artistSaga"


export const rootSaga = function* () {
    yield all(
        [
            // USER
            takeLatest(actionType.REGISTER, userSaga.register),
            takeLatest(actionType.LOGIN, userSaga.login),
            // ALBUM
            takeLatest(actionType.FIND_ALL_ALBUMS, albumSaga.findAllAlbums),
            takeLatest(actionType.FIND_ALBUM_BY_ID, albumSaga.findAlbumById),
            takeLatest(actionType.SEARCH_ALBUM_BY_NAME, albumSaga.searchAlbumByName),
            // CATEGORY
            takeLatest(actionType.FIND_ALL_CATEGOTY, categorySaga.getAllCategory),
            takeLatest(actionType.FIND_CATEGORY_BY_ID, categorySaga.findCategoryById),
            // AUDIO
            takeLatest(actionType.SEARCH_AUDIO_BY_NAME, audioSaga.searchAudioByName),
            // ARTIST
            takeLatest(actionType.SEARCH_ARTIST_BY_NAME, artistSaga.searchArtistByName),
            takeLatest(actionType.SEARCH_ARTIST_BY_CATEGORY, artistSaga.searchArtistByCategory)
        ]
    )
}