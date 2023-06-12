import instance from "./axios"

export const GET_ALL_CATEGORY = async () => {
    let response = await instance.get('/category/find-all')
    return response.data;
}