import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { artistSelector, stateOnSearchSelector } from '../../redux/selector';
import DirectMenu from '../DirectMenu/DirectMenu';
import Navbar from '../Navbar/Navbar';
import NonSearch from './items/NonSearch';
import OnSearch from './items/OnSearch';


const SearchPage = () => {
    const stateOnSearch = useSelector(stateOnSearchSelector)
    const location = useLocation()
    const elementSearchPage = (stateOnSearch.searchVal !== '') ? <OnSearch /> : <NonSearch />

    return (
        <div className='relative home-page mb-[66px] w-full flex'>
            {/* Direction Menu */}
            <DirectMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Nav */}
            {/* Content */}
            {elementSearchPage}
            {/* Content */}
            {/* Footer */}
            {/* Footer */}
        </div>

    );
}

export default SearchPage;
