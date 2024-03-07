import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import LandHead from './LandHead';
import LandMain from './LandMain';
import Footer from '../../components/footer/Footer';
import { animateScroll as scroll } from 'react-scroll';

function LandingPage() {
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
            <LandHead />
            <LandMain />
            <Footer />
        </>
    )
}

export default LandingPage