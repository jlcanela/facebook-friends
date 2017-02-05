import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'

const logger = createLogger()

export const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware, promiseMiddleware, logger)
)
