import './BestDealSec.css'
import best_deal_img from './../../assets/images/property-05.jpg'
import { FaCalendar } from "react-icons/fa";
function BestDealSec() {
    return (
        <div className='best_deal_sec'>
            <div className='best_title_container'>
                <div>
                    <p className='orange_title'>| BEST DEAL</p>
                    <h2 className='sec_title'>Find Your Best Deal Right Now !</h2>

                </div>
                <div className='button_container'>
                    <button>Apartment</button>
                    <button> Villa Houses</button>
                    <button>Penthouse</button>

                </div>

            </div>
            <div className='best_deal_container'>
                <div className='details_container'>
                    <li><span>Total Flat Space </span> <p>185 m2</p></li>
                    <li><span> Floor number </span> <p>26th</p></li>
                    <li><span> Parking Available</span> <p>Yes</p></li>
                    <li><span>Number of rooms </span> <p>4</p></li>
                    <li><span>Payment Process </span> <p>Bank</p></li>

                </div>
                <div>
                    <img src={best_deal_img} alt="" />
                </div>
                <div>
                    <p> Extra Info About Property</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua
                        quised ipsum suspendisse.
                    </p>
                    <p>
                        When you need free Css templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page
                        Layouts, etc.
                    </p>
                    <div className="nav-item but" >
                        <button className='sch_button'> <div><FaCalendar /></div>  Schedule a visit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BestDealSec