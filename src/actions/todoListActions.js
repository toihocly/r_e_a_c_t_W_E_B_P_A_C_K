import { todoListTypes } from './actionTypes';

export const todoListActions = {
  addValue,
  changeType,
  deleteValue,
  changeStatusTypeValue,
};

function addValue(newValue) {
  return { type: todoListTypes.ADD, payload: newValue };
}

function changeType(newType) {
  return { type: todoListTypes.TYPES, payload: newType };
}

function deleteValue(valueId) {
  return { type: todoListTypes.DELETE, payload: valueId };
}

function changeStatusTypeValue(valueId) {
  return { type: todoListTypes.STATUS_TYPE, payload: valueId };
}
