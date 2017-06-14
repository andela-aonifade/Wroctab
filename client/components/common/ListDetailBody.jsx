import React, { PropTypes } from 'react';

const ListDetailBody = ({ title, value }) => {
  return (
    <li className="collection-item blue-grey" id="panel-transaparent">
      <div className="row">
        <div className="col s5 white-text darken-1">
        <i className="mdi-action-wallet-travel"></i> {title}</div>
        <div className="col s7 white-text text-darken-4 right-align">
        {value}</div>
      </div>
    </li>
  );
};

ListDetailBody.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default ListDetailBody;
