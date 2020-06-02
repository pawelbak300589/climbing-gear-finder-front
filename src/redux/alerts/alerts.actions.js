import alertActionTypes from "./alerts.types";

export const normal = (title, message) => ({
    type: alertActionTypes.ADD_ALERT,
    payload: {
        title: title,
        message: message,
        type: 'normal',
        created: Date.now()
    }
});

export const success = (title, message) => ({
    type: alertActionTypes.ADD_ALERT,
    payload: {
        title: title,
        message: message,
        type: 'success',
        created: Date.now()
    }
});

export const error = (title, message) => ({
    type: alertActionTypes.ADD_ALERT,
    payload: {
        title: title,
        message: message,
        type: 'error',
        created: Date.now()
    }
});

export const warning = (title, message) => ({
    type: alertActionTypes.ADD_ALERT,
    payload: {
        title: title,
        message: message,
        type: 'warning',
        created: Date.now()
    }
});

export const add = (title, message, type) => {
    return (dispatch) => {
        switch (type) {
            case 'success':
                dispatch(success(title, message));
                break;
            case 'error':
                dispatch(error(title, message));
                break;
            case 'warning':
                dispatch(warning(title, message));
                break;
            default:
                dispatch(normal(title, message));
        }
    };
};

export const remove = (alertId) => {
    return dispatch => dispatch({ type: alertActionTypes.REMOVE_ALERT, payload: alertId });
};