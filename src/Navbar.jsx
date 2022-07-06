import React, { useState } from 'react';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './index.css';



const Navbar = () => {
    const [hamstate, setHamState] = useState(false);

    return (
        <>
            <nav>
                <div className='main-navbar'>
                    <div className='logo-class'>
                        <span className='logo-style'>N</span>AV <span className='logo-style'>T</span>EST
                    </div>
                    <div className='menu-link'>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='social-media'>
                        <ul className='social-media-dektop'>
                            <li><FaInstagramSquare /></li>
                            <li><AiFillYoutube /></li>
                            <li><FaTwitter /></li>
                        </ul>
                    </div>

                    <div className="ham-menu">
                        <a href="#" onClick={() => { setHamState(!hamstate); }}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                    {hamstate ?<div className= "mobile-menu">
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div> :""}
                </div>
            </nav>
            <div className="write">
                Happy Coding to All
            </div>
        </>
    )
}

export default Navbar;