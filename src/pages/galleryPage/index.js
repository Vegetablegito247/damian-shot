import React from 'react'
import GalleryHead from './GalleryHead'
import GalleryMain from './GalleryMain'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Gallery() {
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