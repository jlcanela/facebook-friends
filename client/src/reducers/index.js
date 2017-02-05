import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux' // might need to remove
import { exampleReducer } from './example'

const objects = (state = [{id: -1, name: 'name', description: 'desc'}], action) => {
  switch (action.type) {
    case types.ADD:
      return state.concat([action.payload])
    default:
      return state
  }
}

const form = (state = { name: '', description: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload }
    case 'UPDATE_DESCRIPTION':
      return { ...state, description: action.payload }
    case 'ADD':
      return { name: '', description: '' }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  objects: objects,
  form: form,
  example: exampleReducer
})

export default rootReducer
