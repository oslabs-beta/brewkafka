import React from 'react';
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'
import './style.css';

const root = ReactDOM.createRoot (document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);