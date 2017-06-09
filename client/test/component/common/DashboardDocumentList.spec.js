import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import DashboardDocumentList
  from '../../../components/common/DashboardDocumentList.jsx';

/**
 * setup sets up wrapper for setting up Component
 * @param {null} null -Does not take in any parameter
 * @return {any} - A wrapper container
*/
function setup() {
  const props = {
    documents: [],
    onClick: () => {}
  };
  return shallow(<DashboardDocumentList {...props}/>);
}

describe('Renders DashboardDocumentList', () => {
  it('renders div tag', () => {
    const wrapper = setup();
    expect(wrapper.find('div#panel-transparent').first()).toBeTruthy();
  });
  it('Renders Document Info Text', () => {
    const wrapper = setup();
    expect(wrapper.find('span.card-title').last())
      .toBeTruthy();
  });
  it('contains View List text', () => {
    const wrapper = setup();
    expect(wrapper.find('a').first()).toBeTruthy();
  });
});
