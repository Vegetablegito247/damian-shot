import React from 'react';
import './landMain.css';
import { Link } from 'react-router-dom';
import baby1 from '../../assets/landPageImg/baby1.png';
import baby2 from '../../assets/landPageImg/baby2.png';
import baby3 from '../../assets/landPageImg/baby3.png';
import family1 from '../../assets/landPageImg/family1.png';
import family2 from '../../assets/landPageImg/family2.png';
import family3 from '../../assets/landPageImg/family3.png';
import model1 from '../../assets/landPageImg/model1.png';
import model2 from '../../assets/landPageImg/model2.png';
import model3 from '../../assets/landPageImg/model3.png';
import Slider from "react-slick";
import PrevArrow from '../../util/PrevArrow';
import NextArrow from '../../util/NextArrow';
import { RiCameraLensLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

function LandMain() {
    const baby = [
        {
            id: 1,
            head: 'Innocence Unveiled',
            text: 'Babies, tiny miracles wrapped in innocence, bring joy anew. With each coo, they paint smiles on tired faces, infusing homes with laughter. They\'re life\'s sweetest melodies, teaching love\'s purest form. In their eyes, hope sparkles, promising a future bright with possibilities.',
            img: baby1,
        },
        {
            id: 2,
            head: 'Nature\'s Poetry',
            text: 'Babies, nature\'s poetry in flesh and blood, whisper secrets of the universe with every breath. Their laughter, like gentle ripples on a serene pond, soothes weary souls. Their innocence, a reminder of life\'s beauty, renews faith in the goodness of humanity.',
            img: baby2
        },
        {
            id: 3,
            head: 'Guardians of Tomorrow',
            text: 'Babies, guardians of tomorrow, hold the keys to our collective destiny. In their tender embrace lies the promise of a better world. With each milestone, they rewrite the story of humanity, shaping it with love, compassion, and boundless potential.',
            img: baby3
        }
    ];

    const family = [
        {
            id: 1,
            head: 'Circle of Love',
            text: 'Family, a circle of love that knows no bounds, binds hearts in a bond forged by shared moments. Together, they weather life\'s storms, embracing each other\'s flaws and strengths. In their unity lies strength, in their love, a sanctuary of acceptance and belonging.',
            img: family1,
        },
        {
            id: 2,
            head: 'Roots of Belonging',
            text: 'Family, the roots of belonging that anchor souls in a world of fleeting moments. They weave stories of heritage, passing down traditions like precious heirlooms. With each generation, they grow stronger, nurturing the seeds of love and resilience.',
            img: family2
        },
        {
            id: 3,
            head: 'Harmony of Hearts',
            text: 'Family, a harmony of hearts that dances to the rhythm of life\'s melodies. In their laughter echoes the symphony of joy, in their tears, the refrain of empathy. Together, they create a tapestry of memories, woven with threads of love and togetherness.',
            img: family3
        }
    ];

    const model = [
        {
            id: 1,
            head: 'Elegance Redefined',
            text: 'Models, epitomes of elegance, grace the world\'s stage with poise and allure. Each step, a ballet of confidence, each glance, a spell of enchantment. They redefine beauty, celebrating diversity and individuality with every strut.',
            img: model1,
        },
        {
            id: 2,
            head: 'Expression Unleashed',
            text: 'Models, artisans of expression, paint the canvas of fashion with creativity and passion. Through their poses, they tell stories untold, conveying emotions with every gesture. They break boundaries, challenging norms and redefining standards of beauty.',
            img: model2
        },
        {
            id: 3,
            head: 'Icons of Inspiration',
            text: 'Models, icons of inspiration, inspire millions with their confidence and charisma. In their diversity, they find unity, embracing uniqueness as a source of strength. They pave the way for change, advocating for inclusivity and representation in every runway.',
            img: model3
        }
    ];

    const photographySessions = [
        {
            id: 1,
            type: "Individual/Couples Session",
            description: "1 - 2 outfits, 1 - 2 people, 45 mins",
            price: "$150",
            retouchedPhotos: 12,
            galleryAccess: "Full gallery access for photo selection",
            additionalTime: "$100/hr",
            additionalRetouchedPhotos: "$5",
            additionalOutfit: "$25",
            logistics: "Logistics (For home / outdoor locations) - $40"
        },
        {
            id: 2,
            type: "Family/Group Session",
            price: "$200",
            description: "1 - 2 outfits, Up to 10 people, 1 hour",
            retouchedPhotos: 15,
            galleryAccess: "Full gallery access for photo selection",
            additionalHour: "$100",
            additionalRetouchedPhotos: "$10",
            additionalOutfit: "$25",
            logistics: "Outdoor/Home service - $45"
        },
        {
            id: 3,
            type: "Maternity session",
            price: "$250",
            description: "Studio session, Up to 3 outfits, 90 mins",
            retouchedPhotos: 14,
            friendsAndFamily: "Friends/ Family can join in the shoot",
            galleryAccess: "Full gallery access for photo selection",
            additionalHour: "$100",
            additionalRetouchedPhotos: "$5",
            additionalOutfit: "$5"
        },
        {
            id: 4,
            type: "Photography (Small Events)",
            price: "$150",
            description: "Up to 80 guests, 60 Minutes",
            retouchedPhotos: "Up to 70 edited photos",
            additionalHour: "$100"
        },
        {
            id: 5,
            type: "Kids Session (Age 1-5)",
            price: "$200",
            description: "60 Minutes shoot time, 2- 4 outfits, Creative set",
            retouchedPhotos: 15,
            galleryAccess: "Full gallery access for photo selection",
            additionalTime: "$100/hr",
            additionalRetouchedPhotos: "$5",
            additionalOutfit: "$25"
        },
        {
            id: 6,
            type: "Mini Session",
            price: "$100",
            description: "1 outfit, 1 person, 45 minutes",
            retouchedPhotos: 8,
            galleryAccess: "Full gallery access for photo selection",
            additionalRetouchedPhotos: "$5",
            logistics: "Logistics (For home / outdoor locations) - $40"
        },
        {
            id: 7,
            type: "Corporate Headshots",
            price: "$100",
            description: "40 minutes, 1 outfit change/update",
            retouchedPhotos: 6,
            galleryAccess: "Full gallery access for photo selection",
            additionalRetouchedPhotos: "$5",
            logistics: "Logistics (For home / outdoor locations) - $40"
        },
        {
            id: 8,
            type: "Large Group Sessions",
            description: "up to 3 outfits, 6 - 11 people, 1 hour",
            price: "$300",
            retouchedPhotos: 16,
            galleryAccess: "Full gallery access for photo selection",
            additionalHour: "$100",
            additionalRetouchedPhotos: "$5",
            additionalOutfit: "$25"
        },
        {
            id: 9,
            type: "Creative / Anime shoots",
            description: "up to 2 outfits",
            price: "$170",
            retouchedPhotos: 10,
            galleryAccess: "Full gallery access for photo selection",
            additionalHour: "$100",
            additionalRetouchedPhotos: "$10",
            additionalOutfit: "$30"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <main>
            <div className="about">
                <div className="about_cont">
                    <div className="about_head">
                        <h1>ABOUT DAMIAN</h1>
                    </div>
                    <div className="about_info">
                        <div className="about_text">
                            <p>
                                Damian Glory Chiderah, a dedicated professional, holds a background in microbiology and is currently pursuing studies in kinesiology and health. With a diploma in web development and graphics design, Damian found a passion for photography driven by creativity. Specializing in capturing moments and crafting anime from photographs, Damian is known for resilience and cherishes kindness and passion in others.
                            </p>
                        </div>
                        <div className="about_link">
                            <Link>
                                <span>Schedule Appointment</span>
                            </Link>
                        </div>
                    </div>
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

            <div className="gallery">
                <div className="gallery_cont">
                    <div className="gallery_head">
                        <h1>GALLERY & COLLECTION</h1>
                    </div>
                    <div className="gallery_type_and_sample">
                        <div className="gallery_type_list">
                            <div className="gallery_type_head">
                                <h3>Baby / New born Session</h3>
                            </div>
                            <div className="gallery_type_images">
                                {baby.map((babe) => (
                                    <div key={babe.id} className="gallery_type_info">
                                        <div className="gallery_type_about_text">
                                            <h3>{babe.head}</h3>
                                            <p>
                                                {babe.text}
                                            </p>
                                            <div className="gallery_type_about_link">
                                                <Link>
                                                    <span>Explore Gallery</span>
                                                    <FaArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gallery_type_image_list">
                                            <div className="gallery_type_img">
                                                <img src={babe.img} alt="" />
                                            </div>
                                            <div className="gallery_type_img_no">
                                                <span>0{babe.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="gallery_type_list">
                            <div className="gallery_type_head">
                                <h3>Family / Group Session</h3>
                            </div>
                            <div className="gallery_type_images">
                                {family.map((babe) => (
                                    <div key={babe.id} className="gallery_type_info">
                                        <div className="gallery_type_about_text">
                                            <h3>{babe.head}</h3>
                                            <p>
                                                {babe.text}
                                            </p>
                                            <div className="gallery_type_about_link">
                                                <Link>
                                                    <span>Explore Gallery</span>
                                                    <FaArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gallery_type_image_list">
                                            <div className="gallery_type_img">
                                                <img src={babe.img} alt="" />
                                            </div>
                                            <div className="gallery_type_img_no">
                                                <span>0{babe.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="gallery_type_list">
                            <div className="gallery_type_head">
                                <h3>Modelling / Mini Session</h3>
                            </div>
                            <div className="gallery_type_images">
                                {model.map((babe) => (
                                    <div key={babe.id} className="gallery_type_info">
                                        <div className="gallery_type_about_text">
                                            <h3>{babe.head}</h3>
                                            <p>
                                                {babe.text}
                                            </p>
                                            <div className="gallery_type_about_link">
                                                <Link>
                                                    <span>Explore Gallery</span>
                                                    <FaArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gallery_type_image_list">
                                            <div className="gallery_type_img">
                                                <img src={babe.img} alt="" />
                                            </div>
                                            <div className="gallery_type_img_no">
                                                <span>0{babe.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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

            <div className="price_and_service">
                <div className="price_and_service_cont">
                    <div className="price_and_service_head">
                        <h1>PRICING AND SERVICES</h1>
                    </div>
                    <Slider {...settings} className="price_and_service_carousel">
                        {
                            photographySessions.map((photo, index) => (
                                <div key={index} className="price_and_service_list">
                                    <div className="price_and_service_image">
                                        <img src={baby1} alt="" />
                                    </div>
                                    <div className="price_and_service_info">
                                        <div className="price_and_service_info_head">
                                            <h3>{photo.type}</h3>
                                        </div>
                                        <div className="price_and_service_info_details">
                                            <ul>
                                                <li>{photo.description}</li>
                                                <li>{photo.price}</li>
                                                <li>{photo.retouchedPhotos} retouched photos</li>
                                                {photo.galleryAccess && <li>{photo.galleryAccess}</li>}
                                                {photo.additionalTime && <li>Additional time: {photo.additionalTime}</li>}
                                                {photo.additionalRetouchedPhotos && <li>Additional retouched photos: {photo.additionalRetouchedPhotos}</li>}
                                                {photo.additionalOutfit && <li>Additional outfit: {photo.additionalOutfit}</li>}
                                                {photo.logistics && <li>{photo.logistics}</li>}
                                                {photo.friendsAndFamily && <li>{photo.friendsAndFamily}</li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

            {/* <div className="testimonial">
                <div className="testimonial_cont">
                    <div className="testimonial_head">
                        <h1>TESTIMONIAL</h1>
                    </div>
                    <div className="testimonial_carousel">
                        <div className="testimonial_list">

                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    )
}

export default LandMain