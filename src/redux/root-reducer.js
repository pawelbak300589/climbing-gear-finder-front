import { combineReducers } from "redux";

import brandReducer from "./brand/brand.reducer";

export default combineReducers({
    brands: brandReducer
});