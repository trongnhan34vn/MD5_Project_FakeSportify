import instance from "./axios"
import Cookies from 'universal-cookie'


export const SEARCH_AUDIO_BY_NAME = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`/audio/searchPaging?search=${data}`)
    return response.data;
}

export const SEARCH_AUDIO_PAGING = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`/audio/search-by-name-paging?search=${data}`)
    return response.data;
}

export const FIND_AUDIO_BY_ID = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`/audio/find-by-id/${data}`)
    return response.data;
}

export const FIND_AUDIO_BY_ARTIST = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`/audio/find-by-artist/${data}`)
    return response.data;
}

export const FIND_AUDIO_BY_CATEGORY_ARTIST = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`/audio/find-by-artist-and-category?categoryId=${data.categoryId}&artistId=${data.artistId}`)
    return response.data;
}

export const FIND_FAVORITE_CURRENT_USER = async () => {
    let response = await instance(new Cookies().get("token")).get('/audio/find-favorite-audio');
    return response.data
}