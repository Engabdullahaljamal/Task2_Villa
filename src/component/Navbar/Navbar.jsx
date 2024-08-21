import './Navbar.css'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
function Navbar() {
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
                                <a className="nav-link text-white" href="#courses" onClick={() => { none() }}>Property</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link text-white" href="#courses" onClick={() => { none() }}>Property Details</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link  text-white" aria-disabled="true" href='#question' onClick={() => { none() }}>Contact US</a>
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
                                    <a href=""><FaFacebook /></a>
                                    <a href=""><FaTwitter /></a>
                                    <a href=""><FaLinkedinIn /></a>
                                    <a href=""><FaInstagram /></a>
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
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaLinkedinIn /></a>
                    <a href=""><FaInstagram /></a>
                </div>
            </div>
            <div className='navbar_two'>
                <h2>VILLA</h2>
                <div className='flex'>
                    <a href="">Home</a>
                    <a href="">Property</a>
                    <a href="">Property Details</a>
                    <a href="">Contact US</a>
                    <button> <div><FaCalendar /></div>  Schedule a visit</button>
                </div>
            </div>
        </div>)
}

export default Navbar