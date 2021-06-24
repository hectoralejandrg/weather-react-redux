import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './redux/weatherReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

