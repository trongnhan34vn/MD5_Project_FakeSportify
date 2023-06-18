import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register_Login/Register'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Register_Login/Login'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import SearchPage from './components/SearchPage/SearchPage'
import Playlist from './components/Playlist/Playlist'
import SongSearch from './components/SearchPage/items/OnSearchItem/SongSearch'
import AlbumSearch from './components/SearchPage/items/OnSearchItem/AlbumSearch'
import ArtistSearch from './components/SearchPage/items/OnSearchItem/ArtistSearch'
import CategorySearch from './components/SearchPage/items/NonSearchItem/CategorySearch'
import FormPlaylist from './components/FormPlaylist/FormPlaylist'
import YourLibrary from './components/YourLibrary/YourLibrary'
import SearchPlaylistResult from './components/Playlist/SearchPlaylistResult'
import ResultSearchCategory from './components/Playlist/ResultSearchCategory'


function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} >
            <Route path="songs" element={<SongSearch/> } />
            <Route path="artist" element={<ArtistSearch/> } />
            <Route path="albums" element={<AlbumSearch/> } />
            <Route path="category" element={<CategorySearch/> } />
        </Route>
        <Route path="/search-result-category" element={<ResultSearchCategory /> } />
        <Route path="/search-result" element={<SearchPlaylistResult /> } />
        <Route path="/your-library" element={<YourLibrary />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/form-playlist" element={<FormPlaylist />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
