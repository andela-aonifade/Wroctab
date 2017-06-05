import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as documentActions from '../../../client/actions/documentActions';
import types from '../../../client/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test a sync action
describe('Document Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('Load User Document', () => {
    it(`should return object and 
        dispatch a LOAD_DOCUMENT_SUCCESS action`, () => {
      moxios.stubRequest('/documents', {
        status: 200,
        response: { title: 'test document' }
      });

      const expectedActions = [{
        type: types.LOAD_DOCUMENT_SUCCESS,
        documents: { title: 'test document' }
      }];
      const store = mockStore();
      return store.dispatch(documentActions.loadAllDocument())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
  describe('DeleteDocument', () => {
    it('deletes a document and dispatches DELETE_DOCUMENT_SUCCESS', () => {
      moxios.stubRequest('/documents/3', {
        status: 200
      });

      const expectedActions = [];
      const store = mockStore({ auth: { user: { data: { id: 3 } } } });

      return store.dispatch(documentActions.deleteDocument(3))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('UpdateDocument', () => {
    it('Updates a document and dispatches LOAD_DOCUMENT_SUCCESS', () => {
      const document = { title: 'testing document' };
      moxios.stubRequest('/documents/3', document, {
        status: 200
      });

      const expectedActions = [];
      const store = mockStore({ currentlySelected: { selectedDocument: 3 },
        auth: { user: { data: { id: 3 } } } });

      return store.dispatch(documentActions.updateDocument(3))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  // describe('SaveDocument', () => {
  //   it('Saves a document and dispatches LOAD_DOCUMENT_SUCCESS', () => {
  //     const document = { title: 'testing document' };
  //     moxios.stubRequest('/documents', document, {
  //       status: 200
  //     });

  //     const expectedActions = [];
  //     const store = mockStore({ currentlySelected: { selectedDocument: 3 },
  //       auth: { user: { data: { id: 3 } } } });

  //     return store.dispatch(documentActions.saveDocument(3))
  //       .then(() => {
  //         expect(store.getActions()).toEqual(expectedActions);
  //       });
  //   });
  // });
});

