import { handleActions } from 'redux-actions';
import * as constants from './productsConstants';


const initialState={
    ids: [],
    isLoading: false,
    error: null,
};

export default handleActions(
    {
    [constants.FETCH_PRODUCTS_START]: (state) => ({
        ...state,
        isLoading: true,
        error: null,
    }),
    [constants.FETCH_PRODUCTS_OK]: (state, actions) => ({
        ...state,
        isLoading: false,
        ids: actions.payload.ids,
    }),
    [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
        ...state,
        isLoading: false,
        error: actions.payload.message,
    }),
    },
    initialState,
);