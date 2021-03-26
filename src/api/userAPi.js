import axiosClient from "./axiosClient";

class UserApi {
    getAll = () => {
        const url = '/account';
        return axiosClient.get(url);
    };
    register = (params) => {
        const url = '/dangky';
        return axiosClient.post(url, params);
    };
    login = (params) => {
        const url = '/Authentication';
        return axiosClient.post(url, params);
    }
    find = (params) => {
        const url = '/product/' + params;
        return axiosClient.get(url);
    }
}
const userApi = new UserApi();
export default userApi;