import { brandActionTypes } from "./brand.types";

const INITIAL_STATE = {
    loading: false,
    // TODO: think what should be visible for normal user and what for admin
    //  maybe different API calls, or checking user role in the API and returning different data for brands.
    //  that's because brands can be used for normal user view too : like brand select input or similar...
    items: [],
    pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 25,
        total: 0
    },
    error: null
};

const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandActionTypes.GETALL_REQUEST:
        case brandActionTypes.GETONE_REQUEST:
        case brandActionTypes.CREATE_REQUEST:
        case brandActionTypes.UPDATE_REQUEST:
        case brandActionTypes.DELETE_REQUEST:
        case brandActionTypes.BLACKLIST_REQUEST:
        case brandActionTypes.CONVERT_TO_MAPPING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case brandActionTypes.GETALL_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.data,
                pagination: {
                    current_page: action.payload.current_page,
                    last_page: action.payload.last_page,
                    per_page: action.payload.per_page,
                    total: action.payload.total,
                },
                error: null
            };
        case brandActionTypes.GETALL_FAILURE:
        case brandActionTypes.GETONE_FAILURE:
            return {
                ...state,
                loading: false,
                items: [],
                pagination: {
                    current_page: 1,
                    last_page: 1,
                    per_page: 25,
                    total: 0
                },
                error: action.payload
            };
        case brandActionTypes.GETONE_SUCCESS:
        case brandActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
                error: null
            };
        case brandActionTypes.UPDATE_SUCCESS:
        case brandActionTypes.CONVERT_TO_MAPPING_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return { // return updated item
                            ...item,
                            ...action.payload
                        };
                    }
                    return item; // return item without change
                }),
                error: null
            };
        case brandActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter((item) => item.id !== action.payload),
                error: null
            };
        case brandActionTypes.BLACKLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter((item) => item.id !== action.payload.id),
                error: null
            };
        case brandActionTypes.CREATE_FAILURE:
        case brandActionTypes.UPDATE_FAILURE:
        case brandActionTypes.DELETE_FAILURE:
        case brandActionTypes.BLACKLIST_FAILURE:
        case brandActionTypes.CONVERT_TO_MAPPING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case brandActionTypes.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    current_page: action.payload,
                },
            };
        default:
            return state;
    }
};

export default brandReducer;