// Order library > component > image > css
import React, { useState, useEffect } from 'react';

import './styles.scss';

const Filter = props => {
  return (
    <div className="root">
      <ul className="filter">
        <li>backlog</li>
        <li>in progress</li>
        <li>done</li>
      </ul>
    </div>
  );
};
export default Filter;
