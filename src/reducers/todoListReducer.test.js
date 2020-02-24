import React from 'react';
import { shallow } from 'enzyme';
import TodoListReducer from './todoListReducer';
import { todoListTypes } from '../actions';

const initData = {
  error: '',
  type: 'backlog',
  data: [
    { id: '1', value: 'Webpack', type: 'backlog' },
    { id: '2', value: 'React', type: 'backlog' },
    { id: '3', value: 'Redux', type: 'inprogress' },
    { id: '4', value: 'FontAwesome', type: 'inprogress' },
    { id: '5', value: 'Bootstrap4', type: 'done' },
  ],
};

describe('<MyComponent />', () => {
  it('return initData with case default action type', () => {
    expect(
      TodoListReducer(initData, {
        type: 'null',
      }),
    ).toEqual(initData);
  });

  it('return newData with case add in action type', () => {
    const newData = { ...initData };
    const newValue = { value: 'new value', type: 'backlog' };
    newData.data.push(newValue);
    expect(
      TodoListReducer(initData, {
        type: todoListTypes.ADD,
        payload: newValue,
      }).data,
    ).toEqual(expect.arrayContaining([expect.objectContaining(newValue)]));
  });

  it('return newData with case delete in action type', () => {
    const newData = { ...initData };
    const deleteValue = { id: '2', value: 'React', type: 'backlog' };
    newData.data = newData.data.filter(i => i.id !== deleteValue.id);
    expect(
      TodoListReducer(initData, {
        type: todoListTypes.DELETE,
        payload: deleteValue.id,
      }),
    ).toEqual(newData);
  });

  //   it('return newData with case change type in action type', () => {
  //     expect(
  //       TodoListReducer(initData, {
  //         type: 'null',
  //       }),
  //     ).toEqual(initData);
  //   });
});
