import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {UserContextProvider} from "./components/contexts/userContext"
import { OtpContextProvider } from './components/contexts/otpContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      
      <BrowserRouter>
      <OtpContextProvider>
      <App />
      </OtpContextProvider>
    </BrowserRouter>
    
    </UserContextProvider>
    
  </React.StrictMode>
);


