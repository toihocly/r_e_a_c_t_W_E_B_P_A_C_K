import { createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from '../reducers';
const reducer = combineReducers(reducers);
const logger = createLogger();

// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

export function initStore(initialState) {
  return createStore(reducer, initialState);
}
