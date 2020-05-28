import authActionTypes from "./auth.types";
import backend from "../../apis/backend";
import history from "../../history";

export const login = (userLoginCredentials) => {
    const request = () => ({ type: authActionTypes.LOGIN_REQUEST });
    const success = (user) => ({ type: authActionTypes.LOGIN_SUCCESS, payload: user });
    const failure = (error) => ({ type: authActionTypes.LOGIN_FAILURE, payload: error });

    return async dispatch => {
        dispatch(request());

        await backend.post('/auth/login', userLoginCredentials)
            .then(({ data }) => {
                console.log(data);
                dispatch(success(data));
                history.push('/dashboard');
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failure(error.message));
            });
    };
};

export const logout = () => {

    return async (dispatch, getState) => {
        await backend.get('/auth/logout', {
            headers: {
                Authorization: getState().auth.currentUser.token_type + ' ' + getState().auth.currentUser.access_token
            }
        })
            .then(({ data }) => {
                dispatch({ type: authActionTypes.LOGIN_REQUEST, payload: data });
                history.push('/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
};

export const register = (userRegisterCredentials) => {
    const request = () => ({ type: authActionTypes.REGISTER_REQUEST });
    const success = (user) => ({ type: authActionTypes.REGISTER_SUCCESS, payload: user });
    const failure = (error) => ({ type: authActionTypes.REGISTER_FAILURE, payload: error });

    return async dispatch => {
        dispatch(request());

        await backend.post('/auth/register', userRegisterCredentials)
            .then(({ data }) => {
                console.log(data);
                dispatch(success(data));
                history.push('/');
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failure(error.message));
            });
    };
};