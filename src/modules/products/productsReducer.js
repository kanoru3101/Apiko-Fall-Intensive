import { handleActions } from 'redux-actions';
import * as constants from './productsConstants';


const initialState={
    products: [],
    isLoading: false,
};

export default handleActions(
    {
    [constants.FETCH_PRODUCTS]: (state, actions) => ({
        products: actions.payload,
    }),
    },
    initialState,
);