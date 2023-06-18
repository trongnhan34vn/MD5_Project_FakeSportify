import instance from "./axios"
import Cookies from 'universal-cookie'

export const SEARCH_ARTIST_BY_NAME = async (search) => {
    let response = await instance(new Cookies().get("token")).get(`/artist/searchPaging?search=${search}`)
    return response.data;
}

export const SEARCH_ARTIST_BY_CATEGORY = async (id) => {
    let response = await instance(new Cookies().get("token")).get(`/artist/find-artist-by-category?categoryId=${id}`)
    return response.data;
}

