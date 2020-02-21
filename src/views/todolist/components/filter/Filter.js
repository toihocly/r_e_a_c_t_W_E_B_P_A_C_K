// Order library > component > image > css
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoListActions } from '../../../../actions';
import './styles.scss';

const Filter = props => {
  // delete all active css
  // active css into
  // dispatch  change type to redux
  const typeFilter = useSelector(state => state.todoList.type);
  const dispatch = useDispatch();
  const handleChangeTypes = type => {
    dispatch(todoListActions.changeType(type));
  };

  const optionTypes = [
    {
      id: 1,
      type: 'backlog',
      name: 'BACKLOG',
    },
    { id: 2, type: 'inprogress', name: 'IN PROGRESS' },
    { id: 3, type: 'done', name: 'DONE' },
  ];

  return (
    <div className="root">
      <ul className="filter">
        {optionTypes.map((i, index) => (
          <li
            key={index}
            className={`${i.type === typeFilter && 'active'}`}
            onClick={() => handleChangeTypes(i.type)}
          >
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
