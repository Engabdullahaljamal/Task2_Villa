import BestDealSec from '../../component/BestDealSec/BestDealSec'
import DetailsBoxesContainer from '../../component/DetailsBoxesContainer/DetailsBoxesContainer'
import PagesHero from '../../component/PagesHero/PagesHero'
import QuestionAnswerCard from '../../component/QuestionAnswerCard/QuestionAnswerCard'
import single_property_img from './../../assets/images/property-01.jpeg'

import './SingleProperty.css'

function SingleProperty() {
    return (
        <div className='single_property'>
            <PagesHero title='SINGLE PROPERTY' />
            <div className='single_property_details_container'>
                <div className='single_property_details_container_left'>
                    <img src={single_property_img} alt="" />
                    <p className='p_con'>Apartment</p>
                    <h2>24 New Street Miami, OR 24560</h2>
                    <p className='gray_color'>Get <span>the best villa agency</span> HTML CS Bootstrap Template for your company website. TemplateMo provides you the <span>best free CSS templates</span> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumbir yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                    </p>
                    <p className='gray_color'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cardigan hoodie pop-up.</p>
                    <QuestionAnswerCard />
                </div>
                <DetailsBoxesContainer />
            </div>
            <BestDealSec />

        </div>
    )
}

export default SingleProperty