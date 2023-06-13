import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { artistSelector, stateOnSearchSelector } from '../../redux/selector';
import DirectMenu from '../DirectMenu/DirectMenu';
import Navbar from '../Navbar/Navbar';
import NonSearch from './items/NonSearch';
import OnSearch from './items/OnSearch';


const SearchPage = () => {
    const stateOnSearch = useSelector(stateOnSearchSelector)
    
    const elementSearchPage = (stateOnSearch.searchVal !== '') ? <OnSearch /> : <NonSearch />

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
                {/* {elementSearchPage} */}
                <OnSearch />
                {/* Content */}
                {/* Footer */}
                {/* Footer */}
            </div>
            {/* Home Page - Log in*/}
        </div>
    );
}

export default SearchPage;
