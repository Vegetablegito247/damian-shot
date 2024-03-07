import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import AboutHead from './AboutHead';
import AboutMain from './AboutMain';
import Footer from '../../components/footer/Footer';
import { animateScroll as scroll } from 'react-scroll';

function AboutMe() {
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
      <AboutHead />
      <AboutMain />
      <Footer />
    </>
  )
}

export default AboutMe