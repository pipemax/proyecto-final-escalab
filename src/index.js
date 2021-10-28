import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "core-js/stable";
import "regenerator-runtime/runtime";

/* Redux */
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
