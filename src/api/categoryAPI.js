import axiosClient from "./axiosClient";

class CategoryApi {
    getAll = () => {
        const url = '/category';
        return axiosClient.get(url);
    };
    save = (params) => {
        const url = '/category';
        return axiosClient.post(url, params);
    };
    edit = (params) => {
        const url = '/category';
        return axiosClient.post(url, params);
    }
    remove = (params) => {
        const url = '/category';
        return axiosClient.post(url, params);
    }
    find = (params) => {
        const url = '/category/' + params;
        return axiosClient.get(url);
    }
}
const categoryApi = new CategoryApi();
export default categoryApi;