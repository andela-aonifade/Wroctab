import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { RoleForm } from '../../../components/admin/RoleForm.jsx';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
/**
 * setup function
 * @param {null} no parameter
 * @return {any} LoginForm wrapper
*/
function setup() {
  const props = {
    user: {},
    errors: {},
    isLoading: false,
    loginError: '',
    currentRole: '',
    roleValue: '',
    auth: {},
    action: () => {},
    onSubmit: () => {},
    saveRole: () => {},
    updateRole: () => {},
    addFlashMessages: {}
  };

  return shallow(<RoleForm {...props} />);
}

describe('RoleForm', () => {
  it('renders a inputs for both title and submit', () => {
    const Component = setup();
    expect(Component.find('input').length).toEqual(2);
    expect(Component.find('input').first().prop('name')).toBe('title');
    expect(Component.find('input').last().prop('type')).toBe('submit');
  });
  it('renders the Save Submit Button', () => {
    const Component = setup();
    expect(Component.find('input[type="submit"]').length).toEqual(1);
    expect(Component.find('input').last().prop('value')).toEqual('Save');
  });
});
