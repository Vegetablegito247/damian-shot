import React from 'react';
import { useSelector } from 'react-redux';
import { RiCameraLensLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import girlCam from '../../assets/landPageImg/girl_cam1.png';

function GalleryMain() {
    const gallery = useSelector(state => state.gallery.galleries);

    // const chunkedArray = (arr, n) => {
    //     const chunkArr = [];
    //     for (let i = 0; i < arr.length; i += n) {
    //         chunkArr.push(arr.slice(i, i + n));
    //     }

    //     return chunkArr;
    // };

    // const columnGallery = chunkedArray(gallery, 3)

    return (
        <main>
            <div className="gallery_img_main_cont">
                <div className="gallery_img_main_head">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ delay: .6, duration: 1, type: 'tween' }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >Welcome To My Gallery</motion.h1>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ delay: .8, duration: 1, type: 'tween' }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Step into a world of captivating moments frozen in time. In my gallery, you'll find a collection of my finest works, each frame telling a unique story, capturing emotions, and preserving memories that last a lifetime. Whether it's the vibrant colors of a sunset, the candid laughter of loved ones, or the quiet serenity of nature, each image invites you to pause, reflect, and find beauty in the simplest of things.
                    </motion.p>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ delay: 1, duration: 1, type: 'tween' }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="gallery_img_main_book">
                        <Link>Book A Session</Link>
                    </motion.div>
                </div>

                <div className="marquee">
                    <div className="marquee_list">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                </div>

                <motion.div
                    transition={{ delay: .6, duration: 1, type: 'tween', staggerChildren: .4 }}
                    viewport={{ once: true }}
                    className="gallery_main_img_col">
                    {
                        gallery.map((gal, index) => (
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                transition={{ delay: index / 2, duration: 1, type: 'tween', staggerChildren: .4 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="gallery_main_img_list">
                                <motion.img
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    src={gal.img} alt="" />
                            </motion.div>
                        ))
                    }
                </motion.div>

                <div className="marquee marquee_2">
                    <div className="marquee_list marq_2">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list marq_2">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list marq_2">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list marq_2">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                    <div className="marquee_list marq_2">
                        <RiCameraLensLine className='marq_icon' />
                        <h1>LENS OF DAMIANO</h1>
                    </div>
                </div>

                <div className="view_services_pricing">
                    <div className="view_services_pricing_cont">
                        <div className="view_services_pricing_img">
                            <motion.img
                                initial={{ scale: 0, opacity: 0 }}
                                transition={{ delay: .6, duration: 1, type: 'tween' }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                src={girlCam} alt="View Services and Pricing" />
                        </div>
                        <div className="view_services_pricing_info">
                            <motion.h3
                                initial={{ y: 100, opacity: 0 }}
                                transition={{ delay: .6, duration: 1, type: 'tween' }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >Services and Pricing</motion.h3>
                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                transition={{ delay: .8, duration: 1, type: 'tween' }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                Explore our range of photography services and pricing options to find the perfect fit for your needs. Whether you're looking for individual sessions, family portraits, or corporate headshots, we've got you covered.
                            </motion.p>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                transition={{ delay: .6, duration: 1, type: 'tween' }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="view_services_pricing_link">
                                <Link to="/pricing">Check Pricing</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GalleryMain