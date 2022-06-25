import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/fonts/RuneScape-Chat-Bold-07.ttf'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
