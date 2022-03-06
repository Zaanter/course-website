import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App'
import { AuthProvider } from './context/AuthContext';
import Home from './containers/user/HomeScreen'
import React from 'react'
import firebaseConfig from '../firebaseConfig'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { render } from 'react-dom'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

const root = document.getElementById('root')
render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider auth={auth}>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
    
    ,root
);