import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Router} from "react-router-dom";
import {Context} from "./Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/technolomkg">
            <Context>
                <App />
            </Context>
        </BrowserRouter>
    </React.StrictMode>,
);

