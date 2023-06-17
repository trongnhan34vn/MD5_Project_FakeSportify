import instance from "./axios"


export const FIND_PLAYLIST_BY_NAME = async (data) => {
    let response = await instance.get(`playlist/find-by-name?name=${data}`)
    return response.data;
}

export const FIND_PLAYLIST_BY_ID = async (data) => {
    let response = await instance.get(`playlist/find-by-id/${data}`)
    return response.data;
}

export const FIND_PLAYLIST_BY_USER_ID = async (data) => {
    let response = await instance.get(`playlist/find-by-user-id/${data}`)
    return response.data;
}

export const CREATE_PLAYLIST = async (data) => {
    let response = await instance.post(`playlist/create`, data);
    return response.data;
} 

export const UPDATE_PLAYLIST = async (data) => {
    let response = await instance.put('playlist/update', data);
    return response.data;
}