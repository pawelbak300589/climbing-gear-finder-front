import backend from "../../apis/backend";
import MockAdapter from "axios-mock-adapter";
import { mockStore } from "../../setupTests";
import { brandActionTypes } from "./brand.types";
import {
    getAll,
    getOne,
    create,
    update,
    remove,
    blacklist,
    convertToMapping,
    changeCurrentPage,
    changeItemsPerPage,
    updateSearchPhrase
} from './brand.actions';

describe('brand actions', () => {
    let store;
    let mockAxios;

    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore({
            auth: {
                currentUser: {}
            },
            brands: {
                pagination: {
                    current_page: 1,
                    per_page: 25
                },
                search: {
                    phrase: '',
                    exact: false
                }
            }
        });
        mockAxios = new MockAdapter(backend);
    });

    describe('getAll action', () => {
        it('should fire GETALL_REQUEST action followed by GETALL_SUCCESS action', async (done) => {
            const data = {
                data: [{ id: 1, name: 'testBrand1' }, { id: 2, name: 'testBrand2' }],
                current_page: 1,
                last_page: 4,
                per_page: 25,
                total: 100
            };
            mockAxios.onGet("/brands").reply(200, data);

            const expectedActions = [
                { type: brandActionTypes.GETALL_REQUEST },
                {
                    type: brandActionTypes.GETALL_SUCCESS, payload: {
                        ...data, // TODO: there is a problem if we are parsing data in action - use JSON.stringify then
                        search: {
                            phrase: '',
                            exact: false,
                        }
                    }
                },
            ];

            await store.dispatch(getAll())
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });
    });
});