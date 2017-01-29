import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';


export const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware),
  applyMiddleware(promiseMiddleware),
  applyMiddleware(logger));
