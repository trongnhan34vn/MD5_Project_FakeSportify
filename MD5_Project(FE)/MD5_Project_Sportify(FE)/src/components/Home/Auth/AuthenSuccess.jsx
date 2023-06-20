import React, { useEffect, useRef, useState } from 'react';
import { iconPause_TrackItem, iconPlay_TrackItem } from '../../../assets/icon/icon';
import DirectMenu from '../../DirectMenu/DirectMenu';
import Navbar from '../../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { albumSelector, artistSelector, playlistSelector, selectAlbumSelector } from '../../../redux/selector';
import * as actions from '../../../redux/actions';
import { useNavigate } from 'react-router-dom';


const AuthenSuccess = () => {
    const dispatch = useDispatch()
    const listAlbums = useSelector(albumSelector);
    const currentAlbums = useSelector(selectAlbumSelector);
    const navigate = useNavigate();
    const listDailyMix = useSelector(playlistSelector).search;

    const handlePlaylist = (id) => {
        dispatch(actions.findPlaylistById(id))
        navigate('/playlist', { state: { type: 'daily-mix' } });
    }

    const getArtsit = (playlist) => {
        let listAudio = playlist.audios;
        let artist = []
        for (let i = 0; i < listAudio.length; i++) {
            if (!checkExist(listAudio[i].artist, artist)) {
                artist.push(listAudio[i].artist);
            }
        }
        return artist.map((item) => {
            return (
                <span key={item.id}>{item.name}, </span>
            )
        })
    }

    const checkExist = (item, arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (item.id === arr[i].id) {
                return true;
            }
        }
        return false;
    }

    const elementPlaylist = listDailyMix && listDailyMix.map((item) => {
        return <div key={item.id} className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPause_TrackItem}
            </button>
            <button onClick={() => handlePlaylist(item.id)} className='block w-full album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={item?.audios[3]?.artist?.image} alt="" />
                </div>
                <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{item.name}</h3>
                    <p className='text-compact-2 font-CircularLight text-sm text-[#6a6a6a]'>{getArtsit(item)}...</p>
                </div>
            </button>
        </div>
    })

    useEffect(() => {
        dispatch(actions.findAllAlbums())
    }, [])

    useEffect(() => {
        { dispatch(actions.findPlaylistByName("Daily Mix")) }
    }, [])

    const handleSelectAlbums = (id) => {
        if (!(currentAlbums?.select?.id === id)) {
            dispatch(actions.findAlbumById(id))
            // dispatch(actions.setPlayStat(true))
            // dispatch(actions.setResetStat(true))
            // setTimeout(() => dispatch(actions.setResetStat(false)), 150)
            navigate('/playlist')
        } else {
            // dispatch(actions.setPlayStat(!currentAlbums.isPlay))
        }
        navigate('/playlist', { state: { type: 'album' } });
    }
    const elementAlbum = listAlbums.map(element => {
        return <div key={element.id} className='h-[263px] group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handleSelectAlbums(element.id)} className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-110 cursor-pointer transition-all duration-300 opacity-0 translate-y-2'>
                {(currentAlbums.isPlay && currentAlbums.select.id == element.id) ? iconPlay_TrackItem : iconPause_TrackItem}
            </button>
            <button onClick={() => handleSelectAlbums(element.id)} className='block w-full album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={element?.audios[0]?.artist?.image} alt="" />
                </div>
                <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{element.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{element.audios[0] && element.audios[0].artist.name}</p>
                </div>
            </button>
        </div>
    });

    return (
        <div>
            {/* Home Page - Log in*/}
            <div className='relative home-page mb-[66px] w-full flex'>
                {/* Direction Menu */}
                <DirectMenu />
                {/* Direction Menu */}
                {/* Nav */}
                <Navbar />
                {/* Nav */}
                {/* Content */}
                <div className='content w-full'>
                    {/* List Playlists - Log Out */}
                    <div className='list-playlists pt-[90px] ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                        {/* Playlists - Your Playlist */}
                        <div className='list-playlists-item px-8 mb-4'>
                            {/* Playlist Title */}
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="#" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Recommend Albums</h3>
                                </a>
                            </div>
                            {/* Playlist Title */}
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4  l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                                {/* Playlist Item */}
                                {/* <div className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                        {iconPause_TrackItem}
                                    </button>
                                    <button className='block w-full album-wrap p-4'>
                                        <div className='album-img flex flex-col mb-4 relative'>
                                            <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                                        </div>
                                        <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1 truncate'>Nhân tic</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>đẹp zai</p>
                                        </div>
                                    </button>
                                </div> */}
                                {elementAlbum}
                                {/* Playlist Item */}
                            </div>
                        </div>
                        {/* Playlists - Your Playlist*/}
                        {/* Playlists - Spotify Playlists*/}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="#" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Your Top Mix</h3>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                                {/* Playlist Item */}
                                {elementPlaylist}
                                {/* Playlist Item */}
                            </div>
                        </div>
                        {/* Playlists - Spotify Playlists*/}
                        {/* Playlists - Sleep*/}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Recommend</h3>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                                {/* Playlist Item */}
                                <div className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                        {iconPause_TrackItem}
                                    </button>
                                    <button className='block w-full album-wrap p-4'>
                                        <div className='album-img flex flex-col mb-4 relative'>
                                            <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                                        </div>
                                        <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1 truncate'>Nhân tic</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>đẹp zai</p>
                                        </div>
                                    </button>
                                </div>
                                {/* Playlist Item */}
                            </div>
                        </div>
                        {/* Playlists - Sleep*/}
                        {/* End */}
                        <div className='mt-8'>
                            <div className='px-8 pb-10'>
                                <hr className='border-l-0 border-b-0 border-r-0 border-t-[#292929] border-t-[0.5px] mb-10' />
                            </div>
                        </div>
                        {/* End */}
                    </div>
                    {/* List Playlists - Log Out */}
                </div>
                {/* Content */}
                {/* Footer */}
                {/* Footer */}
            </div>
            {/* Home Page - Log in*/}

        </div>
    );
}

export default AuthenSuccess;
