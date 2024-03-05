import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LandHead from './LandHead'
import LandMain from './LandMain'
import Footer from '../../components/footer/Footer'

function LandingPage() {
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