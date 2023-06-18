import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { musicPlayerSelector } from '../../redux/selector';

const MusicPlayer = ({ musicList }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [playbackType, setPlaybackType] = useState("repeat");
    const audioVolume = useSelector(musicPlayerSelector).audioVolume;
    const isPlaying = useSelector(musicPlayerSelector).isPlaying;
    const audioRef = useRef(new Audio(musicList && musicList[currentTrackIndex].path));
    // const audioRef = useRef()

    useEffect(() => {
        if (isPlaying) {
            setTimeout(() => {
                audioRef.current.play();
            }, 150)
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = audioVolume && audioVolume / 100
    }, [audioVolume])

    useEffect(() => {
        audioRef.current.src = musicList && musicList[currentTrackIndex].path;
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentTrackIndex]);

    return (
        <div>
            <audio ref={audioRef} src={musicList && musicList[currentTrackIndex].path}></audio>
        </div>
    );
}

export default MusicPlayer;
