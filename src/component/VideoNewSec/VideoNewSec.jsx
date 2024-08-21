import './VideoNewSec.css'
import video_img from './../../assets/images/video-img.jpg'
import video_img_2 from './../../assets/images/video-frame.jpg'
import { IoIosPlayCircle } from "react-icons/io";

function VideoNewSec() {
    return (
        <div className='video_new_sec'>
            <div className='video_img_container'>
                <div className='sec_title_container'>
                    <p className='orange_title'> | VIDEO NEW</p>
                    <h2 className='sec_title'>Get Closer View  & Different Feeling  </h2>

                </div>

                <img className='video_img' src={video_img} alt="" />
                <div className='video_img_2_con'>
                    <img className='video_img_2' src={video_img_2} alt="" />
                    <div className='play_icon_border'>
                        <IoIosPlayCircle />
                    </div>
                </div>

            </div>
            <div className='flex'>
                <div>
                    <p>34</p>
                    <p> Buildings Finished Now</p>
                    <span></span>
                </div>
                <div>
                    <p> 12</p>
                    <p> Years Experience</p>
                    <span></span>
                </div>
                <div>
                    <p>24</p>
                    <p>Awards Won 2023</p>
                    <span></span>
                </div>
            </div>

        </div>
    )
}

export default VideoNewSec