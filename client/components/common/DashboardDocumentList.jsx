import React, { PropTypes } from 'react';
import moment from 'moment';

const DashboardDocumentList = ({ onClick, documents }) => {
  return (
    <div className= "row">
      {documents
        .map(document => <div key={document.id}
          className = "col s12 m4">
          <div className="card blue-grey z-depth-5  darken-1"
            id="panel-transparent">
            <div className="card-content white-text" id="title" >
              <span className="card-title">
                DOCUMENT INFO
              </span>
              <hr />
              <p>{document.title}<br />
              {moment(document.createdAt).format('llll')}</p>
            </div>
            <div className="card-action" id="panel-footer">
              <a href="#"><i className="material-icons right"
              onClick={onClick} id={document.id}>visibility</i></a>
              <a href="#">By: <em>{document.User.name}</em></a>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

DashboardDocumentList.propTypes = {
  documents: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DashboardDocumentList;
