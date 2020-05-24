import { brandActionTypes } from "./brand.types";

const INITIAL_STATE = {
    loading: false,
    items: [],
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
        case brandActionTypes.MOVE_TO_MAPPING_REQUEST:
            return {
                ...state,
                loading: true,
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
                items: [],
                error: action.payload
            };
        case brandActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
                error: null
            };
        case brandActionTypes.UPDATE_SUCCESS:
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
        case brandActionTypes.CREATE_FAILURE:
        case brandActionTypes.UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        // TODO: case brandActionTypes.DELETE_SUCCESS:
        // TODO: case brandActionTypes.DELETE_FAILURE:
        // TODO:
        // TODO: case brandActionTypes.BLACKLIST_SUCCESS:
        // TODO: case brandActionTypes.BLACKLIST_FAILURE:
        // TODO:
        // TODO: case brandActionTypes.MOVE_TO_MAPPING_SUCCESS:
        // TODO: case brandActionTypes.MOVE_TO_MAPPING_FAILURE:
        default:
            return state;
    }
};

export default brandReducer;