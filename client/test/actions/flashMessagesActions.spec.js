import expect from 'expect';
import * as flashMessageActions from '../../../client/actions/flashMessages';
import types from '../../../client/actions/actionTypes';


describe('Flash Messages Actions', () => {
  describe('Add Flash Message', () => {
    it('should create a ADD_FLASH_MESSAGE action', (done) => {
      // arrange
      const message = 'Unable to login';
      const expectedAction = {
        type: types.ADD_FLASH_MESSAGE,
        message
      };
      // act
      const action = flashMessageActions.addFlashMessage(message);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
  describe('Delete Flash Message', () => {
    it('should get DELETE_FLASH_MESSAGE', (done) => {
      const id = 1;
      const expectedAction = {
        type: types.DELETE_FLASH_MESSAGE,
        id
      };

      const action = flashMessageActions.deleteFlashMessage(id);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
});

