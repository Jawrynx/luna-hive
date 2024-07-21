import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <h1 className='title'>LUNA HIVE</h1>
                {isMobile && (
                    <button className='menu-toggle' onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                )}

            <div className={`navContainer ${isMenuOpen ? 'open' : ''}`}>
                <div className='navLink' id='home'>
                    <a href='#'>HOME</a>
                </div>
                <div className='navLink' id='astroverse'>
                    <a href='#'>ASTROVERSE</a>
                </div>
                <div className='navLink' id='hive'>
                    <a href='#'>THE HIVE</a>
                </div>
                <div className='navLink' id='forums'>
                    <a href='#'>FORUMS</a>
                </div>
                <div className='navLink' id='support'>
                    <a href='#'>SUPPORT</a>
                </div>
                <div className='navLink' id='profile'>
                    <a href='#'>PROFILE</a>
                </div>
            </div>
            <div className={`profile ${isMobile ? "mob-hidden" : ""}`}>
                <a href='#'>PROFILE</a>
            </div>
        </div>
    );
}

export default Navbar;
