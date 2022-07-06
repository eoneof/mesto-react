import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';

// Popups mount on click and dismount on close
// `hidden` clesses are unnecessary, use `isOpen` instead
const root = ReactDOM.createRoot(document.querySelector('#mesto-react-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
