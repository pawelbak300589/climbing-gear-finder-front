import authActionTypes from "./auth.types";

const INITIAL_STATE = {
    loggingIn: false,
    currentUser: null,
    error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                currentUser: null,
                error: null
            };
        case authActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                currentUser: action.payload,
                error: null
            };
        case authActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                currentUser: null,
                error: action.payload
            };
        case authActionTypes.LOGOUT:
            return {
                ...state,
                loggingIn: false,
                currentUser: null,
                error: null
            };
        default:
            return state;
    }
};

export default authReducer;