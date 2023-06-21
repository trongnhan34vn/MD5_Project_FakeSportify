import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { iconPause_TrackItem } from '../../../../assets/icon/icon'
import { albumSlice } from '../../../../redux/selector'
import { useNavigate } from 'react-router-dom'
import * as actions from '../../../../redux/actions'

export default function AlbumSearch() {
  const albumSearch = useSelector(albumSlice)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleToAlbumAudio = (id) => {
    dispatch(actions.findAlbumById(id))
    navigate('/search-result', {state: {result: 'album'}});
}



  const elementSearchAlbum = albumSearch.search.map((item) => {
    return <div key={item.id} className='group relative  album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
        <button className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
            {iconPause_TrackItem}
        </button>
        <button onClick={() => handleToAlbumAudio(item.id)} className='block w-full album-wrap p-4'>
            <div className='album-img flex flex-col mb-4 relative'>
                <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={item.audios[0].image} alt="" />
            </div>
            <div className='album-content w-full text-left overflow-hidden text-[#fff]'>
                <h3 className='font-CircularMedium text-base mb-1 truncate'>{item.name}</h3>
            </div>
        </button>
    </div>
})
  return (
    <div className='content w-full'>
      {/* List Playlists - Log Out */}
      <div className='list-playlists pt-[120px] h-screen ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
        {/* Playlists - Your Playlist */}
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
      {/* List Playlists - Log Out */}
    </div>
  )
}
