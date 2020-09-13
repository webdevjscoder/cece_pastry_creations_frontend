import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// link below is to use bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from "./reducers/customerReducer";

const store = createStore(customerReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
        <App />
      </ Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more service service workers: https://bit.ly/CRA-PWA
