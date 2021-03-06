import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './config/store';
import { Provider } from 'react-redux';
import './styles/index.scss';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
