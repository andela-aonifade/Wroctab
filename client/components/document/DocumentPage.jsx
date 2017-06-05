/* eslint class-methods-use-this: "off"*/
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentList from './DocumentList.jsx';
import * as documentActions from '../../actions/documentActions';
import Modal from '../common/Modal.jsx';

class DocumentPage extends React.Component {
  constructor(props) {
    super(props);

    this.deleteClick = this.deleteClick.bind(this);
  }
  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.actions.loadUserDocument();
    }
  }
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
  }

  deleteClick() {
    this.props.actions.deleteCurrentDocument();
    $('#modal1').modal('open');
  }

  render() {
    const { myDocuments } = this.props;
    // const count = myDocuments.length;
    return (
      <div className="row">
          <div id="documentPage" className="col s12">
            <h4 className="header-text center">MY DOCUMENTS</h4>
        <div id="addBtnDiv"
          className="fixed-action-btn" onClick={this.deleteClick}>
          <a
  className="btn-floating btn-large waves-effect waves-light teal tooltipped"
  data-position="left" data-delay="50"
  data-tooltip="create new document">
            <i className="material-icons">add</i>
          </a>
        </div>
          <div className="row">
            <div className="col s12">
              <DocumentList myDocuments={myDocuments}/>
            </div>
          </div>
        <Modal />
      </div>
      </div>
    );
  }
}

DocumentPage.propTypes = {
  myDocuments: PropTypes.array.isRequired,
  publicDocuments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

/**
 *
 *
 * @param {object} state
 * @returns {object}
 */
function mapStateToProps(state) {
  const currentState = state.manageDocuments;
  const isAuthenticated = state.auth.isAuthenticated;
  let myDocuments = [];
  if (state.auth.isAuthenticated) {
    myDocuments = currentState.documents.filter(
     doc => doc.userId === state.auth.user.data.id);
  }

  const publicDocuments = currentState.documents.filter(
      doc => doc.viewAccess === 'public');
  return {
    myDocuments,
    publicDocuments,
    currentDocument: state.currentlySelected.selectedDocument,
    isAuthenticated
  };
}

/**
 *
 *
 * @param {object} dispatch
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentPage);
