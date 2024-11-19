import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './assets/Home.jsx'
import Logo from './assets/Logo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Logo />
    <Home />
  </StrictMode>
)
