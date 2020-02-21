// Order library > component > image > css
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { todoListActions } from '../../../../actions';
import './styles.scss';

const ViewAction = props => {
  // useSelector(state => console.log(state));
  // filter data by type
  const dispatch = useDispatch();
  const values = useSelector(state =>
    state.todoList.data.filter(i => i.type === state.todoList.type),
  );
  const handleDelete = valueId => {
    dispatch(todoListActions.deleteValue(valueId));
  };
  const handleChangeStatusType = valueId => {
    dispatch(todoListActions.changeStatusTypeValue(valueId));
  };

  return (
    <div className="root container">
      <ul className="viewdata">
        {values.map((i, index) => (
          <li key={index}>
            <span className={i.type} onClick={() => handleChangeStatusType(i.id)}>
              {i.value}
            </span>
            <FontAwesomeIcon onClick={() => handleDelete(i.id)} className="icon" icon="times" />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ViewAction;
