// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs`


const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {

        'content-type': 'application/json',


    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {

    if (localStorage.getItem('jwt')) {
        if (localStorage.getItem('date') == Date.now() || !localStorage.getItem('date')) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('date')
        } else {
            config.headers.Authorization = 'Bearer ' + localStorage.getItem('jwt');
        }
    }
    return config;
})
axiosClient.interceptors.response.use((response) => {

    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error.response.data;
});
export default axiosClient;