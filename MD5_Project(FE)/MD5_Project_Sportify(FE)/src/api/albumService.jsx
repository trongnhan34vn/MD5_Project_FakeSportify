import instance from "./axios"
import Cookies from 'universal-cookie';

export const FIND_ALL_ALBUMS = async () => {
    let response = await instance(new Cookies().get("token")).get("/album/find-all")
    return response.data;
}

export const FIND_ALBUM_BY_ID = async (id) => {
    let response = await instance(new Cookies().get("token")).get(`/album/find-by-id/${id}`)
    return response.data;
}

export const SEARCH_ALBUM_BY_NAME = async (search) => {
    let response = await instance(new Cookies().get("token")).get(`/album/searchPaging?search=${search}`)
    return response.data;
}