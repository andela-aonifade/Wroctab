import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import toastr from 'toastr';
import TextInput from '../common/TextInput.jsx';
import { login } from '../../actions/userActions';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      errors: {},
      isLoading: false,
      loginError: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this
      .onChange
      .bind(this);
  }

  isFormValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.user.password.length < 0) {
      errors.password = 'Password must be at least 5 characters.';
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: {} });
      this.props.login(this.state).then(
        () => {
          this.context.router.push('/');
          toastr.success('Logged in Successfully');
        }
      ).catch(() => {
        toastr.error('Unable to login user, please try again');
      });
    }
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }

  render() {
    const { errors, isLoading } = this.state;
    // const { login } = this.props;
    const form = (
      <div id="logincontainer panel-transparent"
        className="col s12 z-depth-5 card blue-grey">
        <form className="login-form">
          <h4 className="center">Login</h4>
          <div className="row margin">
            <TextInput
              type="email"
              name="email"
              label="email"
              icon="email"
              onChange={this.onChange}
              error={errors.email}
              />
          </div>
          <div className="row margin">
            <TextInput
              type="password"
              name="password"
              label="password"
              icon="lock"
              onChange={this.onChange}
              error={errors.password}
              />
          </div>
          <div className="row center">
            <div className="input-field col s12">
              <input
                type="submit"
                value="Login"
                className="btn blue-grey darken-1 btn-login"
                disabled={isLoading}
                onClick={this.onSubmit}/>
            </div>
            <div className="input-field col s12">
              <p className="margin center medium-small sign-up">
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
    return (
      <div>
      {form}
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
};

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
