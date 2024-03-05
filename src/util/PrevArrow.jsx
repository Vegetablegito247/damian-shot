import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import './arrow.css';

function PrevArrow(props) {
    const { onClick, style } = props;
    return (
        <div className="prev_arrow" onClick={onClick} style={{...style, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <FaChevronLeft className='prev_btn' />
        </div>
    )
}

export default PrevArrow