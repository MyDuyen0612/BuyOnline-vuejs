import axiosClient from "./axiosClient";

class ProductApi {
    getAll = () => {
        const url = '/account';
        return axiosClient.get(url);
    };
    save = (params) => {
        const url = '/product';
        return axiosClient.post(url, params);
    };
    edit = (params) => {
        const url = '/Authentication';
        return axiosClient.post(url, params);
    }
    remove = (params) => {
        const url = '/profile';
        return axiosClient.post(url, params);
    }
}
const productApi = new ProductApi();
export default productApi;