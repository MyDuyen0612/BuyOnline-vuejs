import axiosClient from "./axiosClient";

class ProductApi {
    getAll = () => {
        const url = '/product?page=0&size=50';
        return axiosClient.get(url);
    };
    save = (params) => {
        const url = '/product';
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }
        return axiosClient.post(url, params, config);
    };
    edit = (params) => {
        const url = '/product';
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }
        return axiosClient.put(url, params, config);
    }
    remove = (params) => {
        const url = '/product';
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }
        return axiosClient.delete(url, params, config);
    }
    find = (params) => {
        const url = '/product/' + params;
        return axiosClient.get(url);
    }
    findCategory = (params) => {
        const url = '/product/category/' + params;
        return axiosClient.get(url);
    }
}
const productApi = new ProductApi();
export default productApi;