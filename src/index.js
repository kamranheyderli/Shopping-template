import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/index.css";
import { BrowserRouter } from 'react-router-dom';
// main scss
import "./assets/styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>


);


