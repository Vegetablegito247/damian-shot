import React from 'react';
import './gallery.css';
import { motion } from 'framer-motion';

function GalleryHead() {
  return (
    <header className='main_gallery_img_head'>
      <div className="main_gallery_img_head_cont">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: .6, duration: 1, type: 'tween' }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="main_gallery_img_head_text">
          <h1>GALLERY</h1>
        </motion.div>
      </div>
    </header>
  )
}

export default GalleryHead