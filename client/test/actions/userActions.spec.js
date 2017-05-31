import expect from 'expect';
import * as userActions from '../../../client/actions/userActions';
import types from '../../../client/actions/actionTypes';


const testUser = {
  name: 'test actions',
  username: 'testreduce',
  email: 'testreduce@gmail.com',
  password: 'password',
  roleId: 2
};
const testUsers = [{
  name: 'Onifade Anuoluwapo',
  username: 'testreduce',
  email: 'testreduce@gmail.com',
  password: 'password',
  roleId: 2
},
{
  name: 'John Doe',
  username: 'testjohndoe',
  email: 'testjohndoe@gmail.com',
  password: 'password',
  roleId: 1
}];
// Test a sync action
describe('User Actions', () => {
  describe('createUserSuccess', () => {
    it('should create a CREATE_USER_SUCCESS action', (done) => {
      // arrange
      const expectedAction = {
        type: types.CREATE_USER_SUCCESS,
        user: testUser
      };
      // act
      const action = userActions.createUserSuccess(testUser);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
  describe('loadAllUsersSuccess', () => {
    it('should get users when passed LOAD_ALLUSERS_SUCCESS', (done) => {

      const expectedAction = {
        type: types.LOAD_ALLUSERS_SUCCESS,
        users: testUsers
      };

      const action = userActions.loadAllUsersSuccess(testUsers);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });

  describe('loadUserSuccess', () => {
    it('should load user, LOAD_USER_SUCCESS action', (done) => {
      // arrange
      const expectedAction = {
        type: types.LOAD_USERS_SUCCESS,
        users: testUser
      };
      // act
      const action = userActions.loadUserSuccess(testUser);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });

  describe('setCurrentUser', () => {
    it('should set current logged in user, SET_CURRENT_USER action', (done) => {
      // arrange
      const expectedAction = {
        type: types.SET_CURRENT_USER,
        user: testUser
      };
      // act
      const action = userActions.setCurrentUser(testUser);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });

  describe('setSelectedUser', () => {
    it('should get selected user from list, SET_SELECTED_USER action',
    (done) => {
      // arrange
      const id = testUser.id;
      const expectedAction = {
        type: types.SET_SELECTED_USER,
        id
      };
      // act
      const action = userActions.setSelectedUser(testUser.id);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });

  describe('displaySelectedUser', () => {
    it('should display details of selected user, DISPLAY_SELECT_USER action',
    (done) => {
      // arrange
      const id = testUser.id;
      const expectedAction = {
        type: types.DISPLAY_SELECT_USER,
        id
      };
      // act
      const action = userActions.displaySelectedUser(testUser.id);
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });

  describe('deleteSelectedUser', () => {
    it('should delete in state the selected user, DISPLAY_SELECT_USER action',
    (done) => {
      const expectedAction = {
        type: types.DELETE_SELECTED_USER,
      };
      // act
      const action = userActions.deleteSelectedUser();
      // assert
      expect(action).toEqual(expectedAction);
      done();
    });
  });
});
