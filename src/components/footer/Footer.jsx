import React from 'react';
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import './footer.css';

function Footer() {

  return (
    <footer>
        <div className="footer_cont">
            <div className="foot_main">
                <div className="foot_main_form">
                    <div className="foot_main_form_info">
                        <h3>Subscribe to our newsletter</h3>
                        <p>
                        Sign up with your email address to receive news and updates.
                        </p>
                    </div>
                    <form action="">
                        <div className="form_inputs">
                            <div className="inp_ctrl">
                                <input type="email" placeholder='Your Email' />
                            </div>
                        </div>
                        <div className="form_btn">
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className="foot_main_links">
                    <div className="foot_main_list">
                        <span>Home</span>
                    </div>
                    <div className="foot_main_list">
                        <span>Gallery</span>
                    </div>
                    <div className="foot_main_list">
                        <span>Pricing & Services</span>
                    </div>
                </div>
                <div className="foot_main_social">
                    <div className="foot_social_list">
                        <FaXTwitter className='foot_icon' />
                        <span>Twitter</span>
                    </div>
                    <div className="foot_social_list">
                        <FaInstagram className='foot_icon' />
                        <span>Instagram</span>
                    </div>
                    <div className="foot_social_list">
                        <FaTiktok className='foot_icon' />
                        <span>Tik Tok</span>
                    </div>
                </div>
            </div>
            <div className="foot_bottom">
                <div className="foot_bottom_text">
                    <h1>
                        LENS OF <br /> DAMIANO
                    </h1>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer