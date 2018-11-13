import { handleActions } from 'redux-actions';
import * as constants from './appConstants';

const initialState = {
    token: null,
    user: {},
    error: null,
};


export default handleActions(
    {
        [constants.SING_IN_START]: (state) => ({
            ...state,
        }),
        [constants.SING_IN_OK]: (state, actions) => ({

                ...state,
                token: actions.payload.token,
                user: actions.payload.user,
        }),
        [constants.SING_IN_ERROR]: (state, actions) => ({
            ...state,
            error: actions.payload.error
        }),
        [constants.REMOVE_TOKEN]: (state, actions) => {

            return({
                ...state,
                user: actions.payload.user,
                token: actions.payload.token,
            })
        },
    },
    initialState,
);