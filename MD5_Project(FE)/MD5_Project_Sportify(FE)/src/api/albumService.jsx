import instance from "./axios"


export const FIND_ALL_ALBUMS = async () => {
    let response = await instance.get("/album/find-all")
    return response.data;
}

export const FIND_ALBUM_BY_ID = async (id) => {
    let response = await instance.get(`/album/find-by-id/${id}`)
    return response.data;
}

export const SEARCH_ALBUM_BY_NAME = async (search) => {
    let response = await instance.get(`/album/search/${search}`)
    return response.data;
}