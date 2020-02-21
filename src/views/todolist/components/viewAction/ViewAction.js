// Order library > component > image > css
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const ViewAction = props => {
  const { onChangeCount } = props;
  return (
    <div className="root container">
      <ul className="viewdata">
        <li>
          <span>lorem</span> <FontAwesomeIcon className="icon" icon="times" />
        </li>
        <li>
          <span>lorem</span> <FontAwesomeIcon className="icon" icon="times" />
        </li>
        <li>
          <span>lorem</span> <FontAwesomeIcon className="icon" icon="times" />
        </li>
      </ul>
    </div>
  );
};
export default ViewAction;
