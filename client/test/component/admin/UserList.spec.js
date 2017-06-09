import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from '../../../components/admin/UserList.jsx';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
/**
 * setup function
 * @param {null} no parameter
 * @return {any} LoginForm wrapper
*/
function setup() {
  const props = {
    actions: {},
    allUsers: [],
    pageCount: 0,
    swal: () => {},
    close: () => {},
    addFlashMessage: () => {},
    editRole: () => {},
    deleteRole: () => {},
    renderAlert: () => {},
  };

  return shallow(<UserList {...props} />);
}

describe('User List', () => {
  it('renders a icons for Managing user list', () => {
    const Component = setup();
    expect(Component.find('ul#icons')).toBeTruthy();
    expect(Component.find('li')).toBeTruthy();
    expect(Component.find('li')).toBeTruthy();
  });
  it('renders the List', () => {
    const Component = setup();
    expect(Component.find('div#name')).toBeTruthy();
  });
});
