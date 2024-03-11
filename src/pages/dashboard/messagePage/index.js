import React from 'react';
import './message.css';
import DashHead from '../../../components/dashHead/DashHead';
import { Outlet } from 'react-router-dom';


function Messages({ handleSideMenu }) {
    return (
        <div className='message'>
            <DashHead headTitle={"Messages"} onClick={handleSideMenu} />
            <Outlet />
        </div>
    )
}

export default Messages