import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import './index.scss';
import 'react-tooltip/dist/react-tooltip.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);