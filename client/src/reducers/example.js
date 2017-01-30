import * as types from '../actions/actionTypes';

export function exampleReducer(state = {
	isLoading: false,
	data: [],
  adminName: '',
  adminStatus: '',
	error: false}
, action = null) {
	switch(action.type) {
		case types.RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, error: true});
		case types.RECV_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case types.REQ_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });

    case types.ADMIN_UPDATING:
    	return Object.assign({}, state, {adminName: action.name, adminStatus: 'UPDATING' });
    case types.ADMIN_UPDATED:
      return Object.assign({}, state, {adminName: action.name, adminStatus: '' });
    case types.ADMIN_UPDATE_ERROR:
      return Object.assign({}, state, {adminName: action.name, adminStatus: 'ERROR' });
		default:
			return state;
	}
};
