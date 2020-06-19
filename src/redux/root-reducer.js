import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth.reducer";
import alertsReducer from "./alerts/alerts.reducer";
import brandReducer from "./brand/brand.reducer";
import brandMappingReducer from "./brand-mapping/brand-mapping.reducer";
import brandImagesReducer from "./brand-images/brand-images.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const rootReducer = combineReducers({
    auth: authReducer,
    alerts: alertsReducer,
    brands: brandReducer,
    brandMappings: brandMappingReducer,
    brandImages: brandImagesReducer,
});

export default persistReducer(persistConfig, rootReducer);