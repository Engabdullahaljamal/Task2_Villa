import './DetailsBoxesContainer.css'
import info_img_1 from './../../assets/images/info-icon-01.png'
import info_img_2 from './../../assets/images/info-icon-02.png'
import info_img_3 from './../../assets/images/info-icon-03.png'
import info_img_4 from './../../assets/images/info-icon-04.png'
import DetailsBox from '../DetailsBox/DetailsBox'

function DetailsBoxesCintainer() {
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
        <div className='details_container'>
            {
                details.map((e) => {
                    return <DetailsBox details={e} />
                })
            }
        </div>
    )
}

export default DetailsBoxesCintainer