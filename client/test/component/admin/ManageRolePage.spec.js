import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import {
  ManangeRole as ManageRolePage
} from '../../../components/admin/ManageRolePage.jsx';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
/**
 * setup function
 * @param {null} no parameter
 * @return {any} ManageRolePage wrapper
*/
function setup() {
  const props = {
    currentState: '',
    allRoles: '',
    currentRole: '',
    action: {
      loadRoles: () => {}
    }
  };

  return shallow(<ManageRolePage {...props} />);
}



describe.skip('ManageRolePage', () => {
  it('it renders an header All Roles', () => {
    const wrapper = setup();
    expect(wrapper.find('h4.header-text').text()).toBe('All Roles');
  });
  it('renders a RoleList Component', () => {
    const wrapper = setup();
    expect(wrapper.find('RoleList')).toBeTruthy();
  });
  it('renders a RoleForm component', () => {
    const wrapper = setup();
    expect(wrapper.find('RoleForm')).toBeTruthy();
  });
});
