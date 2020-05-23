import { brandActionTypes } from "./brand.types";
import backend from "../../apis/backend";
import history from "../../history";

export const getAll = () => {
    const request = () => ({ type: brandActionTypes.GETALL_REQUEST });
    const success = (brands) => ({ type: brandActionTypes.GETALL_SUCCESS, payload: brands });
    const failure = (error) => ({ type: brandActionTypes.GETALL_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands', {
            headers: {
                Authorization: getState().auth.currentUser.token_type + ' ' + getState().auth.currentUser.access_token
            }
        })
            .then(({ data }) => {
                dispatch(success(JSON.parse(data)));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failure(error.message));
            });
    };
};

export const getOne = (brandId) => {
    const request = () => ({ type: brandActionTypes.GETONE_REQUEST });
    const success = (brand) => ({ type: brandActionTypes.GETONE_SUCCESS, payload: brand });
    const failure = (error) => ({ type: brandActionTypes.GETONE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands/' + brandId, {
            headers: {
                Authorization: getState().auth.currentUser.token_type + ' ' + getState().auth.currentUser.access_token
            }
        })
            .then(({ data }) => {
                dispatch(success(JSON.parse(data)));
                history.push('/brands');
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failure(error.message));
            });
    };
};

export const create = (formData) => {
    const request = () => ({ type: brandActionTypes.CREATE_REQUEST });
    const success = (brand) => ({ type: brandActionTypes.CREATE_SUCCESS, payload: brand });
    const failure = (error) => ({ type: brandActionTypes.CREATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands', formData, {
            headers: {
                Authorization: getState().auth.currentUser.token_type + ' ' + getState().auth.currentUser.access_token
            }
        })
            .then(({ data }) => {
                dispatch(success(JSON.parse(data)));
                history.push('/brands');
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failure(error.message));
            });
    };
};