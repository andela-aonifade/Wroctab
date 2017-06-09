import React, { PropTypes } from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReduxSweetAlert, { swal, close } from 'react-redux-sweetalert';
import { addFlashMessage } from '../../actions/flashMessages';
import * as documentActions from '../../actions/documentActions';

class DocumentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
    this.editDocument = this.editDocument.bind(this);
    this.deleteDocument = this.deleteDocument.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }

  componentDidMount() {
    $('.tooltipped').tooltip({ delay: 50 });
  }
  editDocument(event) {
    event.preventDefault();
    const documentId = event.target.id;
    this.props.actions.setCurrentDocument(documentId);
    this.props.actions.displayCurrentDocument(documentId);
  }
  deleteDocument() {
    const documentId = this.state.id;
    this.props.actions.deleteDocument(documentId)
    .then(() => toastr.success('Document Successfully Deleted'))
    .catch(() => {
      this.props.addFlashMessage({
        type: 'error',
        text: 'Unable to delete document' });
      toastr.error(
        'Unable to delete document');
    });
    this.setState({ id: 0 });
  }
  showDocumentList() {
    return (
    <div>
    {
    this
    .props
    .myDocuments
    .map(document => <div id="panel-transparent"
    className="card blue-grey" key={document.id}>
      <div className="card-content white-text">
        Title: {document.title}
        <span className="badge list-badge">
          Access: {document.viewAccess}</span>
      </div>
      <div className="fixed-action-btn horizontal click-to-toggle edit">
        <a className="btn-floating blue-grey tooltipped"
          data-position="top" data-delay="50"
          data-tooltip="click to view more"
          >
          <i className="material-icons">more_vert</i>
        </a>
        <ul>
          <li onClick={this.editDocument} className="editDoc">
            <a href="#modal1"
            className="btn-floating blue-grey tooltipped"
            data-position="bottom" data-delay="50"
            data-tooltip="edit document">
              <i id={document.id} className="material-icons">mode_edit</i>
            </a>
          </li>
          <li>
            <button onClick={this.renderAlert}
              className="btn-floating red accent-4 tooltipped"
              data-position="bottom" data-delay="50"
              data-tooltip="delete document">
              <i id={document.id} className="material-icons">delete</i>
            </button>
          </li>
        </ul>
      </div>
    </div>)}
    <ReduxSweetAlert />
    </div>
    );
  }
  renderAlert(event) {
    event.preventDefault();
    let id = this.state.id;
    id = event.target.id;
    this.setState({ show: true, id });
    this.props.swal({
      title: 'Warning!',
      text: 'Are you sure?',
      type: 'info',
      showCancelButton: true,
      onConfirm: this.deleteDocument,
      onCancel: this.props.close,
    });
  }
  render() {
    return (
      <div>
        { this.props.myDocuments.length < 1 ?
          <div className="white-text"> You do not have any document yet</div> :
          this.showDocumentList()}
      </div>
    );
  }
}

DocumentList.propTypes = {
  actions: React.PropTypes.object.isRequired,
  myDocuments: React.PropTypes.array.isRequired,
  swal: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
};

/**
 *
 * dispatch document actions
 * @param {object} dispatch
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch),
    swal: bindActionCreators(swal, dispatch),
    close: bindActionCreators(close, dispatch),
    addFlashMessage: bindActionCreators(addFlashMessage, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(DocumentList);
