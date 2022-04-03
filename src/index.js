import React from 'react';
import ReactDOMClinet from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root = ReactDOMClinet.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
);
