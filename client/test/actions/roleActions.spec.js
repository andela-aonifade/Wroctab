import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as roleActions from '../../../client/actions/roleActions';
import types from '../../../client/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test a sync action
describe('Document Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('Load Roles', () => {
    it(`should return object and 
        dispatch a LOAD_ROLE_SUCCESS action`, () => {
      moxios.stubRequest('/roles', {
        status: 200,
        response: { role: { title: 'test role' } }
      });

      const expectedActions = [{
        type: types.LOAD_ROLE_SUCCESS,
        roles: { title: 'test role' }
      }];
      const store = mockStore();
      return store.dispatch(roleActions.loadRoles())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
  describe('Delete Role', () => {
    it(`should return object and 
        dispatch a LOAD_ROLE_SUCCESS action`, () => {
      moxios.stubRequest('/roles', {
        status: 200,
        response: { role: { title: 'test role' } }
      });
      moxios.stubRequest('/roles/3', {
        status: 200
      });
      const expectedActions = [];
      const store = mockStore();
      return store.dispatch(roleActions.deleteRole(3))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
  describe('Update Role', () => {
    it(`should return object and 
        dispatch a LOAD_ROLE_SUCCESS action`, () => {
      moxios.stubRequest('/roles', {
        status: 200,
        response: { role: { title: 'test role' } }
      });
      const role = { title: 'test role' };
      moxios.stubRequest('/roles/1', role, {
        status: 200
      });
      const expectedActions = [];
      const store = mockStore({ currentlySelected: { selectedRole: 1 } });
      return store.dispatch(roleActions.updateRole(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
  describe('Save Role', () => {
    it(`should return object and 
        dispatch a LOAD_ROLE_SUCCESS action`, () => {
      moxios.stubRequest('/roles', {
        status: 200,
        response: { role: { title: 'test role' } }
      });
      const role = { title: 'test role' };
      moxios.stubRequest('/roles', role, {
        status: 200
      });
      const expectedActions = [];
      const store = mockStore();
      return store.dispatch(roleActions.saveRole(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});

