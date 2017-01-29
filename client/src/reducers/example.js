import * as types from '../actions/actionTypes';

export function exampleReducer(state = {
	isLoading: false,
	data: [],
	error: false}
, action = null) {
	switch(action.type) {
		case types.RECV_ERROR:
      console.log('RECV_ERROR');
			return Object.assign({}, state, {isLoading: false, error: true});
		case types.RECV_DATA:
      console.log('RECV_DATA');
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case types.REQ_DATA:
      console.log('REQ_DATA');
			return Object.assign({}, state, {isLoading: true, error: false });
		default:
			return state;
	}
};
