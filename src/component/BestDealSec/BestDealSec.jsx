import './BestDealSec.css'
import b_d_apartment_img from './../../assets/images/property-05.jpg'
import b_d_villa_img from './../../assets/images/property-06.jpg'
import b_d_penthouse_img from './../../assets/images/property-03.jpg'
import { FaCalendar } from "react-icons/fa";
import { useRef, useState } from 'react';
function BestDealSec() {
    const button_one_Ref = useRef(null);

    const button_two_Ref = useRef(null);
    const button_three_Ref = useRef(null);

    const property_details = [
        {
            type: 'apartment',
            Total_Flat_Space: '185 m2',
            Floor_Number: '26th',
            Parking_Available: 'yes',
            Number_of_rooms: '4',
            Payment_Process: 'Bank',
            image: b_d_apartment_img,
            desc_tile: 'Extra Info About Property',
            description: "in apartment Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.When you need free Css templates, you can simply type TemplateMo in any search engine website.In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
        },
        {
            type: 'villa House',
            Total_Flat_Space: '250 m2',
            Floor_Number: '26th',
            Parking_Available: 'yes',
            Number_of_rooms: '5',
            Payment_Process: 'Bank',
            image: b_d_villa_img,
            desc_tile: 'Extra Info About Villa',
            description: " in villa house Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.When you need free Css templates, you can simply type TemplateMo in any search engine website.In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
        },
        {
            type: 'penthouse',
            Total_Flat_Space: '320 m2',
            Floor_Number: '34th',
            Parking_Available: 'yes',
            Number_of_rooms: '6',
            Payment_Process: 'Bank',
            image: b_d_penthouse_img,
            desc_tile: 'Extra Info About Penthouse',
            description: "in penthouse Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.When you need free Css templates, you can simply type TemplateMo in any search engine website.In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
        },
    ]

    const [display_info, setDisplay_info] = useState(property_details[0])

    const apartment_info = () => {
        setDisplay_info(property_details[0])
        button_one_Ref.current.classList.add('button_active')
        button_two_Ref.current.classList.remove('button_active')
        button_three_Ref.current.classList.remove('button_active')
    }
    const villa_info = () => {
        setDisplay_info(property_details[1])
        button_one_Ref.current.classList.remove('button_active')
        button_two_Ref.current.classList.add('button_active')
        button_three_Ref.current.classList.remove('button_active')
    }
    const penthouse_info = () => {
        setDisplay_info(property_details[2])
        button_one_Ref.current.classList.remove('button_active')
        button_two_Ref.current.classList.remove('button_active')
        button_three_Ref.current.classList.add('button_active')
    }
    return (
        <div className='best_deal_sec' id="Property_Details">
            <div className='best_title_container'>
                <div>
                    <p className='orange_title'>| BEST DEAL</p>
                    <h2 className='sec_title'>Find Your Best Deal Right Now !</h2>

                </div>
                <div className='button_container'>
                    <button className='button_active' ref={button_one_Ref} onClick={apartment_info}>Apartment</button>
                    <button ref={button_two_Ref} onClick={villa_info}> Villa Houses</button>
                    <button ref={button_three_Ref} onClick={penthouse_info}>Penthouse</button>

                </div>

            </div>
            <div className='best_deal_container'>
                <div className='details_container'>
                    <li><span>Total Flat Space </span> <p>{display_info.Total_Flat_Space}</p></li>
                    <li><span> Floor Number </span> <p> {display_info.Floor_Number}</p></li>
                    <li><span> Parking Available</span> <p> {display_info.Parking_Available}</p></li>
                    <li><span>Number of rooms </span> <p> {display_info.Number_of_rooms}</p></li>
                    <li><span>Payment Process </span> <p> {display_info.Payment_Process}</p></li>

                </div>
                <div>
                    <img src={display_info.image} alt="" />
                </div>
                <div>
                    <p> {display_info.desc_tile}</p>
                    <p>
                        {display_info.description}

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