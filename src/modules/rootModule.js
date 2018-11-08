import { combineReducers } from 'redux';
import products from './products/productsReducer';
import cart from  './cart/cartReducer';
import entities from './entities/entitiesReducer';
import adminProducts from './adminProducts/adminProductsReducer';




export default combineReducers({
    products,
    adminProducts,
    cart,
    entities,
})