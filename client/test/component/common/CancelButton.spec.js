import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import CancelButton from '../../../components/common/CancelButton.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    onClick: () => {}
  };
  return shallow(<CancelButton {...props}/>);
}

describe('<CancelButton />', () => {
  it('renders <a> tag', () => {
    const wrapper = setup();
    expect(wrapper.find('a')).to.have.length(1);
  });
  it('contains cancel text', () => {
    const wrapper = setup();
    expect(wrapper.find('a').text()).to.equal('Cancel');
  });
});
