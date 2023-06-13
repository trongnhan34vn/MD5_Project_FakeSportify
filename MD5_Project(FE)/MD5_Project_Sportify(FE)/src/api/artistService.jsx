import instance from "./axios"




export const SEARCH_ARTIST_BY_NAME = async (search) => {
    let response = await instance.get(`/artist/search/${search}`)
    return response.data;
}