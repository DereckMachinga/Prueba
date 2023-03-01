import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import router from '../Router/route';
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './Context/AppProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
