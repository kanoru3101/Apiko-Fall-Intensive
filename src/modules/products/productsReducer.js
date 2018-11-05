import { handleActions } from 'redux-actions';
import * as constants from './productsConstants';


const initialState={
    products: [],
    isLoading: false,
    error: null,
};

export default handleActions(
    {
    [constants.FETCH_PRODUCTS_START]: () => ({
        isLoading: true,
        error: null,
    }),
    [constants.FETCH_PRODUCTS_OK]: (state, actions) => ({
        isLoading: false,
        products: actions.payload,
    }),
    [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
        isLoading: false,
        error: actions.payload.message,
    }),
    },
    initialState,
);