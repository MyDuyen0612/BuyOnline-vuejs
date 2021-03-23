import axiosClient from "./axiosClient";

class ProductApi {
    getAll = () => {
        const url = '/product?page=0&size=50';
        return axiosClient.get(url);
    };
    save = (params) => {
        const url = '/product';
        return axiosClient.post(url, params);
    };
    edit = (params) => {
        const url = '/product';
        return axiosClient.post(url, params);
    }
    remove = (params) => {
        const url = '/product';
        return axiosClient.post(url, params);
    }
    find = (params) => {
        const url = '/product/' + params;
        return axiosClient.get(url);
    }
}
const productApi = new ProductApi();
export default productApi;