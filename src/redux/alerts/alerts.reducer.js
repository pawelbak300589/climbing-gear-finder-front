import alertActionTypes from "./alerts.types";
import { createNewAlertId } from "../../helpers";

const INITIAL_STATE = {
    items: []
};

const alertsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case alertActionTypes.ADD_ALERT:
            return {
                ...state,
                items: [...state.items, { ...action.payload, id: createNewAlertId(state.items) }]
            };
        case alertActionTypes.REMOVE_ALERT:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default alertsReducer;