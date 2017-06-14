import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../../components/home/LoginForm.jsx';


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
    onSubmit: () => {},
    onChange: () => {},
  };

  return shallow(<LoginForm {...props} />);
}

describe('LoginForm', () => {
  it('renders a text inputs for both username and password', () => {
    const Component = setup();
    expect(Component.find('TextInput').length).toEqual(2);
    expect(Component.find('TextInput').first().prop('name')).toBe('email');
    expect(Component.find('TextInput').last().prop('name')).toBe('password');
  });
  it('renders the login Submit Button', () => {
    const Component = setup();
    expect(Component.find('input[type="submit"]').length).toEqual(1);
  });
});
