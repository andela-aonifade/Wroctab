import React, { PropTypes } from 'react';

const DashboardDocumentList = ({ onClick, documents }) => {
  return (
    <div className= "row">
      {documents
        .map(document => <div key={document.id}
          className = "col s12 m3">
          <div className="card-panel z-depth-5" id="panel-transparent">
            <div className="card-content black-text" >
              <span className="card-title">
                 DOCUMENT TITLE
              </span>
              <hr />
              <p>{document.title}</p>
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
