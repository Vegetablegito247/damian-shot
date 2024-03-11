import React from 'react';
import { Link } from 'react-router-dom';
import './landHead.css';
import damian2 from '../../assets/aboutImg/damian2.jpg';
import { motion } from 'framer-motion';

function LandHead() {
    return (
        <header>
            <div className="land_head_cont">
                <div className="land_head_image">
                    <div className="land_text land_text_img">
                        {window.innerWidth <= 678 ? <motion.h1
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, type: 'tween' }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                        >Beauty Unveiled</motion.h1> : <motion.h1
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, type: 'tween' }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                        >Capturing the Essence of Beauty</motion.h1>}
                        <motion.h3
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ delay: .8, duration: 1, type: 'tween' }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                        >Through the Lens</motion.h3>
                        <div className="land_text_link">
                            <Link>Book A Session</Link>
                        </div>
                    </div>
                </div>
                <div className="land_head_image">
                    <div className="land_img">
                        <motion.img
                            initial={{ scale: 0, opacity: 0 }}
                            transition={{ delay: .4, duration: 1, type: 'tween' }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            src={damian2} alt="" />
                    </div>
                </div>
            </div>
            <div className="land_text">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ delay: .6, duration: 1, type: 'tween' }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}>Capturing the Essence of Beauty
                </motion.h1>
                <motion.h3
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ delay: .8, duration: 1, type: 'tween' }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >Through the Lens
                </motion.h3>
                <motion.div
                    className="land_text_link"
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ delay: .6, duration: 1, type: 'tween' }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link to='https://lensofdamiano.pixieset.com/booking'>Book A Session</Link>
                </motion.div>
            </div>
        </header>
    )
}

export default LandHead