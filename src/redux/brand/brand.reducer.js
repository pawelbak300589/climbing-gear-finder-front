import { brandActionTypes } from "./brand.types";

const INITIAL_STATE = {
    loading: false,
    items: null,
    error: null
};

const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandActionTypes.GETALL_REQUEST:
        case brandActionTypes.GETONE_REQUEST:
        case brandActionTypes.CREATE_REQUEST:
        case brandActionTypes.UPDATE_REQUEST:
        case brandActionTypes.DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                items: null,
                error: null
            };
        case brandActionTypes.GETALL_SUCCESS:
        case brandActionTypes.GETONE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: null
            };
        case brandActionTypes.GETALL_FAILURE:
        case brandActionTypes.GETONE_FAILURE:
            return {
                ...state,
                loading: false,
                items: null,
                error: action.payload
            };
            // TODO: case brandActionTypes.CREATE_SUCCESS:
            // TODO: case brandActionTypes.CREATE_FAILURE:
            // TODO: case brandActionTypes.UPDATE_SUCCESS:
            // TODO: case brandActionTypes.UPDATE_FAILURE:
            // TODO: case brandActionTypes.DELETE_SUCCESS:
            // TODO: case brandActionTypes.DELETE_FAILURE:
        default:
            return state;
    }
};

export default brandReducer;