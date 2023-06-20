import instance from "./axios"
import Cookies from 'universal-cookie'


export const SIGN_UP = async (newUser) => {
    let response = await instance(new Cookies().get("token")).post('/api/auth/signup', newUser)
    return response.data;
}

export const SIGN_IN = async (user) => {
    let response = await instance(new Cookies().get("token")).post('/api/auth/signin', user)
    return response.data;
}

export const LIKE_AUDIO = async (audioId) => {
    let response = await instance(new Cookies().get("token")).post(`/audio/like-audio?audioId=${audioId}`);
    return response.data;
}