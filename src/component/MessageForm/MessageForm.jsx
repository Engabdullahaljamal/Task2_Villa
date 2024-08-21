import './MessageForm.css'

function MessageForm() {
    return (
        <div className='message_form'>
            <div>
                <label htmlFor="full_name">Full Name</label>
                <input type="text" name="" id="full_name" placeholder='Your Name' />
            </div>
            <div>
                <label htmlFor="email_address">Email Address</label>
                <input type="text" name="" id="email_address" placeholder='Your Email' />
            </div>
            <div>
                <label htmlFor="subject"> Subject</label>
                <input type="text" name="" id="subject" placeholder='Subject' />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="" id="message" placeholder='Your Message' />
            </div>
            <button>Send Message</button>
        </div>
    )
}

export default MessageForm