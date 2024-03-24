import React, { useState } from 'react';
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { postMessage } from '../../store/message';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';

function Footer() {
    const dispatch = useDispatch();

    const [messageData, setMessageData] = useState({
        clientEmail: '',
        clientMsg: ''
    })
    const [error, setError] = useState({});

    const validateMsg = () => {
        const newErrors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!messageData.clientEmail.trim()) {
            newErrors.email = 'Email account is required';
        }
        else if (!emailPattern.test(messageData.clientEmail.trim())) {
            newErrors.email = 'Invalid email address';
        }

        if (!messageData.clientMsg.trim()) {
            newErrors.message = 'Message field is required';
        }
        else if (messageData.clientMsg.length < 100) {
            newErrors.message = 'Message must be at least 100 characters';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const msgSubmit = (e) => {
        e.preventDefault();

        if (validateMsg()) {
            dispatch(postMessage(messageData));
            toast.success('Message sent successfully');
            setMessageData({ clientEmail: '', clientMsg: '' });
        }
        else {
            toast.warning('Please correct the error in the form');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessageData({
            ...messageData,
            [name]: value
        });
    };

    return (
        <footer id='contact'>
            <div className="footer_cont">
                <div className="foot_main">
                    <div className="foot_main_form">
                        <div className="foot_main_form_info">
                            <h3>Would you like to send us a message?</h3>
                            <p>Let us know your thoughts or inquiries. We'd love to hear from you!</p>
                        </div>
                        <form action="" onSubmit={msgSubmit}>
                            <div className="form_inputs">
                                <div className="inp_ctrl_msg">
                                    <input
                                        type="email"
                                        name="clientEmail"
                                        onChange={handleChange}
                                        placeholder='Your Email'
                                    />
                                    {error.email && <span className='err-msg'>{error.email}</span>}
                                </div>
                                <div className="inp_ctrl_msg">
                                    <textarea
                                        name="clientMsg"
                                        onChange={handleChange}
                                        placeholder='Your Message'
                                    ></textarea>
                                    {error.message && <span className='err-msg'>{error.message}</span>}
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
                        <Link to='https://lensofdamiano.pixieset.com/booking' className="foot_main_list">
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