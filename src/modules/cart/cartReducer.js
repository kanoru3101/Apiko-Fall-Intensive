import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';


const initialState={
    items: [],
};

export default handleActions(
    {
        [constants.ADD]: (state, actions) => ({
            items: [actions.payload].concat(state.items),
        }),
    },
    initialState,
);