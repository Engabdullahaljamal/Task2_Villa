import './PagesHero.css'
import contact_hero from './../../assets/images/page-heading-bg.jpg'
function PagesHero({ title }) {
    return (
        <div className='pages_hero'>
            <img src={contact_hero} alt="" />
            <h2>{title}</h2>
        </div>
    )
}

export default PagesHero