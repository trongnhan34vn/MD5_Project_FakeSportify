// USER
export const getMessageSelector = state => state.userSlice.message;
export const currentUserSelector = state => state.userSlice.user;


// ALBUMS
export const albumSelector = state => state.albumSlice.list
export const selectAlbumSelector = state => state.albumSlice.select
export const currentAlbumSelector = state => state.controllAlbum