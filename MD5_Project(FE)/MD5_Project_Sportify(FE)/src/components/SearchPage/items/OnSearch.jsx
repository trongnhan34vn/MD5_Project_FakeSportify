import React from 'react';
import IndexOnSearch from './OnSearchItem/IndexOnSearch';
import { useLocation } from 'react-router-dom';
import SongSearch from './OnSearchItem/SongSearch';
import AlbumSearch from './OnSearchItem/AlbumSearch';
import ArtistSearch from './OnSearchItem/ArtistSearch';


const OnSearch = () => {
    const location = useLocation()
    const resultElement = (location.pathname === '/search') ? <IndexOnSearch /> : (location.pathname === '/search/songs') ? <SongSearch /> : location.pathname === '/search/albums' ? <AlbumSearch /> : <ArtistSearch />
    return (
        <div className='content w-full'>
            {/* List Playlists - Log Out */}
            {/* <IndexOnSearch /> */}
            {resultElement}
            {/* List Playlists - Log Out */}
        </div>
    );
}

export default OnSearch;
