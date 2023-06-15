import instance from "./axios"


export const SEARCH_ARTIST_BY_NAME = async (search) => {
    let response = await instance.get(`/artist/searchPaging?search=${search}`)
    return response.data;
}

export const SEARCH_ARTIST_BY_CATEGORY = async (id) => {
    let response = await instance.get(`/artist/find-artist-by-category?categoryId=${id}`)
    return response.data;
}

