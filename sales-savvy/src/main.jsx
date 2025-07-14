// This file is the entry point for the React application.
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import "./styles/root.css";
import "./styles/layout.css";
import "./styles/components.css";
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
)
  



/** import React to use JSX and its hooks.
 * 
 * ReactDOM is the library that renders your React components to the actual DOM (HTML page).
 * 
 * We're importing  (App.jsx),
 *  which contains the main structure/layout and routing logic of your website.
 * 
 * The BrowserRouter component is used to enable client-side routing,
 * 
 * AuthProvider	Shares auth state globally
 */
