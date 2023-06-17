import instance from "./axios"

export const SEARCH_AUDIO_BY_NAME = async (data) => {
    let response = await instance.get(`/audio/searchPaging?search=${data}`)
    return response.data;
}

export const SEARCH_AUDIO_PAGING = async (data) => {
    let response = await instance.get(`/audio/search-by-name-paging?search=${data}`)
    return response.data;
}

export const FIND_AUDIO_BY_ID = async (data) => {
    let response = await instance.get(`/audio/find-by-id/${data}`)
    return response.data;
}