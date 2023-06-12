// USER
export const getMessageSelector = state => state.userSlice.message;
export const currentUserSelector = state => state.userSlice.user;


// ALBUMS
export const albumSelector = state => state.albumSlice.list
export const selectAlbumSelector = state => state.albumSlice


// CATEGORY
export const allCateforySelector = state => state.categorySlice.listAll