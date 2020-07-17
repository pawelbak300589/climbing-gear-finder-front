import backend from "../../apis/backend";
import MockAdapter from "axios-mock-adapter";
import { mockStore } from "../../setupTests";
import authActionTypes from "./auth.types";
import {
    login,
    logout,
    register
} from './auth.actions';

describe('authenticate actions', () => {
    let store;
    let mockAxios;

    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore();
        mockAxios = new MockAdapter(backend);
    });

    describe('login action', () => {
        it('should fire LOGIN_REQUEST action followed by LOGIN_SUCCESS action', async (done) => {
            const body = { email: 'email', password: 'pass' };
            const data = [{ id: 1, name: 'test', email: 'email' }];
            mockAxios.onPost("/auth/login", body).reply(200, data);

            const expectedActions = [
                { type: authActionTypes.LOGIN_REQUEST },
                { type: authActionTypes.LOGIN_SUCCESS, payload: data },
            ];

            await store.dispatch(login({ email: 'email', password: 'pass' }))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });

        it('should fire LOGIN_REQUEST action followed by LOGIN_FAILURE action with code 300', async (done) => {
            const body = { email: 'email', password: 'pass' };
            const data = "Request failed with status code 300";
            mockAxios.onPost("/auth/login", body).reply(300, data);

            const expectedActions = [
                { type: authActionTypes.LOGIN_REQUEST },
                { type: authActionTypes.LOGIN_FAILURE, payload: data },
            ];

            await store.dispatch(login({ email: 'email', password: 'pass' }))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });

        it('should fire LOGIN_REQUEST action followed by LOGIN_FAILURE action with code 403', async (done) => {
            const body = { email: 'email', password: 'pass' };
            const data = "Request failed with status code 403";
            mockAxios.onPost("/auth/login", body).reply(403, data);

            const expectedActions = [
                { type: authActionTypes.LOGIN_REQUEST },
                { type: authActionTypes.LOGIN_FAILURE, payload: data },
            ];

            await store.dispatch(login({ email: 'email', password: 'pass' }))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });

        it('should fire LOGIN_REQUEST action followed by LOGIN_FAILURE action with code 400', async (done) => {
            const body = { email: 'email', password: 'pass' };
            const data = "Request failed with status code 400";
            mockAxios.onPost("/auth/login", body).reply(400, data);

            const expectedActions = [
                { type: authActionTypes.LOGIN_REQUEST },
                { type: authActionTypes.LOGIN_FAILURE, payload: data },
            ];

            await store.dispatch(login({ email: 'email', password: 'pass' }))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });
    });

    describe('register action', () => {
        it('should fire REGISTER_REQUEST action followed by REGISTER_SUCCESS action', async (done) => {
            const body = { email: 'email', password: 'pass' };
            const data = [{ id: 1, name: 'test', email: 'email' }];
            mockAxios.onPost("/auth/register", body).reply(200, data);

            const expectedActions = [
                { type: authActionTypes.REGISTER_REQUEST },
                { type: authActionTypes.REGISTER_SUCCESS, payload: data },
            ];

            await store.dispatch(register({ email: 'email', password: 'pass' }))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });

        it('should fire REGISTER_REQUEST action followed by REGISTER_FAILURE action with code 404', async (done) => {
            const body = { email: 'email', password: 'pass' };
            const data = "Request failed with status code 404";
            mockAxios.onPost("/auth/register", body).reply(404, data);

            const expectedActions = [
                { type: authActionTypes.REGISTER_REQUEST },
                { type: authActionTypes.REGISTER_FAILURE, payload: data },
            ];

            await store.dispatch(register({ email: 'email', password: 'pass' }))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });
    });

    describe('logout action', () => {
        it('should fire LOGOUT action', async (done) => {
            store = mockStore({
                auth: {
                    currentUser: {}
                }
            });
            const body = { email: 'email', password: 'pass' };
            const data = [{ id: 1, name: 'test', email: 'email' }];
            mockAxios.onGet("/auth/logout", body).reply(200, data);

            const expectedActions = [
                { type: authActionTypes.LOGOUT },
            ];

            await store.dispatch(logout())
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            done();
        });
    });
});