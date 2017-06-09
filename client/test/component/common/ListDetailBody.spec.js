import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ListDetailBody
  from '../../../components/common/ListDetailBody.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    title: '',
    value: ''
  };
  return shallow(<ListDetailBody {...props}/>);
}

describe('ListDetailBody', () => {
  it('Renders List', () => {
    const wrapper = setup();
    expect(wrapper.find('li')).toBeTruthy();
  });
  it('Renders a div element', () => {
    const wrapper = setup();
    expect(wrapper.find('div').first())
      .toBeTruthy();
  });
  it('contains View List text', () => {
    const wrapper = setup();
    expect(wrapper.find('i')).toBeTruthy();
  });
});
