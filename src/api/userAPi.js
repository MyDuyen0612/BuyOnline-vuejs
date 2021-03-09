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
}
const userApi = new UserApi();
export default userApi;