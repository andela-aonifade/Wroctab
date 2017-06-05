import React, { PropTypes } from 'react';
import officeImg from '../home/images/office.jpg';

const DashboardDocumentList = ({ onClick, documents }) => {
  return (
    <div className= "row">
      {documents
        .map(document => <div key={document.id}
          className = "col s12 m4">
          <div className="card z-depth-5" >
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={officeImg} />
            </div>
            <div className="card-content" >
              <span className="card-title activator grey-text text-darken-4">
                <a className="pointer" id={document.id}
                onClick={onClick}> {document.title} </a>
                <i className="material-icons right"
                onClick={onClick} id={document.id}>visibility</i>
              </span>
              <p><a href="#">Author: {document.User.name}</a></p>
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
