import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import './navbar.css';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    // Handling scroll to footer
    const scrollToFooter = (idTag) => {
        const element = document.getElementById(idTag);
        element.scrollIntoView({ behavior: 'smooth' });
        if(openMenu) {
            setOpenMenu(!openMenu);
        };
    }

    return (
        <nav>
            <div className="nav_cont">
                <Link to='/' className="nav_logo">
                    <h3>D_PHOTOGRAPHY</h3>
                </Link>
                <div className={openMenu ? "nav_menu active" : "nav_menu"}>
                    <div className="nav_close" onClick={handleMenu}>
                        <MdClose />
                    </div>
                    <ul className="nav_links">
                        <li onClick={handleMenu}>
                            <NavLink to='/about'>
                                <span>About</span>
                            </NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink to='/gallery'>
                                <span>Gallery</span>
                            </NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink to=''>
                                <span>Pricing & Services</span>
                            </NavLink>
                        </li>
                        <li onClick={() => scrollToFooter('contact')}>
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