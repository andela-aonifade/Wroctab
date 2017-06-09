import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import TextInput
  from '../../../components/common/TextInput.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    type: '',
    name: '',
    label: '',
    onChange: () => {},
    icon: '',
    value: '',
    error: '',
    onBlur: () => {},
    clearError: () => {},
    placeholder: ''
  };
  return shallow(<TextInput {...props}/>);
}

describe('Modal', () => {
  it('Renders <input> tag with class validate', () => {
    const wrapper = setup();
    expect(wrapper.find('input.validate')).toBeTruthy();
  });
});
