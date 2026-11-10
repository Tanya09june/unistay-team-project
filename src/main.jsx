import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/global.css';

// Start the UniStay application
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
