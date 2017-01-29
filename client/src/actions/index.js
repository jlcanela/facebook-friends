import * as types from './actionTypes';
import axios from 'axios';
//import { pushState } from 'redux-react-router';

function requestData() {
	return {type: types.REQ_DATA}
};

function receiveData(json) {
	return{
		type: types.RECV_DATA,
		data: json
	}
};

function receiveError(json) {
	return {
		type: types.RECV_ERROR,
		data: json
	}
};

export function fetchData(url) {
  console.log('FETCH_DATA');
	return function(dispatch) {
		dispatch(requestData());
		return axios({
			url: url,
			timeout: 1000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
        console.log('receiveData');
				dispatch(receiveData(response.data));
			})
			.catch(function(response){
        console.log('receiveError');
				dispatch(receiveError(response.data));
			//	dispatch(pushState(null,'/error'));
			})
	}
};

let currentId = 0;
function getId() {
  return currentId++;
}

export function addObject(name, description) {
  return {
    type: types.ADD,
    payload: {
      id: getId(),
      name,
      description
    }
  }
}

export function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    payload: name,
  }
}

export function updateDescription(description) {
  return {
    type: 'UPDATE_DESCRIPTION',
    payload: description,
  }
}
