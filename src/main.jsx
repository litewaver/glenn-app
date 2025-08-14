import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Outlet } from 'react-router-dom';
import '../src/index.css';
import App from './App'; // <-- use App as the router/layout root




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      {/* The App component will handle the routing and rendering of nested routes */}
    </BrowserRouter>
  </StrictMode>
);

