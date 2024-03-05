import React from 'react';
import { Link } from 'react-router-dom';
import './landHead.css';
import lady_cam from '../../assets/landPageImg/girl_cam1.png';

function LandHead() {
    return (
        <header>
            <div className="land_head_cont">
                <div className="land_head_image">
                    <div className="land_text land_text_img">
                    {window.innerWidth <= 678 ? <h1>Beauty Unveiled</h1> : <h1>Capturing the Essence of Beauty</h1>}
                        <h3>Through the Lens</h3>
                        <div className="land_text_link">
                            <Link>Explore Gallery</Link>
                        </div>
                    </div>
                </div>
                <div className="land_head_image">
                    <div className="land_img">
                        <img src={lady_cam} alt="" />
                    </div>
                </div>
            </div>
            <div className="land_text">
                <h1>Capturing the Essence of Beauty</h1>
                <h3>Through the Lens</h3>
                <div className="land_text_link">
                    <Link>Explore Gallery</Link>
                </div>
            </div>
        </header>
    )
}

export default LandHead