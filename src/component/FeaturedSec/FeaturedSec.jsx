import './FeaturedSec.css'
import best_sec_photo from './../../assets/images/featured.jpg'
import featured_icon from './../../assets/images/featured-icon.png'
import DetailsBox from '../DetailsBox/DetailsBox'
import DetailsBoxesContainer from '../DetailsBoxesContainer/DetailsBoxesContainer'
import { useRef } from 'react'
import QuestionAnswerCard from '../QuestionAnswerCard/QuestionAnswerCard'



function FeaturedSec() {



    return (
        <div className='featured_sec'>
            <div className='f_i_c'>
                <img src={best_sec_photo} className='section_img ' alt="" />
                <div className='featured_icon'>
                    <img src={featured_icon} alt="" />
                </div>
            </div>
            <div>
                <p className='orange_title'>| FEATURED</p>
                <h2 className='sec_title'>Best Apartment & Sea View </h2>
                <div>
                <QuestionAnswerCard />
                </div>
               
            </div>

            <DetailsBoxesContainer />
        </div>
    )
}

export default FeaturedSec