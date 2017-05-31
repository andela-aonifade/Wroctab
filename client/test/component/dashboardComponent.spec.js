// import expect from 'expect';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { mount } from 'enzyme';
// import Dashboard from '../../components/dashboard/Dashboard.jsx';
// import configureStore from '../../store/configureStore';

// /**
//  * setup function for the test cases
//  *
//  * @return {Object} - object of props, output and render
// */
// function setup() {
//   const store = configureStore();
//   const props = {
//     documentDetails: {},
//     publicDocuments: {},
//     privateDocuments: {},
//     roleDocuments: {},
//     loadUserDocument: {},
//     loadAllDocument: {},
//     isAuthenticated: true,
//     auth: {},
//     iaAuthenticated: {},
//     authenticate: {},
//     router: {}
//   };
//   return mount(<Provider store={store}><Dashboard {...props}/></Provider>);
// }

// describe('Testing <Dashboard /> Component', () => {
//   it('Renders document tabs', () => {
//     const wrapper = setup();
//     expect(wrapper.find('li.tab')).to.have.length(3);
//   });
// });
