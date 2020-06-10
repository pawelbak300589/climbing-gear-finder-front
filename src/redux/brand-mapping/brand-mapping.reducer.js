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
                error: null
            };
        case brandMappingActionTypes.GETALL_BY_BRAND_SUCCESS:
            return {
                ...state,
                loading: false,
                items: { ...state.items, [action.payload.brandId]: action.payload.brandMappings },
                error: null
            };
        case brandMappingActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: [...state.items[action.payload.brandId], action.payload.brandMapping]
                },
                error: null
            };
        case brandMappingActionTypes.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].map((mapping) => {
                        if (mapping.id === action.payload.brandMapping.id) {
                            return { // return updated mapping
                                ...mapping,
                                ...action.payload.brandMapping
                            };
                        }
                        return mapping; // return mapping without change
                    }),
                },
                error: null
            };
        case brandMappingActionTypes.DELETE_SUCCESS:
            console.log(state.items[action.payload.brandId]); // TODO: problem with not removing removed mapping from redux store
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].filter((mapping) => mapping.id !== action.payload.mappingId)
                },
                error: null
            };
        case brandMappingActionTypes.GETALL_BY_BRAND_FAILURE:
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