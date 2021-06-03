import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MyComponentClass from './App';
import reportWebVitals from './reportWebVitals';
import Example from './App';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ContactForm from './App';




ReactDOM.render(
  <ContactForm />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

