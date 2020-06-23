import { brandUrlsActionTypes } from "./brand-urls.types";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

import { success, error as errorAlert } from "../alerts/alerts.actions";

export const getAllByBrandId = (brandId) => {
    const request = () => ({ type: brandUrlsActionTypes.GETALL_BY_BRAND_REQUEST });
    const successResult = (brandUrls) => ({
        type: brandUrlsActionTypes.GETALL_BY_BRAND_SUCCESS,
        payload: { brandId, brandUrls }
    });
    const failureResult = (error) => ({ type: brandUrlsActionTypes.GETALL_BY_BRAND_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands/' + brandId + '/urls', {
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

export const setAsMain = (brandId, urlId) => {
    const request = () => ({ type: brandUrlsActionTypes.SET_AS_MAIN_REQUEST });
    const successResult = () => ({
        type: brandUrlsActionTypes.SET_AS_MAIN_SUCCESS,
        payload: { brandId, urlId }
    });
    const failureResult = (error) => ({ type: brandUrlsActionTypes.SET_AS_MAIN_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands/' + brandId + '/urls/' + urlId + '/main', [], {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                dispatch(successResult());
                dispatch(success('Main Url Set!', `Url successfully set as main.`));
                history.push('/brands/show/' + brandId);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const create = (brandId, formData) => {
    const request = () => ({ type: brandUrlsActionTypes.CREATE_REQUEST });
    const successResult = (brandUrl) => ({
        type: brandUrlsActionTypes.CREATE_SUCCESS,
        payload: { brandId, brandUrl }
    });
    const failureResult = (error) => ({ type: brandUrlsActionTypes.CREATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands/' + brandId + '/urls', formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandUrl = JSON.parse(data);
                dispatch(successResult(brandUrl));
                dispatch(success('Brand Url Created!', 'New brand url is successfully created.'));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const update = (brandId, urlId, formData) => {
    const request = () => ({ type: brandUrlsActionTypes.UPDATE_REQUEST });
    const successResult = (brandUrl) => ({
        type: brandUrlsActionTypes.UPDATE_SUCCESS,
        payload: { brandId, brandUrl }
    });
    const failureResult = (error) => ({ type: brandUrlsActionTypes.UPDATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.patch('/brands/' + brandId + '/urls/' + urlId, formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandUrl = JSON.parse(data);
                dispatch(successResult(brandUrl));
                dispatch(success('Url Updated!', `Brand's url was successfully updated.`));
                history.push('/brands/show/' + brandId);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const remove = (brandId, urlId) => {
    const request = () => ({ type: brandUrlsActionTypes.DELETE_REQUEST });
    const successResult = (brandUrls) => ({
        type: brandUrlsActionTypes.DELETE_SUCCESS,
        payload: { brandId, brandUrls }
    });
    const failureResult = (error) => ({ type: brandUrlsActionTypes.DELETE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.delete('/brands/' + brandId + '/urls/' + urlId, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandUrls = JSON.parse(data);
                dispatch(successResult(brandUrls));
                dispatch(success('Url Removed!', `Brand's url successfully removed.`));
                history.push('/brands/show/' + brandId);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};