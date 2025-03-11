import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Links from './components/Links.jsx'
import ImageContainer from "./components/ImageContainer";
import Features from './components/Features.jsx'
import EmptySection from './components/EmptySection.jsx'
import { BookingSection } from "./components/BookingSection.jsx";
import CategoriesGrid from "./components/CategoriesGrid";
import Slider from './components/Slider.jsx'
// import ProductList from './components/ProductList.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Links/>
    <ImageContainer/>
    <EmptySection/>
    <Features/>
    <CategoriesGrid />
    <Slider/>
    <BookingSection />
    {/* <ProductList/> */}
    <Contacts/>
    <Footer/>
  </StrictMode>,
)
