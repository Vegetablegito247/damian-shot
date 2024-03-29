import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GrGallery } from "react-icons/gr";
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchMessages } from '../../../store/message';
import { BiMessageDetail, BiLogOut } from 'react-icons/bi';
import './style.css';
import { fetchGallery } from '../../../store/gallery';
import { logoutUser } from '../../../store/user';

function DisplayDashboard({ openMenu, handleSideMenu }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(fetchMessages());
        dispatch(fetchGallery());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    }

    return (
        <div className="displayBoard">
            <div onClick={handleSideMenu} className={openMenu ? "sideMenuCont active" : "sideMenuCont"}></div>
            <div className={openMenu ? 'sideMenu active' : 'sideMenu'}>
                <div className="mainMenu">
                    <NavLink onClick={handleSideMenu} to={""} end>
                        <div className="sideIcon">
                            <AiOutlineDashboard />
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink onClick={handleSideMenu} to='addImg'>
                        <div className="sideIcon">
                            <GrGallery/>
                        </div>
                        <span>Gallery</span>
                    </NavLink>
                    <NavLink onClick={handleSideMenu} to='messages'>
                        <div className="sideIcon">
                            <BiMessageDetail />
                        </div>
                        <span>Messages</span>
                    </NavLink>
                </div>

                <div className="account">
                    <div className="acctHolder">
                        <FaUserCircle />
                        <h3>Damian Chidra</h3>
                    </div>
                    <div className="acctSettings">
                        <div className='logout' onClick={handleLogout}>
                            <div className="acctIcon">
                                <BiLogOut />
                            </div>
                            <span>Log out</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default DisplayDashboard;