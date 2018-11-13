import { combineReducers } from 'redux';
import products from './products/productsReducer';
import cart from  './cart/cartReducer';
import entities from './entities/entitiesReducer';
import adminProducts from './adminProducts/adminProductsReducer';
import app from './app/appReducer';


export default combineReducers({
    products,
    adminProducts,
    cart,
    entities,
    app
})
