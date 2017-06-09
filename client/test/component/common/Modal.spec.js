import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Modal
  from '../../../components/common/Modal.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    documentDetails: false
  };
  return shallow(<Modal {...props}/>);
}

describe('Modal', () => {
  it('Renders <a> tag', () => {
    const wrapper = setup();
    expect(wrapper.find('a').length).toEqual(1);
  });
  it('Renders h4 element with text document', () => {
    const wrapper = setup();
    expect(wrapper.find('h4').text())
      .toEqual('Document');
  });
  it('Render DocumentForm when documentDetails is false',
  () => {
    const wrapper = setup();
    expect(wrapper.find('DocumentForm')).toBeTruthy();
  });
  it('Render last Div with class modal', () => {
    const wrapper = setup();
    expect(wrapper.find('div.modal')).toBeTruthy();
  });
});
