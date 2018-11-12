import axios from 'axios';



let _token = null;


export const removeToken = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = null;
};


export const isAuthenticated = () => !!_token;

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

    window.localStorage.setItem('token', token);

    axios.defaults.headers.common.Authorization = _token ? `Bearer ${_token}` : null;
};

export const initApi = () => {
    const token = localStorage.getItem('token');

    setToken(token);
};

export const products = {
    fetchProducts(){
        return axios.get(`/api/v2/products`);
    },

    fetchProductById(arrId){
        let query = arrId.reduce((acc, item) => `${acc}ids[]=${item}&`, '?');
        console.log('!!!!!', query);
        return axios.get(`/api/v2/products${query}`)
    },

    setProduct(data){
        console.log('setData', data);
        return axios.post(`/api/v2/products`, data);
    },

    updateProduct(id, updateData){
        return axios.patch(`/api/v2/products/${id}`, updateData)
    },

    deleteProduct(id){
        return axios.delete(`/api/v2/products/${id}`)
    }
};

export const Auth = {
    login(body){
        return axios.post(`/api/v2/auth/login`, body);
    },
};

export const User = {
    getCurrent() {
        return axios.get(`/api/v2/users/current`);
    },
};

