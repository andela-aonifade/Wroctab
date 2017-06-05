/* eslint class-methods-use-this: "off"*/
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RoleList from './RoleList.jsx';
import * as roleActions from '../../actions/roleActions';
import RoleForm from './RoleForm.jsx';

class ManangeRolePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { viewForm: false };

    this.closeClick = this.closeClick.bind(this);
    this.openFormClick = this.openFormClick.bind(this);
  }
  componentWillMount() {
    this.props.actions.loadRoles();
  }

  componentDidMount() {
    $('.tooltipped').tooltip({ delay: 50 });
  }

  closeClick() {
    this.props.actions.deleteCurrentRole();
    this.setState({ viewForm: false });
  }

  openFormClick() {
    this.setState({ viewForm: true });
    this.props.actions.deleteCurrentRole();
  }

  renderRoleForm() {
    if (this.props.currentRole) {
      return (
        <div>
          <div>
            <a onClick={this.closeClick}
              className="btn-floating teal closeModal">
              <i className="material-icons">close</i>
            </a>
          </div>
          <h3 className="white-text">Update Role</h3>
          <RoleForm />
        </div>
      );
    }
  }

  render() {
    const { allRoles, currentRole } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="col s12">
              <div className="fixed-action-btn" onClick={this.openFormClick}>
                <a className="btn-floating
                  btn-large waves-effect waves-light teal tooltipped"
                  data-position="left" data-delay="50"
                  data-tooltip="create new role">
                  <i className="material-icons">add</i>
                </a>
              </div>
              <h4 className="header-text center">All Roles</h4>
            <div className="row">
                <div className="col s12 m6">
                <RoleList allRoles={allRoles} />
                </div>
                <div className="col s12 m6">
                  {this.state.viewForm ?
                    <div>
                      <div>
                        <a onClick={this.closeClick}
                          className="btn-floating teal closeModal">
                          <i className="material-icons">close</i></a>
                      </div>
                      <h6 className="white-text">Add New Role</h6>
                      <RoleForm currentRole={currentRole} />
                    </div>
                     :
                      this.renderRoleForm()}
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

ManangeRolePage.propTypes = {
  allRoles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  currentRole: PropTypes.string
};

/**
 *
 *
 * @param {object} state
 * @returns {object} roles and the state of current role
 */
function mapStateToProps(state) {
  const currentState = state.manageRoles;
  const allRoles = currentState.roles;
  return {
    allRoles,
    currentRole: state.currentlySelected.selectedRole
  };
}

/**
 *
 * dispatch document actions
 * @param {object} dispatch
 * @returns {object} action
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManangeRolePage);
