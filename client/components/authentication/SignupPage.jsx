import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import SignupForm from './SignupForm.jsx';

/**
 * HomePage Component
 */
class SignupPage extends React.Component {

  /**
 * React Render
 * @return {object} html
 */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2" id="signIn-box">
            <SignupForm saveUser={this.props.actions.saveUser}
            isUserExists={this.props.actions.isUserExists}
            />
          </div>
        </div>
      </div>
    );
  }
}
SignupPage.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
};

/**
 *  map state to props
 *
 * @param {any} state
 * @returns {object}j
 */
function mapStateToProps(state) {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
