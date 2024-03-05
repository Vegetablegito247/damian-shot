import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import './arrow.css';

function NextArrow(props) {
    const { onClick, style } = props;
    return (
        <div className="next_arrow" onClick={onClick} style={{...style, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <FaChevronRight className='next_btn' />
        </div>
    )
}

export default NextArrow