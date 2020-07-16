import { mockStore } from "../../setupTests";
import alertActionTypes from "./alerts.types";
import {
    add,
    remove,
    normal,
    success,
    error,
    warning
} from "./alerts.actions";

describe('add alert action', () => {
    let store = mockStore();
    let action = [];

    it('should create the add normal alert action', () => {
        const normalAlertTitle = 'normalAlertTitle';
        const normalAlertMessage = 'normalAlertMessage';
        store.dispatch(add(normalAlertTitle, normalAlertMessage));
        action = store.getActions();

        expect(action[0].type).toBe(alertActionTypes.ADD_ALERT);
        expect(action[0].payload.title).toBe(normalAlertTitle);
        expect(action[0].payload.message).toBe(normalAlertMessage);
        expect(action[0].payload.type).toBe('normal');
    });

    it('should create the add success alert action', () => {
        const successAlertTitle = 'successAlertTitle';
        const successAlertMessage = 'successAlertMessage';
        store.dispatch(add(successAlertTitle, successAlertMessage, 'success'));
        action = store.getActions();

        expect(action[1].type).toBe(alertActionTypes.ADD_ALERT);
        expect(action[1].payload.title).toBe(successAlertTitle);
        expect(action[1].payload.message).toBe(successAlertMessage);
        expect(action[1].payload.type).toBe('success');
    });

    it('should create the add error alert action', () => {
        const errorAlertTitle = 'errorAlertTitle';
        const errorAlertMessage = 'errorAlertMessage';
        store.dispatch(add(errorAlertTitle, errorAlertMessage, 'error'));
        action = store.getActions();

        expect(action[2].type).toBe(alertActionTypes.ADD_ALERT);
        expect(action[2].payload.title).toBe(errorAlertTitle);
        expect(action[2].payload.message).toBe(errorAlertMessage);
        expect(action[2].payload.type).toBe('error');
    });

    it('should create the add warning alert action', () => {
        const warningAlertTitle = 'warningAlertTitle';
        const warningAlertMessage = 'warningAlertMessage';
        store.dispatch(add(warningAlertTitle, warningAlertMessage, 'warning'));
        action = store.getActions();

        expect(action[3].type).toBe(alertActionTypes.ADD_ALERT);
        expect(action[3].payload.title).toBe(warningAlertTitle);
        expect(action[3].payload.message).toBe(warningAlertMessage);
        expect(action[3].payload.type).toBe('warning');
    });
});

describe('remove alert action', () => {
    const store = mockStore();

    it('should create the remove alert action', () => {
        store.dispatch(remove(1));
        const action = store.getActions();

        expect(action[0].type).toBe(alertActionTypes.REMOVE_ALERT);
        expect(action[0].payload).toBe(1);
    });
});

describe('normal alert', () => {
    it('should create the normal alert action object', () => {
        const normalAlertTitle = 'normalAlertTitle';
        const normalAlertMessage = 'normalAlertMessage';
        const normalAlertAction = normal(normalAlertTitle, normalAlertMessage);

        expect(normalAlertAction.type).toBe(alertActionTypes.ADD_ALERT);
        expect(normalAlertAction.payload.title).toBe(normalAlertTitle);
        expect(normalAlertAction.payload.message).toBe(normalAlertMessage);
        expect(normalAlertAction.payload.type).toBe('normal');
    });
});

describe('success alert', () => {
    it('should create the success alert action object', () => {
        const successAlertTitle = 'successAlertTitle';
        const successAlertMessage = 'successAlertMessage';
        const successAlertAction = success(successAlertTitle, successAlertMessage);

        expect(successAlertAction.type).toBe(alertActionTypes.ADD_ALERT);
        expect(successAlertAction.payload.title).toBe(successAlertTitle);
        expect(successAlertAction.payload.message).toBe(successAlertMessage);
        expect(successAlertAction.payload.type).toBe('success');
    });
});

describe('error alert', () => {
    it('should create the error alert action object', () => {
        const errorAlertTitle = 'errorAlertTitle';
        const errorAlertMessage = 'errorAlertMessage';
        const errorAlertAction = error(errorAlertTitle, errorAlertMessage);

        expect(errorAlertAction.type).toBe(alertActionTypes.ADD_ALERT);
        expect(errorAlertAction.payload.title).toBe(errorAlertTitle);
        expect(errorAlertAction.payload.message).toBe(errorAlertMessage);
        expect(errorAlertAction.payload.type).toBe('error');
    });
});

describe('warning alert', () => {
    it('should create the warning alert action object', () => {
        const warningAlertTitle = 'warningAlertTitle';
        const warningAlertMessage = 'warningAlertMessage';
        const warningAlertAction = warning(warningAlertTitle, warningAlertMessage);

        expect(warningAlertAction.type).toBe(alertActionTypes.ADD_ALERT);
        expect(warningAlertAction.payload.title).toBe(warningAlertTitle);
        expect(warningAlertAction.payload.message).toBe(warningAlertMessage);
        expect(warningAlertAction.payload.type).toBe('warning');
    });
});