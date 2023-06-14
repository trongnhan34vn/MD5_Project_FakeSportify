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
        </Route>
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
