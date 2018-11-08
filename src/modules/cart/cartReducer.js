import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';


const initialState={
    items: [],
    isLoading: false,
};

export default handleActions(
    {
        [constants.ADD]: (state, actions) => ({
            ...state,
            items: [actions.payload.id].concat(state.items),
        }),

        [constants.REMOVE]: (state, action) => ({
            ...state,
            items: state.items.filter(id => id !== action.payload),
        }),

        [constants.FETCH_PRODUCTS_START]: (state) => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.FETCH_PRODUCTS_OK]: (state, actions) => {
            debugger;
            return({
                ...state,
                isLoading: false,
                entities: actions.payload.entities.products,
            })
        },
        [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
            ...state,
            isLoading: false,
            error: actions.payload.message,
        }),
    },

    initialState,
);