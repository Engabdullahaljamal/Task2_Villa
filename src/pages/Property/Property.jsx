import './Property.css'
import PagesHero from '../../component/PagesHero/PagesHero'
import { useRef, useState } from 'react';
import property_img_1 from './../../assets/images/property-01.png'
import property_img_2 from './../../assets/images/property-02.jpg'
import property_img_3 from './../../assets/images/property-03.jpg'
import property_img_4 from './../../assets/images/property-04.jpg'
import property_img_5 from './../../assets/images/property-05.jpg'
import property_img_6 from './../../assets/images/property-06.jpg'
import PropertyCard from '../../component/PropertyCard/PropertyCard';

function Property() {

    const house_details = [
        {
            image: property_img_1,
            title: 'Luxury Villa',
            price: '$2.264.000',
            location: '18 New Street Miami, OR 97219',
            bedrooms: '8',
            area: '545m2',
            parking: '6 spots',
            bathrooms: '8',
            floor: '3',
        },
        {
            image: property_img_2,
            title: 'Luxury Villa',
            price: '$1.180.000',
            location: '54 Mid Street Florida, OR 27001',
            bedrooms: '6',
            area: '450m2',
            parking: '8 spots',
            bathrooms: '5',
            floor: '3',
        },
        {
            image: property_img_3,
            title: 'Luxury Villa',
            price: '$1.460.000',
            location: '26 Old Street Miami, OR 38540',
            bedrooms: '5',
            area: '225m2',
            parking: '10 spots',
            bathrooms: '4',
            floor: '3',
        },
        {
            image: property_img_4,
            title: 'Apartment',
            price: '$584.500',
            location: '12 New Street Miami, OR 12650',
            bedrooms: '4',
            area: '125m2',
            parking: '2 cars',
            bathrooms: '3',
            floor: '25th',
        },
        {
            image: property_img_5,
            title: 'Penthouse',
            price: '$925.600',
            location: '34 Beach Street Miami, OR 42680',
            bedrooms: '4',
            area: '180m2',
            parking: '2 cars',
            bathrooms: '4',
            floor: '38th',
        },
        {
            image: property_img_6,
            title: 'Penthouse',
            price: '$450.000',
            location: '22 New Street Portland, OR 16540',
            bedrooms: '3',
            area: '165m2',
            parking: '3 cars',
            bathrooms: '2',
            floor: '26th',
        },
        {
            image: property_img_3,
            title: 'Apartment',
            price: '$980.000',
            location: '14 Mid Street Miami, OR 36450',
            bedrooms: '8',
            area: '550m2',
            parking: '12 spots',
            bathrooms: '8',
            floor: '3',
        },
        {
            image: property_img_2,
            title: 'Apartment',
            price: '$1.530.000',
            location: '26 Old Street Miami, OR 12870',
            bedrooms: '12',
            area: '380m2',
            parking: '14 spots',
            bathrooms: '15',
            floor: '3',
        },
        {
            image: property_img_1,
            title: 'Apartment',
            price: '$3.145.000',
            location: '34 New Street Miami, OR 24650',
            bedrooms: '10',
            area: '860m2',
            parking: '10 spots',
            bathrooms: '12',
            floor: '3',
        },
    ]
    const [display_info, setDisplay_info] = useState(house_details)
    const show_all_buttons = useRef(null)
    const button_one_Ref = useRef(null);
    const button_two_Ref = useRef(null);
    const button_three_Ref = useRef(null);
    const all_info = () => {
        setDisplay_info(house_details)
        show_all_buttons.current.classList.add('button_active')
        button_one_Ref.current.classList.remove('button_active')
        button_two_Ref.current.classList.remove('button_active')
        button_three_Ref.current.classList.remove('button_active')
    }
    const apartment_info = () => {
        setDisplay_info([])
        const arr = []
        house_details.forEach((h, i) => {
            if (h.title == 'Apartment') {
                arr.push(h)
                setDisplay_info(arr)
            }
        })
        show_all_buttons.current.classList.remove('button_active')
        button_one_Ref.current.classList.add('button_active')
        button_two_Ref.current.classList.remove('button_active')
        button_three_Ref.current.classList.remove('button_active')
    }
    const villa_info = () => {
        setDisplay_info([])
        const arr = []
        house_details.forEach((h, i) => {
            if (h.title == 'Luxury Villa') {
                arr.push(h)
                setDisplay_info(arr)
            }
        })
        show_all_buttons.current.classList.remove('button_active')
        button_one_Ref.current.classList.remove('button_active')
        button_two_Ref.current.classList.add('button_active')
        button_three_Ref.current.classList.remove('button_active')
    }
    const penthouse_info = () => {
        setDisplay_info([])
        const arr = []
        house_details.forEach((h, i) => {
            if (h.title == 'Penthouse') {
                arr.push(h)
                setDisplay_info(arr)

            }
        })
        show_all_buttons.current.classList.remove('button_active')
        button_one_Ref.current.classList.remove('button_active')
        button_two_Ref.current.classList.remove('button_active')
        button_three_Ref.current.classList.add('button_active')
    }
    return (
        <div className='Property_page'>
            <PagesHero title='PROPERTY' />
            <div className='button_container'>
                <button className='filter_button button_active ' ref={show_all_buttons} onClick={all_info}>Show ALL</button>
                <button className='filter_button ' ref={button_one_Ref} onClick={apartment_info}>Apartment</button>
                <button className='filter_button' ref={button_two_Ref} onClick={villa_info}> Villa House</button>
                <button className='filter_button' ref={button_three_Ref} onClick={penthouse_info}>Penthouse</button>

            </div>

            <div className='property_sec'>
                {
                    display_info.map((h) => {
                        return <PropertyCard house_details={h} />
                    })
                }

            </div>
        </div>
    )
}

export default Property