import alertActionTypes from "./alerts.types";
import alertsReducer from "./alerts.reducer";

const initialState = {
    items: []
};

describe('alertsReducer', () => {
    it('should return initial state', () => {
        expect(alertsReducer(undefined, {})).toEqual(initialState);
    });

    it('should add new alert after add action', () => {
        const mockItem = {
            title: 'Test',
            message: 'This is test alert',
            type: 'warning',
            created: Date.now()
        };

        const mockExpectedState = {
            items: [
                {
                    ...mockItem,
                    id: 2
                }
            ]
        };

        expect(
            alertsReducer(initialState, {
                type: alertActionTypes.ADD_ALERT,
                payload: mockItem
            })
        ).toEqual(mockExpectedState);
    });

    it('should remove alert after remove action', () => {
        const mockItem = {
            id: 1,
            title: 'Test',
            message: 'This is test alert',
            type: 'warning',
            created: Date.now()
        };

        const mockPrevState = {
            items: [mockItem]
        };

        const mockExpectedState = {
            items: []
        };

        expect(
            alertsReducer(mockPrevState, {
                type: alertActionTypes.REMOVE_ALERT,
                payload: 1
            })
        ).toEqual(mockExpectedState);
    });
});