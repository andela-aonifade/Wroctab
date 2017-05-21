import React from 'react';
import LoginForm from './LoginForm.jsx';

/**
 * HomePage Component
 */
export default class HomePage extends React.Component {

/**
 * React Render
 * @return {object} html
 */
  render() {
    return (
      <div className="row">
          <div className="row">
            <div className="col s10 m6 offset-m3 offset-s1" id="signIn-box">
              <LoginForm/>
            </div>
          </div>
      </div>
    );
  }
}
