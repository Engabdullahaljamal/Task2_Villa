import './DetailsBox.css'

function DetailsBox({ details }) {
    return (
        <div className='details_box' >
            <div>
                <img src={details.image} alt="" />
                <p>{details.image_desc}</p>
            </div>

            <div>
                <h3> {details.title}</h3>
                <p>{details.desc}</p>
            </div>
        </div>
    )
}

export default DetailsBox