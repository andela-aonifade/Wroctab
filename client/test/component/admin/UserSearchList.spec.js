import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { UserSearchList } from '../../../components/admin/UserSearchList.jsx';


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
    searchedUsers: [],
    searchedPageCount: 0,
    value: '',
    swal: () => {},
    close: () => {},
    addFlashMessage: () => {},
    searchAction: {}
  };

  return shallow(<UserSearchList {...props} />);
}

describe('User List', () => {
  it('renders a icons for Managing user search list', () => {
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
