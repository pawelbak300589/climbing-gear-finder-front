import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer";
import brandReducer from "./brand/brand.reducer";

export default combineReducers({
    auth: authReducer,
    brands: brandReducer
});