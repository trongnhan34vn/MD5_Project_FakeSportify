// CHECK ON SEARCH
export const stateOnSearchSelector = state => state.stateOnSearch


// USER
export const getMessageSelector = state => state.userSlice.message;
export const currentUserSelector = state => state.userSlice.user;


// ALBUMS
export const albumSelector = state => state.albumSlice.list
export const selectAlbumSelector = state => state.albumSlice
export const albumSlice = state => state.albumSlice


// CATEGORY
export const allCateforySelector = state => state.categorySlice.listAll
export const categorySelector = state => state.categorySlice


// AUDIO
export const audioSelector = state => state.audioSlice


// ARTIST   
export const artistSelector = state => state.artistSlice