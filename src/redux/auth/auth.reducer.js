import authActionTypes from "./auth.types";

const INITIAL_STATE = {
    loading: false,
    loggedIn: false,
    currentUser: null,
    error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                loggedIn: false,
                currentUser: null,
                error: null
            };
        case authActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                currentUser: action.payload,
                error: null
            };
        case authActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: null,
                error: action.payload
            };
        case authActionTypes.LOGOUT:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: null,
                error: null
            };
        default:
            return state;
    }
};

export default authReducer;