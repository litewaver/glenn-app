import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx'; // <-- use App as the router/layout root

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* The App component will handle the routing and rendering of nested routes */}
    </BrowserRouter>
  </StrictMode>
);

