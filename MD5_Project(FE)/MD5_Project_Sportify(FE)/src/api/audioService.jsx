import instance from "./axios"

export const SEARCH_AUDIO_BY_NAME = async (data) => {
    let response = await instance.get(`/audio/search/${data}`)
    return response.data;
}