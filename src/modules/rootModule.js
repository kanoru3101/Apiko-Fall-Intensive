import { combineReducers } from 'redux';
import products from './products/productsReducer';
import cart from  './cart/cartReducer';




export default combineReducers({
    products,
    cart,
})