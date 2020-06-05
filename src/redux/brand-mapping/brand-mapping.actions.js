import { brandMappingActionTypes } from "./brand-mapping.types";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

import { success, error as errorAlert } from "../alerts/alerts.actions";

export const getAllByBrandId = (brandId) => {
    const request = () => ({ type: brandMappingActionTypes.GETALL_BY_BRAND_REQUEST });
    const successResult = (brandMappings) => ({
        type: brandMappingActionTypes.GETALL_BY_BRAND_SUCCESS,
        payload: { brandId, brandMappings }
    });
    const failureResult = (error) => ({ type: brandMappingActionTypes.GETALL_BY_BRAND_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands/' + brandId + '/mappings', {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                // console.log(JSON.parse(data));
                dispatch(successResult(JSON.parse(data)));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const create = (brandId, formData) => {
    const request = () => ({ type: brandMappingActionTypes.CREATE_REQUEST });
    const successResult = (brandMapping) => ({
        type: brandMappingActionTypes.CREATE_SUCCESS,
        payload: { brandId, brandMapping }
    });
    const failureResult = (error) => ({ type: brandMappingActionTypes.CREATE_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.post('/brands/' + brandId + '/mappings', formData, {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const brandMapping = JSON.parse(data);
                dispatch(successResult(brandMapping));
                dispatch(success('Brand Mapping Created!', 'New brand mapping is successfully created.'));
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};