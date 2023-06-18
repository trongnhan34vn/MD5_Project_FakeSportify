import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";
import * as artistService from "../api/artistService";

export const searchArtistByName = function*(action) {
    try {
        let artists = yield call(artistService.SEARCH_ARTIST_BY_NAME, action.payload)
        yield put(actions.getSearchArtistByName(artists))
    } catch (error) {
        
    }
}

export const searchArtistByCategory = function* (action) {
    try {
        let artists = yield call(artistService.SEARCH_ARTIST_BY_CATEGORY, action.payload)
        yield put(actions.getSearchArtistByCategory(artists))
    } catch(error) {

    }
}

export const findArtistById = function* (action) {
    try {
        let artist = yield call(artistService.FIND_ARTIST_BY_ID, action.payload);
        yield put(actions.getArtistById(artist))
    } catch (error) {
        
    }
}