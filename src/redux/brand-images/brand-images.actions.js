import { brandImagesActionTypes } from "./brand-images.types";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

import { success, error as errorAlert } from "../alerts/alerts.actions";

export const getAllByBrandId = (brandId) => {
    const request = () => ({ type: brandImagesActionTypes.GETALL_BY_BRAND_REQUEST });
    const successResult = (brandImages) => ({
        type: brandImagesActionTypes.GETALL_BY_BRAND_SUCCESS,
        payload: { brandId, brandImages }
    });
    const failureResult = (error) => ({ type: brandImagesActionTypes.GETALL_BY_BRAND_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands/' + brandId + '/images', {
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

export const setAsMain = (brandId, imageId) => {
    const request = () => ({ type: brandImagesActionTypes.SET_AS_MAIN_REQUEST });
    const successResult = () => ({
        type: brandImagesActionTypes.SET_AS_MAIN_SUCCESS,
        payload: { brandId, imageId }
    });
    const failureResult = (error) => ({ type: brandImagesActionTypes.SET_AS_MAIN_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands/' + brandId + '/images/' + imageId + '/main', [], {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                dispatch(successResult());
                dispatch(success('Main Image Set!', `Image successfully set as main.`));
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
    const request = () => ({ type: brandImagesActionTypes.CREATE_REQUEST });
    const successResult = (brandImage) => ({
        type: brandImagesActionTypes.CREATE_SUCCESS,
        payload: { brandId, brandImage }
    });
    const failureResult = (error) => ({ type: brandImagesActionTypes.CREATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands/' + brandId + '/images', formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandImage = JSON.parse(data);
                dispatch(successResult(brandImage));
                dispatch(success('Brand Image Created!', 'New brand image is successfully created.'));
            }) // TODO:
            .catch((error) => {
                console.log(error);
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const update = (brandId, imageId, formData) => {
    const request = () => ({ type: brandImagesActionTypes.UPDATE_REQUEST });
    const successResult = (brandImage) => ({
        type: brandImagesActionTypes.UPDATE_SUCCESS,
        payload: { brandId, brandImage }
    });
    const failureResult = (error) => ({ type: brandImagesActionTypes.UPDATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.patch('/brands/' + brandId + '/images/' + imageId, formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandImage = JSON.parse(data);
                dispatch(successResult(brandImage));
                dispatch(success('Image Updated!', `Brand's image was successfully updated.`));
                history.push('/brands/show/' + brandId);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const remove = (brandId, imageId) => {
    const request = () => ({ type: brandImagesActionTypes.DELETE_REQUEST });
    const successResult = (brandImages) => ({
        type: brandImagesActionTypes.DELETE_SUCCESS,
        payload: { brandId, brandImages }
    });
    const failureResult = (error) => ({ type: brandImagesActionTypes.DELETE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.delete('/brands/' + brandId + '/images/' + imageId, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandImages = JSON.parse(data);
                dispatch(successResult(brandImages));
                dispatch(success('Image Removed!', `Brand's image successfully removed.`));
                history.push('/brands/show/' + brandId);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};