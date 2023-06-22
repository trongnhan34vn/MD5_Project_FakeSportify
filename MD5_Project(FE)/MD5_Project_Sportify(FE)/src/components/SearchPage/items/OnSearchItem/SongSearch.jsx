import React from 'react'
import { useSelector } from 'react-redux'
import { iconPause_TrackItem } from '../../../../assets/icon/icon'
import { albumSlice, artistSelector, audioSelector } from '../../../../redux/selector'

export default function SongSearch() {
    const audioSearch = useSelector(audioSelector)
    const elementSearchSong = audioSearch.search.map((item, index) => {
        return <tr key={item.id} className='hover:bg-[hsla(0,0%,100%,.1)] rounded-md group'>
            <td width={"4%"} className='text-[#fff] px-2 py-6'>
                {index+1}
            </td>
            <td width={"5%"} className=" p-2">
                <div className='relative'>
                    <img className='group-hover:opacity-70 w-10 h-10' src={item.image} alt="" />
                    <button className='z-20 fill-[#dbdbdb] top-0 left-5 -translate-x-5 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                        {iconPause_TrackItem}
                    </button>
                </div>
            </td>
            <td>
                <div className='flex flex-col text-[#fff]'>
                    <h4 className='text-[16px] font-CircularMedium hover:underline mr-auto inline-block cursor-pointer'>{item.name}</h4>
                    <p className='text-[14px] font-CircularLight hover:underline mr-auto inline-block cursor-pointer'>{item.artist.name}</p>
                </div>
            </td>
            <td>
                <p className='text-[#fff] text-[14px] font-CircularLight'>{item.album.name}</p>
            </td>
            <td>
                <p className='text-[#fff] text-[14px] font-CircularLight'>4.4</p>

            </td>
        </tr>
    })
    return (
        <div className='content w-full transition-all opacity-100 ease-in-out duration-400'>
            {/* List Playlists - Log Out */}
            <div className='list-playlists pt-[120px] transition-all opacity-100 ease-in-out duration-400 ml-[241px] h-screen flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                {/* Playlists - Your Playlist */}
                <div className='list-playlists-item px-8 mb-4'>
                    {/* Playlist Title */}
                    <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                        <a href="" className=''>
                            <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Songs</h3>
                        </a>
                    </div>
                    {/* Playlist Title */}
                    <div className='list-playlists-item list-albums'>
                        {/* Songs */}
                        <table border={'1'} className='w-full'>
                            <thead className='font-CircularBook text-[18px] text-[#fff]'>
                                <tr>
                                    <td>#</td>
                                    <td></td>
                                    <td>Title</td>
                                    <td>Album</td>
                                    <td><i className='ti-timer'></i></td>
                                </tr>
                            </thead>
                            <tbody>
                                {elementSearchSong}
                                {/* <tr className='hover:bg-[hsla(0,0%,100%,.1)] p-2 rounded-md group'>
                                    <td width={"4%"} className='text-[#fff]'>
                                        1
                                    </td>
                                    <td width={"8%"}>
                                        <div className='relative'>
                                            <img className='group-hover:opacity-70 w-10 h-10' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                                            <button className='z-20 fill-[#dbdbdb] top-0 left-5 -translate-x-5 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                                                {iconPause_TrackItem}
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex flex-col text-[#fff]'>
                                            <h4 className='text-[16px] font-CircularMedium hover:underline mr-auto inline-block cursor-pointer'>tên bài</h4>
                                            <p className='text-[14px] font-CircularLight hover:underline mr-auto inline-block cursor-pointer'>tên ngệ sĩ</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-[#fff] text-[14px] font-CircularLight'>2</p>
                                    </td>
                                    <td>
                                        <p className='text-[#fff] text-[14px] font-CircularLight'>4.4</p>

                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                        {/* Songs */}

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
    )
}
