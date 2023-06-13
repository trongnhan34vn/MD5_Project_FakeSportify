import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";
import * as artistService from "../api/artistService";

export const searchArtistByName = function*(action) {
    try {
        let artists = yield call(artistService.SEARCH_ARTIST_BY_NAME, action.payload)
        put(actions.getSearchArtistByName(artists))
    } catch (error) {
        
    }
}