import './ContactUs.css'
import phone_icon from './../../assets/images/phone-icon.png'
import email_icon from './../../assets/images/email-icon.png'
import MessageForm from '../../component/MessageForm/MessageForm'
import PagesHero from '../../component/PagesHero/PagesHero'
function ContactUs() {
    return (
        <div className='contact_page'>
            <PagesHero title='CONTACT US' />
            <div className='contact_page_container'>
                <div className='sec_title_container'>
                    <p className='orange_title'> | CONTACT US</p>
                    <h2 className='sec_title'>Get In Touch With Our Agents  </h2>
                    <span>
                        When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                    </span>
                    <div className='info_card_container'>
                        <div className='info_card'>
                            <img src={phone_icon} alt="" />
                            <div>
                                <h4>010-020-0340</h4>
                                <p>Phone Number</p>
                            </div>

                        </div>
                        <div className='info_card'>
                            <img src={email_icon} alt="" />
                            <div>
                                <h4>info@villa.com</h4>
                                <p>Business Email</p>
                            </div>

                        </div>


                    </div>
                </div>
                <MessageForm />


            </div>
            <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.05388861538!2d-80.14561678532172!3d25.939107693381555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1724261874819!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='map' >
                </iframe>
            </div>

        </div>

    )
}

export default ContactUs