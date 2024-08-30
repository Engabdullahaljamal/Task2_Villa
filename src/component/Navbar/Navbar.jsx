import './Navbar.css'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {
    const none = () => {
        const nav_bar_down_ul = document.querySelector('#navbarSupportedContent')
        nav_bar_down_ul.classList.remove('show');
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h2>VILLA</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon  text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-white" aria-current="page" href="#" onClick={() => { none() }}>Home</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link text-white" href="#Property" onClick={() => { none() }}>Property</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link text-white" href="#Property_Details" onClick={() => { none() }}>Property Details</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link  text-white" aria-disabled="true" href='#Contact_Us' onClick={() => { none() }}>Contact US</a>
                            </li>

                            <li className="nav-item but" onClick={() => { none() }}>
                                <button> <div><FaCalendar /></div>  Schedule a visit</button>
                            </li>
                            <li className="nav-item">
                                <div className='flex'>
                                    <MdEmail />
                                    <p>info@company.com</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='flex'>
                                    < FaLocationDot />
                                    <p>Sunny isles Beach,FL 33160</p>
                                </div>
                            </li>
                            <li className="nav-item right_part">
                                <div className='flex'>
                                    <a href="https://www.facebook.com"><FaFacebook /></a>
                                    <a href="https://x.com"><FaTwitter /></a>
                                    <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://www.instagram.com"><FaInstagram /></a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
            <div className="navbar_one">
                <div className='left_part'>
                    <div className='flex'>
                        <MdEmail />
                        <p>info@company.com</p>
                    </div>
                    <div className='flex'>
                        < FaLocationDot />
                        <p>Sunny isles Beach,FL 33160</p>
                    </div>
                </div>
                <div className='right_part'>
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                    <a href="https://x.com"><FaTwitter /></a>
                    <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                </div>
            </div>
            <div className='navbar_two'>
                <h2>VILLA</h2>
                <div className='flex'>
                    <a href="#">Home</a>
                    <a href="#Property">Property</a>
                    <a href="#Property_Details">Property Details</a>
                    <Link to="/Task3_Villa/contact_us">Contact US</Link>
                    <button> <div><FaCalendar /></div>  Schedule a visit</button>
                </div>
            </div>
        </div>)
}

export default Navbar