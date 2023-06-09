import instance from "./axios"
import Cookies from 'universal-cookie'

export const FIND_PLAYLIST_BY_NAME = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`playlist/find-by-name?name=${data}`)
    return response.data;
}

export const FIND_PLAYLIST_BY_ID = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`playlist/find-by-id/${data}`)
    return response.data;
}

export const FIND_PLAYLIST_BY_USER_ID = async (data) => {
    let response = await instance(new Cookies().get("token")).get(`playlist/find-by-user-id-paging?userId=${data.userId}&page=${data.page}&size=${data.size}`)
    return response.data;
}

export const CREATE_PLAYLIST = async (data) => {
    let response = await instance(new Cookies().get("token")).post(`playlist/create`, data);
    return response.data;
}

export const UPDATE_PLAYLIST = async (data) => {
    let response = await instance(new Cookies().get("token")).put('playlist/update', data);
    return response.data;
}

export const INSERT_AUDIO_TO_PLAYLIST = async (data) => {
    let response = await instance(new Cookies().get("token")).patch(`playlist/insert-audio-playlist?playlistId=${data.playlistId}&audioId=${data.audioId}`);
    return response.data;
}

export const REMOVE_AUDIO_FROM_PLAYLIST = async (data) => {
    let response = await instance(new Cookies().get("token")).delete(`playlist/delete-audio-from-playlist?playlistId=${data.playlistId}&audioId=${data.audioId}`);
    return response.data;
}

export const DELETE_PLAYLIST_BY_ID = async (data) => {
    let response = await instance(new Cookies().get("token")).delete(`playlist/delete/${data}`);
    return response.data
}

export const FIND_PLAYLIST_BY_ID_ORDER_BY_AUDIO = async (data) => { 
    let response = await instance(new Cookies().get("token")).get(`playlist/find-by-id-order-by-audio-id/${data}`);
    return response.data;
}