const uuidv4 = require('uuid/v4');
import { todoListTypes } from '../actions';

const initialState = {
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

const addAction = (state, action) => {
  return { ...state, data: [...state.data, { id: uuidv4(), ...action.payload }] };
};

const changeTypeAction = (state, action) => {
  return { ...state, type: action.payload };
};

const deleteAction = (state, action) => {
  return { ...state, data: state.data.filter(i => i.id != action.payload) };
};

const changeStatusTypeAction = (state, action) => {
  const max = 3;
  const types = ['backlog', 'inprogress', 'done'];
  const newData = [...state.data];
  const indexCur = newData.findIndex(i => i.id === action.payload);
  const indexType = types.findIndex(i => i === newData[indexCur].type);
  if (indexType < max - 1) {
    newData[indexCur].type = types[indexType + 1];
  }
  return { ...state, data: newData };
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case todoListTypes.ADD:
      return addAction(state, action);
    case todoListTypes.TYPES:
      return changeTypeAction(state, action);
    case todoListTypes.DELETE:
      return deleteAction(state, action);
    case todoListTypes.STATUS_TYPE:
      return changeStatusTypeAction(state, action);
    default:
      return state;
  }
}
