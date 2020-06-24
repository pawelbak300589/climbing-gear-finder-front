import { websiteActionTypes } from "./website.types";
import backend from "../../apis/backend";
import { authHeader } from "../../helpers";

import { error as errorAlert } from "../alerts/alerts.actions";

export const getAll = () => {
    const request = () => ({ type: websiteActionTypes.GETALL_REQUEST });
    const successResult = (websites) => ({ type: websiteActionTypes.GETALL_SUCCESS, payload: websites });
    const failureResult = (error) => ({ type: websiteActionTypes.GETALL_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/websites', {
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