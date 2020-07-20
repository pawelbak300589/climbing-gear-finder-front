import { brandActionTypes } from "./brand.types";
import brandReducer from "./brand.reducer";

const initialState = {
    loading: false,
    items: [],
    pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 25,
        total: 0
    },
    search: {
        phrase: '',
        exact: false,
    },
    error: null
};

describe('brandReducer', () => {
    it('should return initial state', () => {
        expect(brandReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GETALL_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.GETALL_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle GETONE_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.GETONE_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle CREATE_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.CREATE_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle UPDATE_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.UPDATE_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle DELETE_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.DELETE_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle BLACKLIST_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.BLACKLIST_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle CONVERT_TO_MAPPING_REQUEST', () => {
        expect(
            brandReducer(initialState, {
                type: brandActionTypes.CONVERT_TO_MAPPING_REQUEST
            }).loading
        ).toEqual(true);
    });

    it('should handle GETALL_SUCCESS', () => {
        const mockPayload = {
            data: [],
            current_page: 1,
            last_page: 5,
            per_page: 25,
            total: 100,
            search: {
                phrase: 'test',
                exact: false,
            }
        };
        const expectedReducer = {
            loading: false,
            items: mockPayload.data,
            pagination: {
                current_page: mockPayload.current_page,
                last_page: mockPayload.last_page,
                per_page: mockPayload.per_page,
                total: mockPayload.total,
            },
            search: {
                phrase: mockPayload.search.phrase,
                exact: mockPayload.search.exact,
            },
            error: null
        };
        const reducer = brandReducer(initialState, {
            type: brandActionTypes.GETALL_SUCCESS,
            payload: mockPayload
        });

        expect(reducer).toEqual(expectedReducer);
    });

    it('should handle GETONE_SUCCESS and CREATE_SUCCESS', () => {
        const prevState = {
            ...initialState,
            loading: true,
            items: [
                {
                    id: 1,
                    name: 'Test User 1'
                }
            ],
            error: 'test error'
        };
        const mockPayload = {
            id: 2,
            name: 'Test User 2'
        };
        const expectedReducer = {
            ...prevState,
            loading: false,
            items: [...prevState.items, mockPayload],
            error: null
        };

        const reducer1 = brandReducer(prevState, {
            type: brandActionTypes.GETONE_SUCCESS,
            payload: mockPayload
        });

        expect(reducer1).toEqual(expectedReducer);

        const reducer2 = brandReducer(prevState, {
            type: brandActionTypes.CREATE_SUCCESS,
            payload: mockPayload
        });

        expect(reducer2).toEqual(expectedReducer);
    });

    it('should handle UPDATE_SUCCESS and CONVERT_TO_MAPPING_SUCCESS', () => {
        const prevState = {
            ...initialState,
            loading: true,
            items: [
                {
                    id: 1,
                    name: 'Test User'
                }
            ],
            error: 'test error'
        };
        const mockPayload = {
            id: 1,
            name: 'Test User UPDATED'
        };
        const expectedReducer = {
            ...prevState,
            loading: false,
            items: [mockPayload],
            error: null
        };

        const reducer1 = brandReducer(prevState, {
            type: brandActionTypes.UPDATE_SUCCESS,
            payload: mockPayload
        });

        expect(reducer1).toEqual(expectedReducer);

        const reducer2 = brandReducer(prevState, {
            type: brandActionTypes.CONVERT_TO_MAPPING_SUCCESS,
            payload: mockPayload
        });

        expect(reducer2).toEqual(expectedReducer);
    });

    it('should handle DELETE_SUCCESS and BLACKLIST_SUCCESS', () => {
        const prevState = {
            ...initialState,
            loading: true,
            items: [
                {
                    id: 1,
                    name: 'Test User'
                }
            ],
            error: 'test error'
        };
        const mockPayload = 1;
        const expectedReducer = {
            ...prevState,
            loading: false,
            items: [],
            error: null
        };
        const reducersNames = [
            brandActionTypes.DELETE_SUCCESS,
            brandActionTypes.BLACKLIST_SUCCESS
        ];

        reducersNames.map(reducerName => {
            const reducer = brandReducer(prevState, {
                type: reducerName,
                payload: mockPayload
            });
            return expect(reducer).toEqual(expectedReducer);
        });
    });

    it('should handle GETALL_FAILURE', () => {
        const prevState = {
            ...initialState,
            loading: true,
            items: [
                {
                    id: 1,
                    name: 'Test User'
                }
            ],
            error: null
        };
        const mockPayload = 'test error';
        const expectedReducer = {
            ...prevState,
            loading: false,
            items: [],
            error: 'test error'
        };

        const reducer = brandReducer(prevState, {
            type: brandActionTypes.GETALL_FAILURE,
            payload: mockPayload
        });

        expect(reducer).toEqual(expectedReducer);
    });

    it('should handle GETONE_FAILURE, CREATE_FAILURE, UPDATE_FAILURE, DELETE_FAILURE, BLACKLIST_FAILURE and CONVERT_TO_MAPPING_FAILURE', () => {
        const prevState = {
            ...initialState,
            loading: true,
            error: null
        };
        const mockPayload = 'test error';
        const expectedReducer = {
            ...prevState,
            loading: false,
            error: 'test error'
        };
        const reducersNames = [
            brandActionTypes.GETONE_FAILURE,
            brandActionTypes.CREATE_FAILURE,
            brandActionTypes.UPDATE_FAILURE,
            brandActionTypes.DELETE_FAILURE,
            brandActionTypes.BLACKLIST_FAILURE,
            brandActionTypes.CONVERT_TO_MAPPING_FAILURE
        ];

        reducersNames.map(reducerName => {
            const reducer = brandReducer(prevState, {
                type: reducerName,
                payload: mockPayload
            });
            return expect(reducer).toEqual(expectedReducer);
        });
    });

    it('should handle CHANGE_CURRENT_PAGE', () => {
        const prevState = {
            ...initialState,
            pagination: {
                ...initialState.pagination,
                current_page: 1,
            },
        };
        const mockPayload = 3;
        const expectedReducer = {
            ...prevState,
            pagination: {
                ...prevState.pagination,
                current_page: 3,
            },
        };

        const reducer = brandReducer(prevState, {
            type: brandActionTypes.CHANGE_CURRENT_PAGE,
            payload: mockPayload
        });

        expect(reducer).toEqual(expectedReducer);
    });

    it('should handle CHANGE_ITEMS_PER_PAGE', () => {
        const prevState = {
            ...initialState,
            pagination: {
                ...initialState.pagination,
                per_page: 50,
            },
        };
        const mockPayload = 100;
        const expectedReducer = {
            ...prevState,
            pagination: {
                ...prevState.pagination,
                per_page: mockPayload,
            },
        };

        const reducer = brandReducer(prevState, {
            type: brandActionTypes.CHANGE_ITEMS_PER_PAGE,
            payload: mockPayload
        });

        expect(reducer).toEqual(expectedReducer);
    });

    it('should handle UPDATE_SEARCH_PHRASE', () => {
        const prevState = {
            ...initialState,
            search: {
                ...initialState.search,
                phrase: 'test',
                exact: false
            },
        };
        const mockPayload = {
            phrase: 'new phrase',
            exact: true
        };
        const expectedReducer = {
            ...prevState,
            search: {
                ...prevState.search,
                phrase: mockPayload.phrase,
                exact: mockPayload.exact
            },
        };

        const reducer = brandReducer(prevState, {
            type: brandActionTypes.UPDATE_SEARCH_PHRASE,
            payload: mockPayload
        });

        expect(reducer).toEqual(expectedReducer);
    });
});