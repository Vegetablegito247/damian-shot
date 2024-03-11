import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCamera } from "react-icons/md";
import './dashHead.css'

function DashHead({headTitle, onClick}) {
    return (
        <div className='dash_head'>
                <div className="dash_title">
                    <h3>{headTitle}</h3>
                </div>
                <div onClick={onClick} className="dash_burger">
                    <GiHamburgerMenu />
                </div>
                <div className="dash_logo">
                    <h3>D_PHOTOGRAPHY</h3>
                    <div className="logo_container">
                        <MdCamera className='dash_icon' />
                    </div>
                </div>
        </div>
    )
}

export default DashHead