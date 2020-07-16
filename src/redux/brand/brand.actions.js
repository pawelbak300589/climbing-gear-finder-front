import { brandActionTypes } from "./brand.types";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

import { success, error as errorAlert } from "../alerts/alerts.actions";

export const getAll = () => {
    const request = () => ({ type: brandActionTypes.GETALL_REQUEST });
    const successResult = (successData) => ({ type: brandActionTypes.GETALL_SUCCESS, payload: successData });
    const failureResult = (error) => ({ type: brandActionTypes.GETALL_FAILURE, payload: error });

    return async (dispatch, getState) => {
        dispatch(request());

        await backend.get('/brands', {
            params: {
                page: getState().brands.pagination.current_page,
                per_page: getState().brands.pagination.per_page,
                search_phrase: getState().brands.search.phrase,
                search_exact: getState().brands.search.exact,
            },
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const modifiedData = {
                    ...JSON.parse(data),
                    search: getState().brands.search,
                };
                dispatch(successResult(modifiedData));
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
    const successResult = (brand) => ({ type: brandActionTypes.UPDATE_SUCCESS, payload: brand });
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

export const convertToMapping = (id, parentId) => {
    const request = () => ({ type: brandActionTypes.CONVERT_TO_MAPPING_REQUEST });
    const successResult = (parentBrand) => ({
        type: brandActionTypes.CONVERT_TO_MAPPING_SUCCESS,
        payload: parentBrand
    });
    const failureResult = (error) => ({ type: brandActionTypes.CONVERT_TO_MAPPING_FAILURE, payload: error });
    const deleteOldBrandId = (brandId) => ({ type: brandActionTypes.DELETE_SUCCESS, payload: brandId });

    return async (dispatch, getState) => {
        dispatch(request());

        console.log(parentId);

        await backend.post('/brands/convert/' + id + '/to/' + parentId, [], {
            headers: authHeader(getState())
        })
            .then(({ data }) => {
                const parentBrand = JSON.parse(data);
                dispatch(successResult(parentBrand));
                dispatch(deleteOldBrandId(id));
                dispatch(success('Brand Converted!', `Brand successfully converted as a mapping.`));
                history.push('/brands/show/' + parentBrand.id);
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(failureResult(error.message));
                dispatch(errorAlert('Something went wrong!', error.message));
            });
    };
};

export const changeCurrentPage = (page) => {
    return (dispatch) => {
        dispatch({ type: brandActionTypes.CHANGE_CURRENT_PAGE, payload: page });
        dispatch(getAll());
    };
};

export const changeItemsPerPage = (itemsPerPage) => {
    return (dispatch) => {
        dispatch({ type: brandActionTypes.CHANGE_ITEMS_PER_PAGE, payload: itemsPerPage });
        dispatch(getAll());
    };
};

export const updateSearchPhrase = (searchData) => {
    return (dispatch) => {
        dispatch({
            type: brandActionTypes.UPDATE_SEARCH_PHRASE,
            payload: { phrase: searchData.phrase, exact: searchData.exact }
        });
        dispatch(getAll());
    };
};
