import axiosClient from "./axiosClient";

class CategoryApi {
    getAll = () => {
        const url = '/category';
        return axiosClient.get(url);
    };
    save = (params) => {
        const url = '/category';
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }
       
        return axiosClient.post(url, params,config);
    };
    edit = (params) => {
        const url = '/category';
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }
        return axiosClient.put(url, params, config);
    }
    remove = (params) => {
        const url = '/category'+ params;
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }
        return axiosClient.delete(url, config);
    }
    find = (params) => {
        const url = '/category/' + params;
        return axiosClient.get(url);
    }
}
const categoryApi = new CategoryApi();
export default categoryApi;