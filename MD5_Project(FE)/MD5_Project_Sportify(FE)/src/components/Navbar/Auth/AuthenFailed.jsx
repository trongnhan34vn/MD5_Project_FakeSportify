import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useLocation, NavLink } from 'react-router-dom';
import * as actions from '../../../redux/actions';
import { stateOnSearchSelector } from '../../../redux/selector';

const AuthenFailed = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const stateOnSearch = useSelector(stateOnSearchSelector)
    const location = useLocation();
    const path = location.pathname;
    const [activeTab, setActiveTab] = useState("")

    const handleChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        dispatch(actions.searchAudioByName(value));
        dispatch(actions.searchAlbumByName(value));
        dispatch(actions.searchArtistByName(value));
        dispatch(actions.checkOnSearch(value))
        // 3 dispatch request search audios, album, artist
    }

    const isSearch = location.pathname.match("/search/*");

    useEffect(() => {
        let activeArr = [
            { path: "/search", tab: "All" },
            { path: "/search/songs", tab: "Songs" },
            { path: "/search/artist", tab: "Artist", },
            { path: "/search/albums", tab: "Albums", },
            { path: "/search-result-category", tab: "Category"}
        ];
        activeArr.forEach((val) => {
            if (val.path === location.pathname) {
                return setActiveTab(val.tab)
            }
        })
    }, [location.pathname])

    const elementFilterSearch = (stateOnSearch.searchVal != '') ? <div className='flex'>
        <NavLink to={"/search"} className={`${activeTab === "All" && "bg-[#fff] rounded-[500px] transition-all ease-in-out duration-200"}`}>
            <button className={`${activeTab === "All" ? 'text-[#000]' : 'text-[#fff]'} px-3 font-CircularBook text-[14px]`}>All</button>
        </NavLink>
        <NavLink to={"/search/songs"} className={`${activeTab === "Songs" && "bg-[#fff] rounded-[500px] transition-all ease-in-out duration-200"}`}>
            <button className={`${activeTab === "Songs" ? 'text-[#000]' : 'text-[#fff]'} px-3 font-CircularBook text-[14px]`}>Songs</button>
        </NavLink>
        <NavLink to={"/search/artist"} className={`${activeTab === "Artist" && "bg-[#fff] rounded-[500px] transition-all ease-in-out duration-200"}`}>
            <button className={`${activeTab === "Artist" ? 'text-[#000]' : 'text-[#fff]'} px-3 font-CircularBook text-[14px]`}>Artist</button>
        </NavLink>
        <NavLink to={"/search/albums"} className={`${activeTab === "Albums" && "bg-[#fff] rounded-[500px] transition-all ease-in-out duration-200"}`}>
            <button className={`${activeTab === "Albums" ? 'text-[#000]' : 'text-[#fff]'} px-3 font-CircularBook text-[14px]`}>Albums</button>
        </NavLink>
    </div> : <></>;

    const elementSearchBar = isSearch && location.pathname != "/search/category" ? <div className='flex justify-center flex-col'>
        <div className='bg-[#242424] mb-2 px-4 rounded-[500px] border-[2px] border-[#000] hover:border-solid hover:border-[2px] hover:border-[#fff] active:border-[#fff] '>
            <i className="fa-solid fa-magnifying-glass text-[#fff]"></i>
            <input value={stateOnSearch.searchVal} onChange={handleChange} name='search' placeholder='What do you want to listen to?' type="text" className='text-[#fff] text-sm py-2 pl-2 pr-9 bg-[#242424] outline-none' />
        </div>
        {elementFilterSearch}
    </div> : <></>;



    return (
        <div>
            {/* Nav */}
            <div className={`fixed z-[60] ${(isSearch && stateOnSearch.searchVal != '') ? 'p-12' : ''} right-0 left-[241px] navbar-menu h-16 px-8 flex justify-between duration-[0.3s] bg-show`}>
                <div className='nav-direction-page flex gap-4'>
                    <button onClick={() => navigate(-1)} className='px-2 py-1 opacity-75 hover:opacity-100 transition-all duration-200'>
                        <i className="ti-angle-left text-[#fff] font-bold" />
                    </button>
                    <button onClick={() => navigate(1)} className='px-2 py-1 opacity-75 hover:opacity-100 transition-all duration-200'>
                        <i className="ti-angle-right text-[#fff] font-bold" />
                    </button>
                    {elementSearchBar}
                </div>
                <div className='nav-list flex items-center gap-4'>
                    <ul className='text-[#fff] font-CircularBook'>
                        <li className='inline-block'>
                            <a href='#' className='inline-block tracking-[0.105em] opacity-60 py-4 px-2 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Premium</a>
                        </li>
                        <li className='inline-block'>
                            <a href='#' className='inline-block tracking-[0.105em] opacity-60 py-4 px-2 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Hỗ trợ</a>
                        </li>
                        <li className='inline-block'>
                            <a href='#' className='inline-block tracking-[0.105em] opacity-60 py-4 pl-2 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Tải xuống</a>
                        </li>
                    </ul>
                    <div className='m-4 bg-[#fff] h-6 w-[1px]'></div>
                    <ul className='text-[#fff] font-CircularBook'>
                        <li className='inline-block'>
                            <Link to={"/sign-up"} className='tracking-widest inline-block opacity-60 py-4 pl-2 pr-8 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Đăng kí</Link>
                        </li>
                        <li className='inline-block'>
                            <Link to={'/login'} className='font-CircularMedium tracking-normal bg-[#fff] rounded-[500px] text-[#000] inline-block py-2 px-8 leading-8 hover:scale-105 transition-all duration-200'>Đăng nhập</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Nav */}
        </div>
    );
}

export default AuthenFailed;
