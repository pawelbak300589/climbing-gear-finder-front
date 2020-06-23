import { brandUrlsActionTypes } from "./brand-urls.types";

const INITIAL_STATE = {
    loading: false,
    items: {},
    error: null
};

const brandUrlsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandUrlsActionTypes.GETALL_BY_BRAND_REQUEST:
        case brandUrlsActionTypes.CREATE_REQUEST:
        case brandUrlsActionTypes.UPDATE_REQUEST:
        case brandUrlsActionTypes.DELETE_REQUEST:
        case brandUrlsActionTypes.SET_AS_MAIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case brandUrlsActionTypes.GETALL_BY_BRAND_SUCCESS:
        case brandUrlsActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: { ...state.items, [action.payload.brandId]: action.payload.brandUrls },
                error: null
            };
        case brandUrlsActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: [...state.items[action.payload.brandId], action.payload.brandUrl]
                },
                error: null
            };
        case brandUrlsActionTypes.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].map((url) => {
                        if (url.id === action.payload.brandUrl.id) {
                            return { // return updated url
                                ...url,
                                ...action.payload.brandUrl
                            };
                        }
                        return url; // return url without change
                    }),
                },
                error: null
            };
        case brandUrlsActionTypes.SET_AS_MAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].map((url) => {
                        if (url.id === action.payload.urlId) {
                            url.main = 1;
                        } else {
                            url.main = 0;
                        }
                        return url;
                    }),
                },
                error: null
            };
        case brandUrlsActionTypes.GETALL_BY_BRAND_FAILURE:
        case brandUrlsActionTypes.CREATE_FAILURE:
        case brandUrlsActionTypes.UPDATE_FAILURE:
        case brandUrlsActionTypes.DELETE_FAILURE:
        case brandUrlsActionTypes.SET_AS_MAIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default brandUrlsReducer;