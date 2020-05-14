import { brandActionTypes } from "./brand.types";

const INITIAL_STATE = {
    brands: []
};

const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandActionTypes.CREATE_BRAND:
            return {
                ...state,
                brands: action.payload
            }
        default:
            return state;
    }
}

export default brandReducer;