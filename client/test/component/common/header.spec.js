import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Header }
  from '../../../components/common/Header.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    auth: {},
    logout: () => {},
    isAdmin: false
  };
  return shallow(<Header {...props}/>);
}

describe('Renders Headers Component', () => {
  it('renders navbar', () => {
    const wrapper = setup();
    expect(wrapper.find('div#navheader').find('Link')).toBeTruthy();
  });
  it('Renders Brand Text', () => {
    const wrapper = setup();
    expect(wrapper.find('Link.brand-logo'))
      .toBeTruthy();
  });
  it('contains View List text', () => {
    const wrapper = setup();
    expect(wrapper.find('a').first()).toBeTruthy();
  });
});
