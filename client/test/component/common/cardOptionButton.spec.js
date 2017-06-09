import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CardOptionButton
  from '../../../components/common/CardOptionButton.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    onClick: () => {}
  };
  return shallow(<CardOptionButton {...props}/>);
}

describe('Renders CardOptionButton', () => {
  it('renders <a> tag', () => {
    const wrapper = setup();
    expect(wrapper.find('a').length).toEqual(1);
  });
  it('contains View List text', () => {
    const wrapper = setup();
    expect(wrapper.find('a').find('i').text()).toEqual('view_list');
  });
});
