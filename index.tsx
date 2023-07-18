import 'file-saver';
import 'react-circular-progressbar/dist/styles.css';
import 'react-notifications/lib/notifications.css';
import 'semantic-ui-css/semantic.min.css';

import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
   <BrowserRouter>
        <App />,
   </BrowserRouter>,

    document.getElementById('root')
);
