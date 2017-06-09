import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { RoleList } from '../../../components/admin/RoleList.jsx';


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
    allRoles: [],
    swal: () => {},
    close: () => {},
    addFlashMessage: () => {},
    editRole: () => {},
    deleteRole: () => {},
    renderAlert: () => {},
  };

  return shallow(<RoleList {...props} />);
}

describe('RoleForm', () => {
  it('renders a icons for Managing role list', () => {
    const Component = setup();
    expect(Component.find('ul#icons')).toBeTruthy();
    expect(Component.find('li')).toBeTruthy();
    expect(Component.find('li')).toBeTruthy();
  });
  it('renders the List', () => {
    const Component = setup();
    expect(Component.find('div#title')).toBeTruthy();
  });
});
