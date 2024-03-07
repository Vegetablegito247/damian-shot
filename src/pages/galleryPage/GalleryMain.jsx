import React from 'react';
import { useSelector } from 'react-redux';
import { RiCameraLensLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

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
                    <h1>Welcome To My Gallery</h1>
                    <p>
                        Step into a world of captivating moments frozen in time. In my gallery, you'll find a collection of my finest works, each frame telling a unique story, capturing emotions, and preserving memories that last a lifetime. Whether it's the vibrant colors of a sunset, the candid laughter of loved ones, or the quiet serenity of nature, each image invites you to pause, reflect, and find beauty in the simplest of things.
                    </p>
                    <div className="gallery_img_main_book">
                        <Link>Book A Session</Link>
                    </div>
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

                <div className="gallery_main_img_col">
                    {
                        gallery.map((gal) => (
                            <div key={gal.id} className="gallery_main_img_column">
                                <div className="gallery_main_img_list">
                                    <img src={gal.img} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>

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
            </div>
        </main>
    )
}

export default GalleryMain