import { brandMappingActionTypes } from "./brand-mapping.types";

const INITIAL_STATE = {
    loading: false,
    items: {},
    error: null
};

const brandMappingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandMappingActionTypes.GETALL_BY_BRAND_REQUEST:
        case brandMappingActionTypes.CREATE_REQUEST:
        case brandMappingActionTypes.UPDATE_REQUEST:
        case brandMappingActionTypes.DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                // items: [],
                error: null
            };
        case brandMappingActionTypes.GETALL_BY_BRAND_SUCCESS:
            return {
                ...state,
                loading: false,
                items: { ...state.items, [action.payload.brandId]: action.payload.brandMappings },
                // items: action.payload.brandMappings,
                error: null
            };
        case brandMappingActionTypes.GETALL_BY_BRAND_FAILURE:
            return {
                ...state,
                loading: false,
                // items: [],
                error: action.payload
            };
        case brandMappingActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
                error: null
            };
        case brandMappingActionTypes.UPDATE_SUCCESS:
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
        case brandMappingActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter((item) => item.id !== action.payload),
                error: null
            };
        case brandMappingActionTypes.CREATE_FAILURE:
        case brandMappingActionTypes.UPDATE_FAILURE:
        case brandMappingActionTypes.DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default brandMappingReducer;