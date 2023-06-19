import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iconPause_TrackItem } from '../../assets/icon/icon';
import * as actions from '../../redux/actions';
import { playlistSelector } from '../../redux/selector';
import DirectMenu from '../DirectMenu/DirectMenu';
import Navbar from '../Navbar/Navbar';
import '../../assets/css/pagin.css'
import DeleteModal from '../Modal/DeleteModal';

const YourLibrary = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies(["userId"])
    const navigate = useNavigate()
    const userPlaylist = useSelector(playlistSelector).searchByUserId;
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isOpenModal, setOpenModal] = useState(false);
    const [playlistId, setPlaylistId] = useState(0)


    const handleSelectPlaylist = (id) => {
        navigate("/my-playlist", { state: { playlistId: id } })
    }

    const handlePagin = (item) => {
        dispatch(actions.findPlaylistByUserId({
            userId: cookies['userId'],
            page: item - 1,
            size: 10
        }))
        setCurrentPage(item);
    }
    useEffect(() => {
        if (userPlaylist.totalPages) {
            let pageArr = []
            for (let index = 0; index < userPlaylist.totalPages; index++) {
                pageArr.push(index + 1)
            }
            setPages(pageArr)
        }
    }, [userPlaylist])

    const elementPages = pages.map((item, index) => {
        return (
            <button onClick={() => handlePagin(item)} key={index} className={`${item === currentPage ? 'opacity-100 text-[#fff]' : ''} pagination__number`}>{item}</button>
        )
    })

    const handleDeletePlaylist = (id) => {
        setOpenModal(true);
        setPlaylistId(id);
    }

    const elementModal = isOpenModal ? <DeleteModal currentPage={currentPage} setOpenModal={setOpenModal} playlistId={playlistId} /> : <></>;

    const elementUserPlaylist = userPlaylist?.playlists?.map((item, index) => {
        return (
            <div key={item.id} className='group h-[243px] relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
                <button  className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-pointer rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                    {iconPause_TrackItem}
                </button>
                <button onClick={() => handleDeletePlaylist(item.id)} className='cursor-pointer shadow-2xl text-red-600 z-20 top-[42%] -translate-x-20 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 rounded-[50%] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                    <i className="text-[30px] fa-solid fa-trash-can"></i>
                </button>
                <button onClick={() => handleSelectPlaylist(item.id)} className='block w-full album-wrap p-4'>
                    <div className='album-img flex flex-col mb-4 relative'>
                        <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={item.image} alt="" />
                    </div>
                    <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                        <h3 className='font-CircularMedium text-base mb-1 truncate'>{item.name}</h3>
                    </div>
                </button>
            </div>
        )
    })

    useEffect(() => {
        let pageObj = {
            userId: cookies['userId'],
            page: 0,
            size: 10
        }
        dispatch(actions.findPlaylistByUserId(pageObj))
    }, [userPlaylist])
    return (
        <div className='relative home-page mb-[66px] w-full flex' >
            {/* Direction Menu */}
            <DirectMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Nav */}
            {/* Content */}
            <div className='content w-full'>
                {/* List Playlists - Log Out */}
                <div className='list-playlists pt-[90px] min-h-screen ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                    {/* Playlists - Your Playlist */}
                    <div className='list-playlists-item px-8 mb-4'>
                        {/* Playlist Title */}
                        <div className='list-playlists-item-title flex justify-between items-center mb-[22px]'>
                            <a href="" className=''>
                                <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Your Library</h3>
                            </a>
                            {/* <div className='w-fit mt-10 mx-auto'> */}
                            <div className="pagination">
                                <span className="pagination__number-indicator"></span>
                                {/* <button className="pagination__number pagination__number--active">1</button>
                                <button className="pagination__number">2</button>
                                <button className="pagination__number">3</button>
                                <button className="pagination__number">4</button>
                                <button className="pagination__number">5</button>
                                <button className="pagination__number">6</button>
                                <button className="pagination__number">7</button> */}
                                {elementPages}
                            </div>
                            {/* </div> */}
                        </div>
                        {/* Playlist Title */}
                        <div className='list-playlists-item list-albums min-h-[525px] grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4  l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
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
                            {elementUserPlaylist}
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
            {elementModal}
            {/* Content */}
            {/* Footer */}
            {/* Footer */}
        </div >
    );
}

export default YourLibrary;
