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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSec />
      <VideoNewSec />
      <BestDealSec />
      <PropertySec />
      <ContactSec />
      <Footer />

    </>

  )
}

export default App
