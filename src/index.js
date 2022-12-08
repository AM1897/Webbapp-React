import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ShoppingCartContextProvider} from "./context/ShoppingCartContext";

ReactDOM.render(
    <React.StrictMode>
        <ShoppingCartContextProvider>
            <App/>
        </ShoppingCartContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
