import instance from "./axios"


export const SIGN_UP = async (newUser) => {
    let response = await instance.post('/api/auth/signup', newUser)
    return response.data;
}