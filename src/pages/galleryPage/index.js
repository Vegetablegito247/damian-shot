import React, { useEffect } from 'react';
import GalleryHead from './GalleryHead';
import GalleryMain from './GalleryMain';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { animateScroll as scroll } from 'react-scroll';

function Gallery() {
  // scroll to top of page after each navigation
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint',
    });
  }, []);

  return (
    <>
      <Navbar />
      <GalleryHead />
      <GalleryMain />
      <Footer />
    </>
  )
}

export default Gallery