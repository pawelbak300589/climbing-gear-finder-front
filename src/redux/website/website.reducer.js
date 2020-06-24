import { websiteActionTypes } from "./website.types";

const INITIAL_STATE = {
    loading: false,
    items: [],
    error: null
};

const websiteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case websiteActionTypes.GETALL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case websiteActionTypes.GETALL_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: null
            };
        case websiteActionTypes.GETALL_FAILURE:
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default websiteReducer;