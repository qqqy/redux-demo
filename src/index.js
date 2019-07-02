import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  // Store is whatever the createStore function returns. We pass it into Provider to allow Redux to load for the first time.
  <Provider store={store} >
    <App />
  </Provider>
, document.getElementById('root'));
