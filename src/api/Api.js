import axios from 'axios';



let _token = null;

/*
* Use fuc.....
*
* @params
* token {sting} -
* @return
*
*
* */
export const setToken = (token) => {
    _token = token;
    axios.defaults.headers.Authorization = _token ? `Bearer ${_token}` : null;
};


export const products = {
    fetchProducts(){
        return axios.get(`/api/v1/products`);
    },

    fetchProductById(arrId){
        let query = arrId.reduce((acc, item) => `${acc}ids[]=${item}&`, '?');
        console.log('!!!!!', query);
        return axios.get(`/api/v1/products${query}`)
    },

    setProduct(data){
        console.log('setData', data);
        return axios.post(`/api/v1/products`, data);
    },

    updateProduct(id, updateData){
        return axios.patch(`/api/v1/products/${id}`, updateData)
    },

    deleteProduct(id){
        return axios.delete(`/api/v1/products/${id}`)
    }
};
