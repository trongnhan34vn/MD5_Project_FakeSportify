import * as actionType from "../const/actionType";

const initialState = {
    musicList: [], // Your list of music
    currentTrackIndex: 0,
    isPlaying: false,
    playbackType: "repeat",
    audioVolume: 100
};

const musicPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PLAY_TRACK:
            return { ...state, isPlaying: true };
        case actionType.PAUSE_TRACK:
            return { ...state, isPlaying: false };
        case "NEXT_TRACK":
            let nextIndex;
            if (state.playbackType === "sequence" && state.currentTrackIndex === state.musicList.length - 1) {
                nextIndex = 0;
            } else if (state.playbackType === "random") {
                nextIndex = Math.floor(Math.random() * state.musicList.length);
            } else {
                nextIndex = state.currentTrackIndex + 1;
                if (nextIndex > state.musicList.length - 1) {
                    nextIndex = 0;
                }
            }
            return { ...state, currentTrackIndex: nextIndex };
        case "PREVIOUS_TRACK":
            let prevIndex;
            if (state.playbackType === "sequence" && state.currentTrackIndex === 0) {
                prevIndex = state.musicList.length - 1;
            } else if (state.playbackType === "random") {
                prevIndex = Math.floor(Math.random() * state.musicList.length);
            } else {
                prevIndex = state.currentTrackIndex - 1;
                if (prevIndex < 0) {
                    prevIndex = state.musicList.length - 1;
                }
            }
            return { ...state, currentTrackIndex: prevIndex };
        case "CHANGE_PLAYBACK_TYPE":
            return { ...state, playbackType: action.payload };
        case actionType.CHANGE_VOLUMN:
            return { ...state, audioVolume: action.payload };
        default:
            return state;
    }
};

export default musicPlayerReducer;