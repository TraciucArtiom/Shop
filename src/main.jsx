import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Links from './components/Links.jsx'
import HeroSection from './components/HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Links/>
  </StrictMode>,
)
