import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-marshrutyzacia">
      <App />
    </BrowserRouter>
  </StrictMode>);