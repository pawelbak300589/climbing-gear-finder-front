import authActionTypes from "./auth.types";
import authReducer from "./auth.reducer";

const initialState = {
    loading: false,
    loggedIn: false,
    currentUser: null,
    error: null
};

describe('authReducer', () => {
    it('should return initial state', () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOGIN_REQUEST', () => {
        expect(
            authReducer(initialState, {
                type: authActionTypes.LOGIN_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle LOGIN_SUCCESS', () => {
        const mockUser = { id: 1 };
        const reducer = authReducer(initialState, {
            type: authActionTypes.LOGIN_SUCCESS,
            payload: mockUser
        });

        expect(reducer.currentUser).toEqual(mockUser);
        expect(reducer.loading).toEqual(false);
        expect(reducer.loggedIn).toEqual(true);
        expect(reducer.error).toEqual(null);
    });

    it('should handle LOGIN_FAILURE', () => {
        const reducer = authReducer(initialState, {
            type: authActionTypes.LOGIN_FAILURE,
            payload: 'this is error message'
        });

        expect(reducer.currentUser).toEqual(null);
        expect(reducer.loading).toEqual(false);
        expect(reducer.loggedIn).toEqual(false);
        expect(reducer.error).toEqual('this is error message');
    });

    it('should handle LOGOUT', () => {
        const mockPrevState = {
            loading: false,
            loggedIn: true,
            currentUser: { id: 1 },
            error: null
        };
        const reducer = authReducer(mockPrevState, {
            type: authActionTypes.LOGOUT
        });

        expect(reducer.currentUser).toEqual(null);
        expect(reducer.loading).toEqual(false);
        expect(reducer.loggedIn).toEqual(false);
        expect(reducer.error).toEqual(null);
    });
});