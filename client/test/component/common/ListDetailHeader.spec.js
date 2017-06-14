import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ListDetailHeader
  from '../../../components/common/ListDetailHeader.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    onEditClick: () => {},
    onChangeClick: () => {}
  };
  return shallow(<ListDetailHeader {...props}/>);
}

describe('ListDetailHeader', () => {
  it('Renders 2 SubmitButton component', () => {
    const wrapper = setup();
    expect(wrapper.find('SubmitButton').length).toEqual(2);
  });
  it('Renders List', () => {
    const wrapper = setup();
    expect(wrapper.find('li'))
      .toBeTruthy();
  });
  it('Render First SubmitButton with proptype value equals Edit Profile',
  () => {
    const wrapper = setup();
    expect(wrapper.find('SubmitButton').first()
      .props().value).toEqual('Edit Profile');
  });
  it('Render last SubmitButton with prop value Change Password', () => {
    const wrapper = setup();
    expect(wrapper.find('SubmitButton').last()
      .props().value).toEqual('Change Password');
  });
});
