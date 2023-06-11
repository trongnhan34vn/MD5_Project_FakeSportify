import * as actionType from "../const/actionType";

const initState = {
    currentAlbum: [],
    isPlay: false,
    reset: false,
};

const controllAlbum = (state = initState, action) => {
    switch (action.type) {
        case actionType.CONTROLL_CURRENT_ALBUM:
            console.log(action.payload);
            return {
                currentAlbum: [action.payload.audioId],
                isPlay: action.payload.isPlaying,
                reset: action.payload.isReset
            }
        default:
            return state;
    }
  
}

export default controllAlbum;