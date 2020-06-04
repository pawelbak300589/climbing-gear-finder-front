import { brandActionTypes } from "./brand.types";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

import { success, error as errorAlert } from "../alerts/alerts.actions";

export const getAll = () => {
    const request = () => ({ type: brandActionTypes.GETALL_REQUEST });
    const successResult = (brands) => ({ type: brandActionTypes.GETALL_SUCCESS, payload: brands });
    const failureResult = (error) => ({ type: brandActionTypes.GETALL_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands', {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                dispatch(successResult(JSON.parse(data)));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const getOne = (brandId) => {
    const request = () => ({ type: brandActionTypes.GETONE_REQUEST });
    const successResult = (brand) => ({ type: brandActionTypes.GETONE_SUCCESS, payload: brand });
    const failureResult = (error) => ({ type: brandActionTypes.GETONE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands/' + brandId, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                console.log(JSON.parse(data));
                dispatch(successResult(JSON.parse(data)));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const create = (formData) => {
    const request = () => ({ type: brandActionTypes.CREATE_REQUEST });
    const successResult = (brand) => ({ type: brandActionTypes.CREATE_SUCCESS, payload: brand });
    const failureResult = (error) => ({ type: brandActionTypes.CREATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands', formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brand = JSON.parse(data);
                dispatch(successResult(brand));
                dispatch(success('Brand Created!', 'New brand is successfully created.'));
                history.push('/brands/show/' + brand.id);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const update = (id, formData) => {
    const request = () => ({ type: brandActionTypes.UPDATE_REQUEST });
    const successResult = (brandId) => ({ type: brandActionTypes.UPDATE_SUCCESS, payload: brandId });
    const failureResult = (error) => ({ type: brandActionTypes.UPDATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.patch('/brands/' + id, formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brand = JSON.parse(data);
                dispatch(successResult(brand));
                dispatch(success('Brand Updated!', `Brand was successfully updated.`));
                history.push('/brands/show/' + brand.id);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const remove = (id) => {
    const request = () => ({ type: brandActionTypes.DELETE_REQUEST });
    const successResult = (brandId) => ({ type: brandActionTypes.DELETE_SUCCESS, payload: brandId });
    const failureResult = (error) => ({ type: brandActionTypes.DELETE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.delete('/brands/' + id, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                dispatch(successResult(Number(data)));
                dispatch(success('Brand Removed!', `Brand successfully removed.`));
                history.push('/brands');
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const blacklist = (id) => {
    const request = () => ({ type: brandActionTypes.BLACKLIST_REQUEST });
    const successResult = (brand) => ({ type: brandActionTypes.BLACKLIST_SUCCESS, payload: brand });
    const failureResult = (error) => ({ type: brandActionTypes.BLACKLIST_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands/blacklist/' + id, [], {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                dispatch(successResult(JSON.parse(data)));
                dispatch(success('Brand Blacklisted!', `Brand successfully blacklisted.`));
                history.push('/brands');
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};