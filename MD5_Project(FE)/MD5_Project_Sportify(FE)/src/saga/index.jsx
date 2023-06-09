import { all, put, takeLatest } from "redux-saga/effects"
import * as actionType from "../redux/const/actionType"
import * as userSaga from "./userSaga"
import * as albumSaga from "./albumSaga"
import * as categorySaga from "./categorySaga"
import * as audioSaga from "./audioSaga"
import * as artistSaga from "./artistSaga"
import * as playlistSaga from "./playlistSaga"


export const rootSaga = function* () {
    yield all(
        [
            // USER
            takeLatest(actionType.REGISTER, userSaga.register),
            takeLatest(actionType.LOGIN, userSaga.login),
            takeLatest(actionType.LIKE_AUDIO, userSaga.likeAudio),
            // ALBUM
            takeLatest(actionType.FIND_ALL_ALBUMS, albumSaga.findAllAlbums),
            takeLatest(actionType.FIND_ALBUM_BY_ID, albumSaga.findAlbumById),
            takeLatest(actionType.SEARCH_ALBUM_BY_NAME, albumSaga.searchAlbumByName),
            // CATEGORY
            takeLatest(actionType.FIND_ALL_CATEGOTY, categorySaga.getAllCategory),
            takeLatest(actionType.FIND_CATEGORY_BY_ID, categorySaga.findCategoryById),
            // AUDIO
            takeLatest(actionType.SEARCH_AUDIO_BY_NAME, audioSaga.searchAudioByName),
            takeLatest(actionType.SEARCH_AUDIO_PAGING, audioSaga.searchAudioPaging),
            takeLatest(actionType.FIND_AUDIO_BY_ID, audioSaga.findAudioById),
            takeLatest(actionType.FIND_AUDIO_BY_ARTIST,audioSaga.findAudioByArtist),
            takeLatest(actionType.FIND_AUDIO_BY_CATEGORY_ARTIST, audioSaga.findAudioByCategoryAndArtist),
            takeLatest(actionType.FIND_FAVORITE_CURRENT_USER, audioSaga.findFavoriteAudioByCurrentUser),
            takeLatest(actionType.FIND_FAVORITE_AUDIO_PAGING, audioSaga.findFavoriteAudioPaging),
            // ARTIST
            takeLatest(actionType.SEARCH_ARTIST_BY_NAME, artistSaga.searchArtistByName),
            takeLatest(actionType.SEARCH_ARTIST_BY_CATEGORY, artistSaga.searchArtistByCategory),
            takeLatest(actionType.FIND_ARTIST_BY_ID, artistSaga.findArtistById),
            takeLatest(actionType.FIND_ARTIST_BY_PLAYLIST, artistSaga.findArtistByPlaylistId),
            // PLAYLIST
            takeLatest(actionType.FIND_PLAYLIST_BY_NAME, playlistSaga.findPlaylistByName),
            takeLatest(actionType.FIND_PLAYLIST_BY_ID, playlistSaga.findPlaylistById),
            takeLatest(actionType.FIND_PLAYLIST_BY_USER_ID, playlistSaga.findPlaylistByUserId),
            takeLatest(actionType.CREATE_PLAYLIST, playlistSaga.createPlaylist),
            takeLatest(actionType.UPDATE_PLAYLIST, playlistSaga.updatePlaylist),
            takeLatest(actionType.INSERT_AUDIO_TO_PLAYLIST, playlistSaga.insertAudioToPlaylist),
            takeLatest(actionType.REMOVE_AUDIO_FROM_PLAYLIST,playlistSaga.removeAudioFromPlaylist),
            takeLatest(actionType.DELETE_PLAYLIST_BY_ID, playlistSaga.deletePlaylistById),
        ]
    )
}