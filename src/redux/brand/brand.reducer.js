import { brandActionTypes } from "./brand.types";
import BRANDS_DATA from "./brand.data";

const INITIAL_STATE = {
    brands: BRANDS_DATA
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