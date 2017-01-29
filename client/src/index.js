import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchData } from './actions';
import './index.css';



function loadData() {
	store.dispatch(fetchData('http://localhost:3001/api/users'));
};

loadData();

ReactDOM.render(
  <Provider store={store}>
  <App onClick={ () => loadData() } />
  </Provider>,
  document.getElementById('root')
);
