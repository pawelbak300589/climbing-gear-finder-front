import { brandImagesActionTypes } from "./brand-images.types";

const INITIAL_STATE = {
    loading: false,
    items: {},
    error: null
};

const brandImagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandImagesActionTypes.GETALL_BY_BRAND_REQUEST:
        case brandImagesActionTypes.CREATE_REQUEST:
        case brandImagesActionTypes.UPDATE_REQUEST:
        case brandImagesActionTypes.DELETE_REQUEST:
        case brandImagesActionTypes.SET_AS_MAIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case brandImagesActionTypes.GETALL_BY_BRAND_SUCCESS:
            return {
                ...state,
                loading: false,
                items: { ...state.items, [action.payload.brandId]: action.payload.brandImages },
                error: null
            };
        case brandImagesActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: [...state.items[action.payload.brandId], action.payload.brandImage]
                },
                error: null
            };
        case brandImagesActionTypes.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].map((image) => {
                        if (image.id === action.payload.brandImage.id) {
                            return { // return updated image
                                ...image,
                                ...action.payload.brandImage
                            };
                        }
                        return image; // return image without change
                    }),
                },
                error: null
            };
        case brandImagesActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].filter((image) => image.id !== action.payload.imageId)
                },
                error: null
            };
        case brandImagesActionTypes.SET_AS_MAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [action.payload.brandId]: state.items[action.payload.brandId].map((image) => {
                        if (image.id === action.payload.imageId) {
                            image.main = 1;
                        } else {
                            image.main = 0;
                        }
                        return image;
                    }),
                },
                error: null
            };
        case brandImagesActionTypes.GETALL_BY_BRAND_FAILURE:
        case brandImagesActionTypes.CREATE_FAILURE:
        case brandImagesActionTypes.UPDATE_FAILURE:
        case brandImagesActionTypes.DELETE_FAILURE:
        case brandImagesActionTypes.SET_AS_MAIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default brandImagesReducer;