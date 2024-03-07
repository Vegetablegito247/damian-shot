import React from 'react';
import './aboutHead.css';
import damian1 from '../../assets/aboutImg/damian1.jpg';
import damian4 from '../../assets/aboutImg/damian4.jpg';

function AboutHead() {
    return (
        <div className='about_me_head' >
            <div className="about_my_img">
                <div className="img_main_me">
                </div>
                <div className="img_additional_column">
                    <div className="img_me_row">
                        <img src={damian4} alt="" />
                    </div>
                    <div className="img_me_row">
                        <img src={damian1} alt="" />
                    </div>
                </div>
            </div>
            <div className="about_me_text">
                    <h1>ABOUT ME</h1>
                </div>
        </div>
    )
}

export default AboutHead