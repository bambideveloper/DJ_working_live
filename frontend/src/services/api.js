import axios from 'axios';

import store from "@store";

let axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    /*headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }*/
});

axiosInstance.interceptors.request.use(async (config) => {
    const { token } = store.getState().auth;

    if (token !== null) {
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
});

export const setAuthToken = token => {
    axiosInstance.defaults.headers.common['Authorization'] = token;
};

export const sendRequest = ({ url, method, data }) => {
    return new Promise((resolve, reject) => {
        axiosInstance({
            method,
            url,
            data: data || {}
        })
        .then(response => {
            resolve(response.data)
        })
        .catch(err => {
            reject(err.response)
        });
    });
}

export default axiosInstance;