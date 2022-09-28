import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import App1 from './input';
import App2 from './textarea';
import App3 from './car';
import Count from './count';
import Login  from './login';
import Grid from './grid';
import Grid1 from './grid1';
import Inputs from './input';
import Cont from './count';
import Bsccs from './meganav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Grid1 />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
