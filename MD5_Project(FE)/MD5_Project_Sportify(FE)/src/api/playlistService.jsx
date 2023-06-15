import instance from "./axios"


export const FIND_PLAYLIST_BY_NAME = async (data) => {
    let response = await instance.get(`playlist/find-by-name?name=${data}`)
    return response.data;
}

export const FIND_PLAYLIST_BY_ID = async (data) => {
    let response = await instance.get(`playlist/find-by-id/${data}`)
    return response.data;
}