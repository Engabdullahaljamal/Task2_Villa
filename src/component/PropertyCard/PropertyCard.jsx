import './PropertyCard.css'


function PropertyCard({ house_details }) {
    return (
        <div className='property_card'>
            <img src={house_details.image} alt="" />
            <div className='price_container'>
                <p>{house_details.title}</p>
                <span> {house_details.price}</span>
            </div>
            <h4>{house_details.location} </h4>
            <div className='house_details'>
                <div>
                    <p> Bedrooms : <span> {house_details.bedrooms}</span></p>
                    <p> Area : <span> {house_details.area}</span></p>
                    <p> Parking : <span> {house_details.parking}</span></p>

                </div>
                <div>
                    <p> Bathrooms : <span>{house_details.bathrooms}</span></p>
                    <p> Floor : <span>{house_details.floor}</span></p>
                </div>
            </div>
            <button>Schedule a Visit</button>
        </div>
    )
}

export default PropertyCard