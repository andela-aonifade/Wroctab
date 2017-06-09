import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ListDetails
  from '../../../components/common/ListDetails.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    fullname: '',
    username: '',
    email: '',
    createdAt: '',
    showHeader: false,
    onEditClick: () => {},
    onChangeClick: () => {}
  };
  return shallow(<ListDetails {...props}/>);
}

describe('ListDetails', () => {
  it('Renders ListDetailHeader', () => {
    const wrapper = setup();
    expect(wrapper.find('ListDetailHeader')).toBeTruthy();
  });
  it('Renders ListDetailBody', () => {
    const wrapper = setup();
    expect(wrapper.find('ListDetailBody').length)
      .toEqual(4);
  });
  it('Render first ListDetailBody with title Name', () => {
    const wrapper = setup();
    expect(wrapper.find('ListDetailBody').first()
      .props().title).toEqual('Name');
  });
  it('Render ListDetailBody with proptype title', () => {
    const wrapper = setup();
    expect(wrapper.find('ListDetailBody').first()
      .props().title).toBeTruthy();
  });
  it('Render last ListDetailBody with prop title Created', () => {
    const wrapper = setup();
    expect(wrapper.find('ListDetailBody').last()
      .props().title).toEqual('Created');
  });
});
