import React from 'react'
import Hero from '../../component/Hero/hero'
import FeaturedSec from '../../component/FeaturedSec/FeaturedSec'
import VideoNewSec from '../../component/VideoNewSec/VideoNewSec'
import BestDealSec from '../../component/BestDealSec/BestDealSec'
import PropertySec from '../../component/PropertySec/PropertySec'
import ContactSec from '../../component/ContactSec/ContactSec'

function LandingPage() {
    return (
        <div>
            <Hero />
            <FeaturedSec />
            <VideoNewSec />
            <BestDealSec />
            <PropertySec />
            <ContactSec />
        </div>
    )
}

export default LandingPage