import './FeaturedSec.css'
import best_sec_photo from './../../assets/images/featured.jpg'
import info_img_1 from './../../assets/images/info-icon-01.png'
import info_img_2 from './../../assets/images/info-icon-02.png'
import info_img_3 from './../../assets/images/info-icon-03.png'
import info_img_4 from './../../assets/images/info-icon-04.png'
import featured_icon from './../../assets/images/featured-icon.png'
import DetailsBox from '../DetailsBox/DetailsBox'



function FeaturedSec() {
    const details = [
        {
            image: info_img_1,
            title: '250 m2',
            desc: 'Total Flat Space',
        },
        {
            image: info_img_2,
            title: 'Contract',
            desc: 'Contract ready',
        },
        {

            image: info_img_3,
            image_desc: 'Process',
            title: 'Payment',
            desc: 'Payment',
        },
        {
            image: info_img_4,
            image_desc: 'Control',
            title: 'Safety',
            desc: '24/7 Under',
        },
    ]
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
                <div className='best_card'>

                    <li>Best useful links ?</li>
                    <li>Get <span>the best villa </span>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span> best free CSS templates </span>in the world. Please tell your friends about it.
                        <p>How does this work ?</p>
                    </li>
                    <li>
                        Why is Villa Agency the best ?
                    </li>


                </div>
            </div>
            <div className='details_container'>
                {
                    details.map((e) => {
                        return <DetailsBox details={e} />
                    })
                }
            </div>

        </div>
    )
}

export default FeaturedSec