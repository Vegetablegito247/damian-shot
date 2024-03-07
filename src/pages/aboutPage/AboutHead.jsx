import React from 'react';
import './aboutHead.css';
import damian1 from '../../assets/aboutImg/damian1.jpg';
import damian4 from '../../assets/aboutImg/damian4.jpg';
import { motion } from 'framer-motion';

function AboutHead() {
    return (
        <div className='about_me_head' style={{overflow: 'hidden'}} >
            <div className="about_my_img">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ delay: .6, duration: 1, type: 'tween' }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="img_main_me">
                </motion.div>
                <div className="img_additional_column">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ delay: .8, duration: 1, type: 'tween' }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="img_me_row">
                        <img src={damian4} alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ delay: 1, duration: 1, type: 'tween' }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="img_me_row">
                        <img src={damian1} alt="" />
                    </motion.div>
                </div>
            </div>
            <div className="about_me_text">
                <h1>ABOUT ME</h1>
            </div>
        </div>
    )
}

export default AboutHead