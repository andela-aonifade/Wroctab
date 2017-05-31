import expect from 'expect';
import * as documentActions from '../../../client/actions/documentActions';
import types from '../../../client/actions/actionTypes';

// Test a sync action
describe('Document Actions', () => {
  describe('createDocumentSuccess', () => {
    it('should create a CREATE_DOCUMENT_SUCCESS action', (done) => {
      // arrange
      const document = {
        title: 'test document',
        body: 'This is just a test document. Please enjoy yourself',
        access: 'public',
        owner: 2
      };
      const expectedAction = {
        type: types.CREATE_DOCUMENT_SUCCESS,
        document
      };
      // act
      const action = documentActions.createDocumentSuccess(document);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
  describe('loadDocumentSuccess', () => {
    it('should get document when passed LOAD_DOCUMENT_SUCCESS', (done) => {
      const documents = {
        title: 'test document',
        body: 'This is just a test document. Please enjoy yourself',
        access: 'public',
        owner: 2
      };
      const expectedAction = {
        type: types.LOAD_DOCUMENT_SUCCESS,
        documents
      };

      const action = documentActions.loadDocumentSuccess(documents);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
  describe('setCurrentDocument', () => {
    it(`should set the current document 
        when passed SET_CURRENT_DOCUMENT`, (done) => {
      const id = 12030349;
      const expectedAction = {
        type: types.SET_CURRENT_DOCUMENT,
        id
      };

      const action = documentActions.setCurrentDocument(id);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
  describe('displayCurrentDocument', () => {
    it(`should display the current document 
        when passed DISPLAY_SELECTED_DOCUMENT`, (done) => {
      const id = 12030349;
      const expectedAction = {
        type: types.DISPLAY_SELECTED_DOCUMENT,
        id
      };

      const action = documentActions.displayCurrentDocument(id);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
  describe('deleteCurrentDocument', () => {
    it(`should delete the current document 
        when passed DELETE_CURRENT_DOCUMENT`, (done) => {
      const expectedAction = {
        type: types.DELETE_CURRENT_DOCUMENT,
      };

      const action = documentActions.deleteCurrentDocument();
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
});

