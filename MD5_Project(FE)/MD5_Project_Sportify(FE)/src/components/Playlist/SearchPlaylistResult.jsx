import React from 'react';
import DirectMenu from '../DirectMenu/DirectMenu';
import Navbar from '../Navbar/Navbar';
import { iconPauseBtn_Playlist, iconPause_TrackItem } from '../../assets/icon/icon';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { albumSelector, albumSlice, artistSelector } from '../../redux/selector';
import FavoritesComp from '../FavoritesComp/FavoritesComp';

const SearchPlaylistResult = () => {
    const location = useLocation();
    const typeResult = location.state.result;
    const selectArtist = useSelector(artistSelector).select;
    const selectAlbum = useSelector(albumSlice).select;

    const result = (typeResult === 'artist') ? selectArtist : selectAlbum;

    const elementListAudios = result?.audios.map((audio, index) => {
        return (
            <tr key={audio.id} className='pt-8 hover:bg-[hsla(0,0%,100%,.1)] rounded-md group'>
                <td className='text-center'>
                    <div className='relative'>
                        <p className='group-hover:opacity-0 transition-all duration-300'>{index + 1}</p>
                        <button className='z-20 fill-[#dbdbdb] -top-3 left-2 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                            {iconPause_TrackItem}
                        </button>
                    </div>
                </td>
                <td className='flex gap-2 items-center py-2'>
                    <div><img className='w-10 object-cover h-10' src={audio.image} alt="ảnh" /></div>
                    <div><p className='text-base font-CircularBook text-[#fff]'>{audio.name}</p><p className='text-sm'>{(typeResult === 'album') ? audio.artist.name : selectArtist.name}</p></div>
                </td>
                <td className='overflow-hidden truncate'>{typeResult === 'artist' ? audio.name : selectAlbum?.name}</td>
                <td>
                    {typeResult === 'artist' ? audio.album.dateAdded : audio.dateAdded}
                </td>
                <td>
                    <div className='vote flex justify-start'>
                        <FavoritesComp audio={audio} />
                    </div>
                </td>
            </tr>
        )
    })
    return (
        <div>
            {/* Direction Menu */}
            <DirectMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Content */}
            <section className='section-playlist pb-[90px] min-h-screen pl-[241px] bg-[#121212] '>
                <div className='section-playlist-banner flex items-end gap-6 linearColor max-h-[500px] h-[30vh] min-h-[340px] p-8'>
                    <div className='banner-img w-48 h-48'>
                        <img className='w-full object-cover h-full drop-shadow-2xl' src={typeResult == 'artist'? selectArtist?.image : selectAlbum?.audios[0]?.image} alt="" />
                    </div>
                    <div className='overflow-hidden flex-1 banner-song-info text-[#fff]'>
                        <p className='text-[16px] font-CircularBook'>{typeResult === 'artist' ? 'Artist' : 'Album'}</p>
                        <h3 className='font-CircularBold text-[72px] truncate'>{result?.name}</h3>
                        {/* <p className='text-[16px] font-CircularLight'>Danh sách nghệ sĩ</p> */}
                    </div>
                </div>
                <div className='section-playlist-list-song h-full bg-[#121212]'>
                    <div className='section-play-list-control flex gap-8 px-8 py-6 items-center'>
                        <button className='rounded-[50%] hover:scale-110 transition-all duration-200 bg-primaryColor p-3.5'>
                            {iconPauseBtn_Playlist}
                        </button>
                    </div>
                    <div className='section-playlist-list px-8 h-full'>
                        <table className='table-fixed w-full text-[#B3B3B3] h-full font-CircularLight text-sm mb-16'>
                            <thead className='text-left'>
                                <tr className='border-b border-[hsla(0,0%,100%,.1)]'>
                                    <th width="5%" className='text-center'>#</th>
                                    <th width="35%" className='py-2'>Title</th>
                                    <th wdth="20%" className='py-2'>Album</th>
                                    <th className='py-2'>Date Added</th>
                                    <th width="5%" className='py-2'><i className="fa-regular fa-clock"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)] rounded-md group'>
                                        <td className='text-center'>
                                            <div className='relative'>
                                                <p className='group-hover:opacity-0 transition-all duration-300'>1</p>
                                                <button className='z-20 fill-[#dbdbdb] -top-3 left-2 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                                                    {iconPause_TrackItem}
                                                </button>
                                            </div>
                                        </td>
                                        <td className='flex gap-2 items-center py-2'>
                                            <div><img className='w-10 object-cover h-10' src="ảnh" alt="ảnh" /></div>
                                            <div><p className='text-base font-CircularBook text-[#fff]'>Tên Audio</p><p className='text-sm'>Tên nghệ sĩ</p></div>
                                        </td>
                                        <td className='overflow-hidden truncate'>tên Album</td>
                                        <td>
                                            Ngày thêm album
                                        </td>
                                        <td>
                                            <div className='vote flex justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr> */}
                                {elementListAudios}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Content */}
        </div>
    );
}

export default SearchPlaylistResult;
