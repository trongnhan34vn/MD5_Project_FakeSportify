import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as actions from '../../../redux/actions';
import { stateOnSearchSelector } from '../../../redux/selector';

const AuthenSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateOnSearch = useSelector(stateOnSearchSelector)
    const location = useLocation();
    const path = location.pathname;

    const handleChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        dispatch(actions.searchAudioByName(value));
        dispatch(actions.searchAlbumByName(value));
        dispatch(actions.searchArtistByName(value));
        dispatch(actions.checkOnSearch(value))
        // 3 dispatch request search audios, album, artist
    }

    const elementFilterSearch = (stateOnSearch.searchVal != '') ? <div className='flex'>
        <NavLink className='px-3 bg-[#fff] rounded-[500px]'>
            <button className='text-[#000] font-CircularBook text-[14px]'>All</button>
        </NavLink>
        <div className='px-3'>
            <button className='text-[#fff] font-CircularBook text-[14px]'>Songs</button>
        </div>
        <div className='px-3'>
            <button className='text-[#fff] font-CircularBook text-[14px]'>Artist</button>
        </div>
        <div className='px-3'>
            <button className='text-[#fff] font-CircularBook text-[14px]'>Albums</button>
        </div>
    </div> : <></>;

    const elementSearchBar = path === '/search' ? <div className='flex justify-center flex-col'>
        <div className='bg-[#242424] mb-2 px-4 rounded-[500px] border-[2px] border-[#000] hover:border-solid hover:border-[2px] hover:border-[#fff] active:border-[#fff] '>
            <i className="fa-solid fa-magnifying-glass text-[#fff]"></i>
            <input value={stateOnSearch.searchVal} onChange={handleChange} name='search' placeholder='What do you want to listen to?' type="text" className='text-[#fff] text-sm py-2 pl-2 pr-9 bg-[#242424] outline-none' />
        </div>
        {/* <div className='flex'>
            <NavLink className='px-3 bg-[#fff] rounded-[500px]'>
                <button className='text-[#000] font-CircularBook text-[14px]'>All</button>
            </NavLink>
            <div className='px-3'>
                <button className='text-[#fff] font-CircularBook text-[14px]'>Songs</button>
            </div>
            <div className='px-3'>
                <button className='text-[#fff] font-CircularBook text-[14px]'>Artist</button>
            </div>
            <div className='px-3'>
                <button className='text-[#fff] font-CircularBook text-[14px]'>Albums</button>
            </div>
        </div> */}
        {elementFilterSearch}

    </div> : <></>;


    // const searchInput = (location.pathname === "/search") ? 

    // Hiệu ứng navbar
    const [menuToggle, setMenuToggle] = useState(false)
    // const toggleStatus = useSelector(toggleSelector)
    // let toggle = toggleStatus
    // useEffect(() => {
    //     toggle ? setMenuToggle(true) : setMenuToggle(false)
    // }, [toggle])
    const [stickyClass, setStickyClass] = useState('')
    const stickNav = () => {
        let windowHeight = window.scrollY;
        (windowHeight > 64) ? setStickyClass('bg-show') : setStickyClass('')
    }
    useEffect(() => {
        window.addEventListener('scroll', stickNav)
    }, [])
    // Hiệu ứng navbar

    // Toggle menu navbar thò thụt
    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    const handleSignOut = () => {
        setMenuToggle(false)
        navigate("/")
    }
    const elementIconToggle = (menuToggle) ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>
    const elementMenuToggle = (menuToggle) ? <ul className='right-0 top-10 p-1 direction-account absolute bg-[#282828] font-CircularLight text-sm rounded shadow-[0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%)] max-w-[350px] min-w-[160px]'>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' >Profile</a></li>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' >Account</a></li>
        <li><button onClick={handleSignOut} className='w-full text-left p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' >Log Out</button></li>
    </ul> : ""
    // Toggle menu navbar thò thụt
    return (
        <div onClick={menuToggle ? handleMenuToggle : undefined}>
            {/* Nav */}
            {/* <div className='left-[22%] -translate-y-4 top-8 fixed nav-direction-page flex items-center gap-4 z-[100]'>
                <button onClick={navigate(-1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                    <i className="ti-angle-left text-[#fff] font-bold" />
                </button>
                <button onClick={navigate(1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                    <i className="ti-angle-right text-[#fff] font-bold" />
                </button>
            </div> */}
            <nav className={`fixed z-[60] ${(path === '/search' && stateOnSearch.searchVal != '') ? 'p-12' : ''} right-0 left-[241px] navbar-menu h-16 px-8 flex justify-between duration-[0.3s] bg-show`}>
                <div className='nav-direction-page  flex items-center gap-4 z-[60]'>
                    <button onClick={() => navigate(-1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                        <i className="ti-angle-left text-[#fff] font-bold" />
                    </button>
                    <button onClick={() => navigate(1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                        <i className="ti-angle-right text-[#fff] font-bold" />
                    </button>
                    {elementSearchBar}
                </div>
                <div className='nav-list flex items-center gap-4 z-[70]'>
                    <ul className='text-[#fff] flex gap-4 relative font-CircularBook'>
                        <li className='inline-block'>
                            <a href='' className='border-[1px] border-[#B3B3B3] rounded-[500px] text-sm inline-block py-[3px] px-[15px] leading-6 hover:scale-105 hover:border-[#fff] transition-all duration-200'>Khám phá Premium</a>
                        </li>
                        <li className='inline-block'>
                            <button onClick={handleMenuToggle} className='h-8 items-center justify-between gap-2 rounded-[500px] text-sm flex bg-black hover:bg-[#282828] py-[3px] leading-6 hover:opacity-100 transition-all duration-200'>
                                <span className=''>
                                    <img className='w-7 h-7 rounded-[50%]' src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg" alt="" />
                                </span>
                                <span className='users'>
                                    Khoa
                                </span>
                                <span className='pr-3'>
                                    {elementIconToggle}
                                </span>
                            </button>
                            {elementMenuToggle}
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Nav */}
        </div>
    );
}

export default AuthenSuccess;
