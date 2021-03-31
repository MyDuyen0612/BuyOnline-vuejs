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

    profile = (params) => {
        const url = '/profile';
        return axiosClient.post(url, params);
    }
}
const userApi = new UserApi();
export default userApi;