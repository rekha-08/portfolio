import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';    // <-- note the .js extension here
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
