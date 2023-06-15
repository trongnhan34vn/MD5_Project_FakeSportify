import instance from "./axios"

export const GET_ALL_CATEGORY = async () => {
    let response = await instance.get('/category/find-all')
    return response.data;
}

export const FIND_CATEGORY_BY_ID = async (id) => {
    let response = await instance.get(`/category/find-by-id/${id}`)
    return response.data;
}