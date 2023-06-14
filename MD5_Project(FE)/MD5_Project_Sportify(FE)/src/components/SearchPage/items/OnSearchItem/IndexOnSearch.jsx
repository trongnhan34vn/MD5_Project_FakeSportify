import React from 'react'
import { useSelector } from 'react-redux'
import { iconPause_TrackItem } from '../../../../assets/icon/icon'
import { albumSlice, artistSelector, audioSelector } from '../../../../redux/selector'

export default function IndexOnSearch() {
    const audioSearch = useSelector(audioSelector)
    const albumSearch = useSelector(albumSlice)
    const artistSearch = useSelector(artistSelector)

    const elementSearchSong = audioSearch.search.map((item) => {
        return <tr key={item.id} className='hover:bg-[hsla(0,0%,100%,.1)] block p-2 rounded-md group'>
            <td width={"8%"}>
                <div className='relative'>
                    <img className='group-hover:opacity-70 w-10 h-10' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                    <button className='z-20 fill-[#dbdbdb] top-0 left-5 -translate-x-5 group-hover:opacity-100 group-hover:shadow-xl w-10 h-10 rounded-[50%] flex items-center cursor-default justify-center absolute transition-all duration-300 opacity-0'>
                        {iconPause_TrackItem}
                    </button>
                </div>
            </td>
            <td width={"60%"} className='text-[#fff]'>
                <div className='flex flex-col'>
                    <h4 className='text-[16px] font-CircularMedium hover:underline mr-auto inline-block cursor-pointer'>{item.name}</h4>
                    <p className='text-[14px] font-CircularLight hover:underline mr-auto inline-block cursor-pointer'>{item.artist.name}</p>
                </div>
            </td>
            <td width={"5%"}>
                <p className='text-[#fff] text-[14px] font-CircularLight'></p>
            </td>
        </tr>
    })

    const elementSearchAlbum = albumSearch.search.map((item) => {
        return <div key={item.id} className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPause_TrackItem}
            </button>
            <button className='block w-full album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                </div>
                <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{item.name}</h3>
                </div>
            </button>
        </div>
    })

    const elementSearchArtist = artistSearch.search.map((item) => {
        return <div key={item.id} className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPause_TrackItem}
            </button>
            <button className='block w-full album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='rounded-[50%] object-cover w-[167px] h-[167px] drop-shadow-2xl' src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" alt="" />
                </div>
                <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{item.name}</h3>
                </div>
            </button>
        </div>
    })
    return (
        <div className='list-playlists pt-[120px] ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
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
                    <table className='w-1/2'>
                        <tbody>
                            {elementSearchSong}
                        </tbody>
                    </table>
                    {/* Songs */}

                    {/* Playlist Item */}
                </div>
            </div>
            <div className='list-playlists-item px-8 mb-4'>
                {/* Playlist Title */}
                <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                    <a href="" className=''>
                        <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Artist</h3>
                    </a>
                </div>
                {/* Playlist Title */}
                <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2'>
                    {/* Songs */}
                    {elementSearchArtist}
                    {/* Songs */}

                    {/* Playlist Item */}
                </div>
            </div>
            <div className='list-playlists-item px-8 mb-4'>
                {/* Playlist Title */}
                <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                    <a href="" className=''>
                        <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Albums</h3>
                    </a>
                </div>
                {/* Playlist Title */}
                <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2'>
                    {/* Songs */}
                    {elementSearchAlbum}
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
    )
}
