import React, { useEffect } from 'react';
import { iconPauseBtn_Playlist, iconPause_TrackItem } from '../../assets/icon/icon';
import DirectMenu from '../DirectMenu/DirectMenu';
import Navbar from '../Navbar/Navbar';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { audioSelector, playlistSelector } from '../../redux/selector';
import Modal from '../Modal/Modal';


const FormPlaylist = () => {
    const [cookies, setCookie] = useCookies(["userId"])
    const dispatch = useDispatch();

    const playlistByUserId = useSelector(playlistSelector).searchByUserId;
    const latestPlaylist = useSelector(playlistSelector).latestPlaylist;
    const audioList = useSelector(audioSelector).search;
    const selelctAudio = useSelector(audioSelector).select;
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [defaultPlaylist, setDefaultPlaylist] = useState({
        name: '',
        userId: 0,
        status: false
    });

    const modalElement = isOpenModal ? <Modal setIsOpenModal={setIsOpenModal} /> : <></>;

    useEffect(() => {
        dispatch(actions.findPlaylistByUserId(cookies["userId"]))
        console.log(playlistByUserId);
        let numOrder;
        if (playlistByUserId.length === 0) {
            numOrder = 1
        } else {
            numOrder = playlistByUserId.length + 1
        }
        setDefaultPlaylist({
            name: 'My Playlist #' + numOrder,
            userId: cookies["userId"],
            status: true
        })
    }, [])

    const handleModal = () => {
        setIsOpenModal(pre => !pre);
    }

    const handleChange = (e) => {
        dispatch(actions.searchAudioPaging(e.target.value))
    }

    const handleInsertToPlaylist = (audioId) => {
        console.log(latestPlaylist);
        dispatch(actions.findAudioById(audioId))
        dispatch(actions.updatePlaylist({
            id: latestPlaylist.id,
            name: latestPlaylist.name,
            audios: latestPlaylist.audios == null ? [selelctAudio] : [...latestPlaylist.audios, selelctAudio],
            status: true
        }))
    }

    const elementAudioSearch = audioList.map((item) => {
        return (
            <tr key={item.id} className='pt-8 hover:bg-[hsla(0,0%,100%,.1)] rounded-md group'>
                <td width={"50%"} className='flex gap-2 items-center py-2'>
                    <div className='relative'>
                        <img className='w-10 object-cover h-10' src="ảnh" alt="ảnh" />
                        <button className='z-20 fill-[#dbdbdb] top-0 left-2 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                            {iconPause_TrackItem}
                        </button>
                    </div>
                    <div><p className='text-base font-CircularBook text-[#fff]'>{item.name}</p><p className='text-sm'>{item.artist.name}</p></div>
                </td>
                <td width={"40%"} className='overflow-hidden truncate'>{item.album.name}</td>
                <td width={"10%"}>
                    <div className='vote flex items-center justify-center'>
                        <button onClick={() => handleInsertToPlaylist(item.id)} className='px-2 py-1 border-[1px] border-[#fff] rounded-[500px] hover:scale-110 transition-all ease-in-out duration-200'>Add</button>
                    </div>
                </td>
            </tr>
        )
    })

    useEffect(() => {
        if (defaultPlaylist.name.trim() !== '' && defaultPlaylist.userId != 0) {
            dispatch(actions.createPlaylist(defaultPlaylist))
        }
    }, [defaultPlaylist])

    return (
        <div>
            {/* Direction Menu */}
            <DirectMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Content */}
            <section className='section-playlist pb-[90px] h-full min-h-screen pl-[241px] bg-[#121212]'>
                <div className='section-playlist-banner flex items-end gap-6 linearColor max-h-[500px] h-[30vh] min-h-[340px] p-8'>
                    <div className='banner-img w-48 h-48'>
                        <img className='w-full object-cover h-full drop-shadow-2xl' src="" alt="" />
                    </div>
                    <div onClick={handleModal} className='overflow-hidden banner-song-info text-[#fff]'>
                        <p className='text-[16px] font-CircularMedium'>Playlist</p>
                        <h3 className='font-CircularBold text-[72px] truncate'><button> <span className='mr-10'>{latestPlaylist && latestPlaylist.name}</span></button></h3>
                        <p className='text-[16px] font-CircularLight'>{latestPlaylist && latestPlaylist.user.fullName}</p>
                    </div>
                </div>
                <div className='section-playlist-list-song h-full bg-[#121212]'>
                    <div className='section-playlist-list px-8 h-full mb-[40px]'>
                        <table className='table-fixed w-full text-[#B3B3B3] h-full font-CircularLight text-sm'>
                            <thead className='text-left'>
                                <tr className='border-b border-[hsla(0,0%,100%,.1)]'>
                                    <th width="5%" className='text-center'>#</th>
                                    <th width="35%" className='py-2'>Title</th>
                                    <th wdth="20%" className='py-2'>Album</th>
                                    <th className='py-2'>Date Added</th>
                                    <th width="10%" className='py-2'><i className="fa-regular fa-clock"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {elementListtrack} */}
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
                                {/* {elementList} */}
                            </tbody>
                        </table>
                    </div>
                    <h3 className='px-8 text-[#fff] font-CircularBook text-[30px] font-bold'>Let's find something for your playlist</h3>
                    <div className='section-play-list-control flex gap-8 px-8 py-6 items-center'>
                        <div className='bg-[#242424] mb-2 px-4 rounded-[500px] border-[2px] border-[#000] hover:border-solid hover:border-[2px] focus:border-[2px] focus:border-[#fff] hover:border-[#fff] active:border-[#fff] '>
                            <i className="fa-solid fa-magnifying-glass text-[#fff]"></i>
                            <input onChange={handleChange} name='search' placeholder='What do you want to listen to?' type="text" className='text-[#fff] text-sm py-2 pl-2 pr-9 bg-[#242424] outline-none ' />
                        </div>
                    </div>

                    <div className='section-playlist-list px-8 h-full mb-[40px]'>
                        <table className='table-fixed w-full text-[#B3B3B3] h-full font-CircularLight text-sm'>
                            <tbody>
                                {/* {elementListtrack} */}
                                {/* <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)] rounded-md group'>
                                    <td width={"50%"} className='flex gap-2 items-center py-2'>
                                        <div className='relative'>
                                            <img className='w-10 object-cover h-10' src="ảnh" alt="ảnh" />
                                            <button className='z-20 fill-[#dbdbdb] top-0 left-2 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                                                {iconPause_TrackItem}
                                            </button>
                                        </div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tên Audio</p><p className='text-sm'>Tên nghệ sĩ</p></div>
                                    </td>
                                    <td width={"40%"} className='overflow-hidden truncate'>tên Album</td>
                                    <td width={"10%"}>
                                        <div className='vote flex items-center justify-center'>
                                            <button className='px-2 py-1 border-[1px] border-[#fff] rounded-[500px] hover:scale-110 transition-all ease-in-out duration-200'>Add</button>
                                        </div>
                                    </td>
                                </tr> */}
                                {elementAudioSearch}
                                {/* {elementList} */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
            {/* Content */}
            {/* Footer */}
            {modalElement}
            {/* Footer */}
        </div>
    );
}

export default FormPlaylist;
