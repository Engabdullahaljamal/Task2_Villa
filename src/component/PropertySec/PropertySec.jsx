import './PropertySec.css'
import property_img_1 from './../../assets/images/property-01.jpg'
import property_img_2 from './../../assets/images/property-02.jpg'
import property_img_3 from './../../assets/images/property-03.jpg'
import property_img_4 from './../../assets/images/property-04.jpg'
import property_img_5 from './../../assets/images/property-05.jpg'
import property_img_6 from './../../assets/images/property-06.jpg'
import PropertyCard from '../PropertyCard/PropertyCard'

function PropertySec() {
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
            Bathrooms: '4',
            floor: '38th',
        },
        {
            image: property_img_6,
            title: 'Modern Condo',
            price: '$450.000',
            location: '22 New Street Portland, OR 16540',
            bedrooms: '3',
            area: '165m2',
            parking: '3 cars',
            bathrooms: '2',
            floor: '26th',
        },
    ]
    return (
        <div className='property_sec'>
            {
                house_details.map((h) => {
                    return <PropertyCard house_details={h} />
                })
            }
        </div>
    )
}

export default PropertySec