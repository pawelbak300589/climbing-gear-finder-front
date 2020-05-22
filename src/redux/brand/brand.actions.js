import { brandActionTypes } from "./brand.types";
import backend from "../../apis/backend";
import history from "../../history";

export const getAll = () => {
    const request = () => ({ type: brandActionTypes.GETALL_REQUEST });
    const success = (brands) => ({ type: brandActionTypes.GETALL_SUCCESS, payload: brands });
    const failure = (error) => ({ type: brandActionTypes.GETALL_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        backend.get('/brands', {
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