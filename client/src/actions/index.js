import * as types from './actionTypes'
import axios from 'axios'
// import { pushState } from 'redux-react-router';

function requestData () {
  return {type: types.REQ_DATA}
};

function receiveData (json) {
  return {
    type: types.RECV_DATA,
    data: json
  }
};

function receiveError (json) {
  return {
    type: types.RECV_ERROR,
    data: json
  }
};

export function fetchData (url) {
  return function (dispatch) {
    dispatch(requestData())
    return axios({
      url: url,
      timeout: 1000,
      method: 'get',
      responseType: 'json'
    })
    .then(function (response) {
      dispatch(receiveData(response.data))
    })
    .catch(function (response) {
      dispatch(receiveError(response.data))
    })
  }
};

export function adminUpdating (name) {
  return {
    type: types.ADMIN_UPDATING,
    name
  }
}

export function adminUpdated (name) {
  return {
    type: types.ADMIN_UPDATED,
    name
  }
}

export function adminUpdateError (name) {
  return {
    type: types.ADMIN_UPDATE_ERROR,
    name
  }
}

export function setAdmin (name) {
  return function (dispatch) {
    dispatch(adminUpdating(name))
    return axios({
      url: 'http://localhost:3001/api/admin/' + name,
      timeout: 1000,
      method: 'post',
      responseType: 'json'
    })
      .then(function (response) {
        console.log('A')
        dispatch(adminUpdated(response.data))
      })
      .catch(function (response) {
        console.log('B')
        dispatch(adminUpdateError(response.data))
      })
  }
}

let currentId = 0
function getId () {
  return currentId++
}

export function addObject (name, description) {
  return {
    type: types.ADD,
    payload: {
      id: getId(),
      name,
      description
    }
  }
}

export function updateName (name) {
  return {
    type: 'UPDATE_NAME',
    payload: name
  }
}

export function updateDescription (description) {
  return {
    type: 'UPDATE_DESCRIPTION',
    payload: description
  }
}
