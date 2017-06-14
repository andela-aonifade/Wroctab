import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from '../../../components/admin/UserForm.jsx';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
/**
 * setup function
 * @param {null} no parameter
 * @return {any} LoginForm wrapper
*/
function setup() {
  const props = {
    allRoles: [],
    userValue: {},
    updateUser: () => {},
    actions: {},
    addFlashMessage: () => {},
    selectedUser: ''
  };

  return shallow(<UserForm {...props} />);
}

describe('UserForm', () => {
  it('renders TextInput Component', () => {
    const Component = setup();
    expect(Component.find('TextInput')).toBeTruthy();
    expect(Component.find('TextInput').length).toEqual(4);
  });
  it('renders the List', () => {
    const Component = setup();
    expect(Component.find('input').prop('value')).toEqual('Save');
  });
});
