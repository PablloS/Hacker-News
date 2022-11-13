import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux'; 
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ), 
)); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Provider store={store}>
    <App />
  </Provider>
)
