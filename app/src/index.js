import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
  }
  #root {
    box-sizing: border-box;
    max-width: 100%; 
    margin: 0 auto;
    height: 100vh;
    background-color: #511281;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }  
`
const store = createStore(reducer, applyMiddleware(logger, thunk));


ReactDOM.render(
  <Provider store={ store }>
    <GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById('root')
);
