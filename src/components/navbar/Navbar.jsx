import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import './navbar.css';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav>
            <div className="nav_cont">
                <div className="nav_logo">
                    <h3>D_PHOTOGRAPHY</h3>
                </div>
                <div className={openMenu ? "nav_menu active" : "nav_menu"}>
                    <div className="nav_close" onClick={handleMenu}>
                        <MdClose />
                    </div>
                    <ul className="nav_links">
                        <li onClick={handleMenu}>
                            <NavLink>
                                <span>About</span>
                            </NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink>
                                <span>Events</span>
                            </NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink>
                                <span>Pricing & Services</span>
                            </NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_burger" onClick={handleMenu} >
                        <RxHamburgerMenu />
                    </div>
            </div>
        </nav>
    )
}

export default Navbar