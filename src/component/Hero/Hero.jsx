import './Hero.css'
import slider_photo_1 from './../../assets/images/banner-01.jpg'
import slider_photo_2 from './../../assets/images/banner-02.jpg'
import slider_photo_3 from './../../assets/images/banner-03.jpg'
function Hero() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide hero">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='desc_con'>
                        <p> Toronto, <span>Canada</span></p>
                        <h2>HURRY! GET THE VILLA FOR YOU </h2>
                    </div>
                    <img src={slider_photo_1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <div className='desc_con'>
                        <p> New york, <span>USA</span></p>
                        <h2>HURRY! GET THE VILLA FOR YOU </h2>
                    </div>
                    <img src={slider_photo_2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <div className='desc_con'>
                        <p> Berlin, <span>Germany</span></p>
                        <h2>HURRY! GET THE VILLA FOR YOU </h2>
                    </div>
                    <img src={slider_photo_3} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Hero