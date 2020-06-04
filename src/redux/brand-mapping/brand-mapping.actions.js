import { brandMappingActionTypes } from "./brand-mapping.types";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

import { success, error as errorAlert } from "../alerts/alerts.actions";

export const getAllByBrandId = (brandId) => {
    const request = () => ({ type: brandMappingActionTypes.GETALL_BY_BRAND_REQUEST });
    const successResult = (brands) => ({ type: brandMappingActionTypes.GETALL_BY_BRAND_SUCCESS, payload: brands });
    const failureResult = (error) => ({ type: brandMappingActionTypes.GETALL_BY_BRAND_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands/' + brandId + '/mappings', {
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