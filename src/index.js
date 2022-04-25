import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Global styles={GlobalStyles} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

