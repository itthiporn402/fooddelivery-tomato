import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextPorvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreContextPorvider>
            <App/>
        </StoreContextPorvider>  
    </BrowserRouter>
)