import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'http://localhost:8080/',
//     headers: {
//         "Content-Type": "application/json",
//     }
// })

// export default instance;

const instance = (token) => {
    if (!token) {
        token = "";
    }
    const defaultOptions = {
        baseURL: 'http://localhost:8080/',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    let instance = axios.create(defaultOptions);
    instance.interceptors.response.use(
        (response) => response,
        (error) => error.response
    );
    return instance;
};

export default instance;