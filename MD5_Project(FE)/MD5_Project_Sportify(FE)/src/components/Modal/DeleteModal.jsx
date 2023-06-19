import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { playlistSelector } from '../../redux/selector'

export default function DeleteModal(props) {
    const dispatch = useDispatch()
    const selectPlaylist = useSelector(playlistSelector).select;
    const [cookies] = useCookies(["userId"])

    useEffect(() => {
        dispatch(actions.findPlaylistById(props.playlistId))
    }, [])

    const handleCloseModal = () => {
        props.setOpenModal(false);
    } 

    const handleDeletePlaylist = () => {
        dispatch(actions.deletePlaylistById({
            playlistId: props.playlistId, 
            paging: {
                userId: + cookies['userId'],
                page: props.currentPage - 1,
                size: 10
            }
        }))
        handleCloseModal()
    }

    return (
        <div className='fixed z-50 top-20 left-1/2 -translate-x-1/2'>
            <div className='bg-[#282828] w-[524px] rounded-[8px] min-h-[384px]'>
                <div className='header flex justify-between p-[24px]'>
                    <p className='text-[#fff] text-[24px] font-CircularMedium'>Delete</p>
                    <div>
                        <button onClick={handleCloseModal} className='text-[#fff]'><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <div className='p-[24px]'>
                    <h2 className='font-CircularMedium text-[30px] text-[#fff]'>Do you want to delete <span className='text-red-600'>{selectPlaylist?.name}?</span> </h2>
                </div>
                <div>
                <div className='px-10 flex justify-end mb-8'>
                    <button onClick={handleDeletePlaylist} className='rounded-[500px] hover:scale-110 transition-all duration-200 font-CircularMedium h-12 px-8 bg-red-600 text-[#fff]'>Delete</button>
                    <button onClick={handleCloseModal} className='transition-all duration-200 font-CircularMedium h-12 px-8 hover:underline text-[#fff]'>Cancel</button>
                </div>
                </div>
                <div className='px-6 pb-6'>
                    <p className=' font-CircularMedium text-[12px] text-[#fff]'>By proceeding, you agree to give Spotify access to delete this playlist. Please make sure you want to delete this playlist!
                    </p>
                </div>
            </div>
        </div>
    )
}
