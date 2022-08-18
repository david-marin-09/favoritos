import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import  {AppContextProvider} from './Context/AppContext'
//import DataContext, { DataProvider } from './Context/DataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
      <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


