import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router';

import './fonts/AlteHaasGroteskRegular.ttf';
import './fonts/AlteHaasGroteskBold.ttf';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);

