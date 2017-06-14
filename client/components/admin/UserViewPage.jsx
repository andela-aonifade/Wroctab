import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ListDetails from '../common/ListDetails.jsx';

class UserViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: Object.assign({}, props.userValue).name,
      username: Object.assign({}, props.userValue).username,
      email: Object.assign({}, props.userValue).email,
      roleId: Object.assign({}, props.userValue).roleId,
      createdAt: Object.assign({}, props.userValue).createdAt,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userValue.id !== nextProps.userValue.id) {
      // Necessary to populate form when existing documents loaded directly.
      this.setState({
        fullname: Object.assign({}, nextProps.userValue).name,
        username: Object.assign({}, nextProps.userValue).username,
        email: Object.assign({}, nextProps.userValue).email,
        roleId: Object.assign({}, nextProps.userValue).roleId,
        createdAt: Object.assign({}, nextProps.userValue).createdAt,
      });
    }
  }

  render() {
    return (
      <div className="user-details">
        <h4 className="white-text">User Details</h4>
      <ListDetails
        fullname={this.state.fullname}
        username={this.state.username}
        email={this.state.email}
        createdAt={moment(this.state.createdAt).format('llll')}
        />
</div>
    );
  }
}

UserViewPage.propTypes = {
  userValue: PropTypes.object.isRequired,
  currentUser: PropTypes.string,
};

/**
 *
 *
 * @param {object} users
 * @param {integer} id
 * @returns {string | null} user
 */
function getUserId(users, id) {
  const user = users.filter((u) => {
    return String(u.id) === id;
  });
  if (user) {
    return user[0];
  } // since filter returns an array, have to grab the first.
  return null;
}

/**
 *
 *
 * @param {object} state
 * @returns {object} user details
 */
const mapStateToProps = (state) => {
  const currentState = state.manageUsers;
  const userId = state.currentlySelected.selectedUser;
  let user = {
    id: '',
    name: '',
    username: '',
    email: '',
    roleId: '',
    createdAt: ''
  };
  if (userId > 0) {
    user = getUserId(currentState.allUsers, userId);
  }
  return {
    currentUser: state.currentlySelected.selectedUser,
    userValue: user
  };
};

export default connect(mapStateToProps)(UserViewPage);
