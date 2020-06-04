import { brandMappingActionTypes } from "./brand-mapping.types";

const INITIAL_STATE = {
    loading: false,
    mappings: [],
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
                error: null
            };
        case brandMappingActionTypes.GETALL_BY_BRAND_SUCCESS:
            return {
                ...state,
                loading: false,
                mappings: action.payload,
                error: null
            };
        case brandMappingActionTypes.GETALL_BY_BRAND_FAILURE:
            return {
                ...state,
                loading: false,
                mappings: [],
                error: action.payload
            };
        case brandMappingActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                mappings: [...state.mappings, action.payload],
                error: null
            };
        case brandMappingActionTypes.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                mappings: state.mappings.map((mapping) => {
                    if (mapping.id === action.payload.id) {
                        return { // return updated item
                            ...mapping,
                            ...action.payload
                        };
                    }
                    return mapping; // return item without change
                }),
                error: null
            };
        case brandMappingActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                mappings: state.mappings.filter((mapping) => mapping.id !== action.payload),
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