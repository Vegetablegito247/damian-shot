import React from 'react';
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import './footer.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {

    return (
        <footer id='contact'>
            <div className="footer_cont">
                <div className="foot_main">
                    <div className="foot_main_form">
                        <div className="foot_main_form_info">
                            <h3>Would you like to send us a message?</h3>
                            <p>Let us know your thoughts or inquiries. We'd love to hear from you!</p>
                        </div>
                        <form action="">
                            <div className="form_inputs">
                                <div className="inp_ctrl_msg">
                                    <input type="email" placeholder='Your Email' />
                                </div>
                                <div className="inp_ctrl_msg">
                                    <textarea name="" placeholder='Your Message'></textarea>
                                </div>
                            </div>
                            <div className="form_btn">
                                <button>Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="foot_main_links">
                        <Link to='/' className="foot_main_list">
                            <span>Home</span>
                        </Link>
                        <Link to='/about' className="foot_main_list">
                            <span>About</span>
                        </Link>
                        <Link to='/gallery' className="foot_main_list">
                            <span>Gallery</span>
                        </Link>
                        <Link to='' className="foot_main_list">
                            <span>Pricing & Services</span>
                        </Link>
                    </div>
                    <div className="foot_main_social">
                        <Link to='http://wa.me/+13063519384' className="foot_social_list">
                            <FaWhatsapp className='foot_icon' />
                            <span>Whatsapp</span>
                        </Link>
                        <Link to='https://www.instagram.com/lens_of_damiano?igsh=MXVtMmlnanM2bng1Nw%3D%3D&utm_source=qr' className="foot_social_list">
                            <FaInstagram className='foot_icon' />
                            <span>Instagram</span>
                        </Link>
                        <Link to='https://www.tiktok.com/@lens_of_damiano?_t=8kWJ3dt01DC&_r=1' className="foot_social_list">
                            <FaTiktok className='foot_icon' />
                            <span>Tik Tok</span>
                        </Link>
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