import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './assignment3';
import reportWebVitals from './reportWebVitals';
import Googleh from './component/Googleh';
import { Assign2 } from './component/assignment2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Googleh/>
    <Assign2/>
  </React.StrictMode>
);


reportWebVitals();
