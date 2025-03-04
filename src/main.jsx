import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Links from './components/Links.jsx'
import UltimateSale from './components/UltimateSale.jsx'
import Features from './components/Features.jsx'
import EmptySection from './components/EmptySection.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Links/>
    <UltimateSale/>
    <EmptySection/>
    <Features/>
  </StrictMode>,
)
