import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allCateforySelector } from '../../../redux/selector';
import * as actions from '../../../redux/actions';
import CategorySearch from './NonSearchItem/CategorySearch';


export default function NonSearch() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.findAllCategory())
    }, [])
    const listCategories = useSelector(allCateforySelector)
    const navigate = useNavigate();
    const location = useLocation();
    const [color, setColor] = useState()
    useEffect(() => {
        let codeArr = [
           'bg-tahiti-100',
           'bg-tahiti-200',
           'bg-tahiti-300',
           'bg-tahiti-400',
           'bg-tahiti-500',
           'bg-tahiti-600',
           'bg-tahiti-700',
           'bg-tahiti-800',
           'bg-tahiti-900',
           'bg-tahiti-1000',
           'bg-tahiti-1100'
        ];
        setColor(codeArr);
    }, [])

    const handleSelectCategory = (id) => {
        navigate("/search/category")
        dispatch(actions.searchArtistByCategory(id))
        dispatch(actions.findCategoryById(id))
    }

    const elementCategory = listCategories.map((category, index) => {
        return <div key={category.id} className={`group relative album-item bg-tahiti-${(index + 1)*100} w-[200px] h-[200px] rounded-[8px] transition-all duration-300`}>
            {/* <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
            {iconPause_TrackItem}
        </button> */}
            <button onClick={() => handleSelectCategory(category.id)} className='block w-full h-full album-wrap p-4 relative overflow-hidden'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='absolute left-[100px] shadow-lg top-5 rounded rotate-[25deg] object-cover w-24 h-24 drop-shadow-2xl' src={`${category.img}`} alt="" />
                </div>
                <div className='absolute top-2 album-content w-full text-left overflow-hidden text-[#fff]'>
                    <h3 className='text-[24px] font-CircularMedium mb-1 truncate'>{category.name}</h3>
                </div>
            </button>
        </div>
    })
    return (
        !(location.pathname === "/search/category") ?
            <div className='content w-full min-h-screen'>
                {/* List Playlists - Log Out */}
                <div className='list-playlists pt-[100px] ml-[241px] h-full flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                    {/* Playlists - Your Playlist */}
                    <div className='list-playlists-item px-8 mb-4'>
                        {/* Playlist Title */}
                        <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                            <a href="#" className=''>
                                <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Browse all</h3>
                            </a>
                        </div>
                        {/* Playlist Title */}
                        <div className='w-full list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                            {/* Playlist Item */}
                            {elementCategory}
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
            </div> :
            <CategorySearch />
    )
}
