import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CloudinaryContext } from 'cloudinary-react';

const cloudinaryConfig = {
  cloudName: 'cloud-space',
  apiKey: '469514856978432',
  apiSecret: 'YVzVuce1Kje6-CadfGkOKdXEV0s',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
