import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/hero'
import FeaturedSec from './component/FeaturedSec/FeaturedSec'
import VideoNewSec from './component/VideoNewSec/VideoNewSec'
import BestDealSec from './component/BestDealSec/BestDealSec'
import PropertyCard from './component/PropertyCard/PropertyCard'
import PropertySec from './component/PropertySec/PropertySec'
import ContactSec from './component/ContactSec/ContactSec'
import Footer from './component/Footer/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUS/ContactUs'
import Property from './pages/Property/Property'
import SingleProperty from './pages/SingleProperty/SingleProperty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Task3_Villa' element={<LandingPage />} />
        <Route path='/Task3_Villa/contact_us' element={<ContactUs />} />
        <Route path='/Task3_Villa/Property' element={<Property />} />
        <Route path='/Task3_Villa/Single_Property' element={<SingleProperty />} />
      </Routes>
      <Footer />

    </>

  )
}

export default App
