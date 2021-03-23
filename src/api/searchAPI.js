import axiosClient from "./axiosClient";

class SearchAPI {

    findProduct = (params) => {
        const url = '/search/product/' + params;
        console.log(url);
        return axiosClient.get(url);
    };

}
const searchApi = new SearchAPI();
export default searchApi;