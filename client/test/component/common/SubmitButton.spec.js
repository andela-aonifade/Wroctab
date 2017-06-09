import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton
  from '../../../components/common/SubmitButton.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    type: '',
    value: '',
    onClick: () => {}
  };
  return shallow(<SubmitButton {...props}/>);
}

describe('Modal', () => {
  it('Renders <input> tag', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toEqual(1);
  });
});
