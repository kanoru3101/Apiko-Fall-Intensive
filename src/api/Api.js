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

    fetchProduct(id){
        console.log('id', id[0]);
        return axios.get(`/api/v1/products/${id[0]}`)
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
