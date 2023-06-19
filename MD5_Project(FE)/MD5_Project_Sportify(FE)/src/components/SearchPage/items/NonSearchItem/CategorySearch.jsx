import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iconPause_TrackItem } from '../../../../assets/icon/icon';
import { artistSelector, categorySelector } from '../../../../redux/selector';
import * as actions from '../../../../redux/actions';
import { useNavigate } from 'react-router-dom';

const CategorySearch = () => {
    const listArtistCategory = useSelector(artistSelector);
    const selectCategory = useSelector(categorySelector).select;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleToCategoryAudios = (artistId) => {
        dispatch(actions.findAudioByCategoryAndArtist({
            artistId: artistId,
            categoryId: selectCategory.id
        }))
        navigate('/search-result-category', {state: {selectCategory: selectCategory}})
    }

    const elementArtist = listArtistCategory.search.map(artist => {
        return <div key={artist.id} className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPause_TrackItem}
            </button>
            <button onClick={() => handleToCategoryAudios(artist.id)} className='block w-full album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='rounded-[50%] object-cover w-[167px] h-[167px] drop-shadow-2xl' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                </div>
                <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{artist.name}</h3>
                </div>
            </button>
        </div>
    })
    return (
        <div className='content w-full'>
            {/* List Playlists - Log Out */}
            <div className='list-playlists pt-[135px] ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                <div className='px-8 mb-14 flex justify-start'>
                    <h1 className='text-[#fff] font-CircularBold text-[100px]'>{selectCategory && selectCategory.name}</h1>
                </div>
                {/* Playlists - Your Playlist */}
                <div className='list-playlists-item px-8 mb-4'>
                    {/* Playlist Title */}
                    <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                        <a href="" className=''>
                            <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Most Stream Artist On Spotify</h3>
                        </a>
                    </div>
                    {/* Playlist Title */}
                    <div className='w-full list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px]'>
                        {/* Playlist Item */}
                        {elementArtist}
                        {/* Playlist Item */}
                    </div>
                </div>
                {/* Playlists - Your Playlist*/}
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
    );
}

export default CategorySearch;
