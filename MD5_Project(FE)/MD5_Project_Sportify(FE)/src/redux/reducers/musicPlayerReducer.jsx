import * as actionType from "../const/actionType";

const initialState = {
    playlistTrack: null, // Your list of music
    currentTrackIndex: 0,
    isPlaying: false,
    playbackType: "repeat",
    isReset: false,
    typeData: ''
};

const musicPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_TRACK:
            return { ...state, playlistTrack: action.payload }
        case actionType.PLAY_TRACK:
            return { ...state, isPlaying: true };
        case actionType.PAUSE_TRACK:
            return { ...state, isPlaying: false };
        case actionType.RESET_TRACK:
            return { ...state, isReset: action.payload };
        case actionType.SET_CURRENT_TRACK_INDEX:
            return { ...state, currentTrackIndex: action.payload };
        case actionType.SET_TYPE_DATA:
            return { ...state, typeData: action.payload };
        default:
            return state;
    }
};

export default musicPlayerReducer;