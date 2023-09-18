import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-7er8yv4mx2d8mh4x.us.auth0.com"
    clientId="3X0r8oYAytsVnjnqeGCDji9y6ZQIagIx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
    <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

