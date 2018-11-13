import * as Api from '../../api/Api';
import * as actions from './appActions';


/*
export function init() {
    return async (dispatch) => {
       try {
           debugger;
           Api.initApi();

           const user = await Api.User.getCurrent();
            console.log(user);
           //add it to redux
       }
       catch (e) {
           Api.removeToken(undefined);
       }
    }
}
*/
export const init = () => async (dispatch, setState) => {
        try {

           const {token} = setState().app;
           Api.initApi(token);

           const user = await Api.User.getCurrent();
            debugger;
           dispatch(actions.singInOk({
               token,
               user,
           }));

        }catch (e) {
            Api.removeToken(undefined);
            dispatch(actions.singInError({
                token: null,
            }));
        }
};
export function setToken(token, user) {
    return (dispatch) => {

        Api.setToken(token);

        dispatch(actions.singInOk({
            token,
            user,
        }));

    }

}

export const removeToken = (token) => async (dispatch) => {

    Api.removeToken(undefined);
    dispatch(actions.removeToken({
       token: null,
       user: null,
    }))

};