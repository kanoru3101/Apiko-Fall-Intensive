import { createAction } from 'redux-actions';
import * as constants from './productsConstants';

export const fetchProducts = createAction(constants.FETCH_PRODUCTS);