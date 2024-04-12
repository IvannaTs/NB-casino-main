import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${menuOpen ? 'open' : ''}`} id='header'>
            <div className='header-logo'>
                <a href='/'>
                    <svg width='431' height='206' viewBox='0 0 431 206' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M142.927 155.87L149.486 151.487C137.644 128.659 131.723 103.639 131.723 76.4282C131.723 55.2438 136.915 37.2553 147.3 22.4628C157.867 7.67021 172.715 0.273933 191.845 0.273933C201.865 0.273933 210.337 2.00886 217.26 5.47872C215.438 15.7057 212.159 33.5115 207.422 58.8963C197.22 113.501 192.118 144.821 192.118 152.856C192.118 170.206 195.033 183.172 200.863 191.755C192.847 197.051 185.468 200.704 178.727 202.713C171.986 204.722 163.241 205.726 152.492 205.726C141.925 205.726 132.269 203.443 123.524 198.878C114.961 194.312 107.856 188.285 102.208 180.798C96.7423 173.128 92.0965 163.723 88.2706 152.582C81.5296 133.042 77.4303 108.205 75.9728 78.0718H71.6003C63.2196 116.058 59.0292 142.629 59.0292 157.787C59.0292 172.945 61.7621 184.907 67.2277 193.673C56.2964 201.891 44.9096 206 33.0673 206C21.225 206 12.7532 202.621 7.65194 195.864C2.55065 188.925 0 178.698 0 165.184C0 151.487 5.73895 112.862 17.2169 49.3085L2.73283 19.9973C23.138 6.8484 41.3569 0.273933 57.3895 0.273933C73.4221 0.273933 85.5377 3.10461 93.7362 8.76596C101.935 14.2447 107.674 22.3714 110.953 33.1463C114.232 43.9211 116.601 55.3351 118.058 67.3883C119.698 79.2589 122.431 93.5949 126.257 110.396C130.265 127.198 135.822 142.355 142.927 155.87Z' fill='white' />
                        <path d='M281.514 206C269.854 206 261.473 202.621 256.372 195.864C251.271 188.925 248.72 178.698 248.72 165.184C248.72 151.487 254.459 112.862 265.937 49.3085L251.453 19.9973C272.04 6.66578 290.806 0 307.749 0C319.045 0 325.786 5.47872 327.972 16.4362C346.738 5.66134 365.139 0.273933 383.175 0.273933C395.018 0.273933 405.402 3.01329 414.33 8.49201C424.897 14.8839 430.18 25.9326 430.18 41.6383C430.18 67.5709 415.878 86.3812 387.275 98.0691C416.425 103.183 431 119.527 431 147.104C431 165.001 423.621 179.246 408.864 189.838C394.107 200.43 377.528 205.726 359.126 205.726C340.908 205.726 326.241 201.891 315.128 194.221C304.379 202.074 293.174 206 281.514 206ZM367.872 141.077C367.872 132.494 365.321 126.193 360.22 122.176C355.3 118.158 348.651 116.149 340.27 116.149C331.889 116.149 322.506 117.884 312.122 121.354C309.207 136.877 307.749 150.117 307.749 161.074C316.676 165.275 325.968 167.375 335.624 167.375C345.28 167.375 353.023 165.092 358.853 160.527C364.865 155.961 367.872 149.478 367.872 141.077ZM350.108 36.4335C343.003 36.4335 335.351 37.8032 327.152 40.5426C326.059 47.6649 322.689 65.9273 317.041 95.3298C332.162 94.234 345.007 90.5816 355.574 84.3723C366.141 77.9805 371.424 68.8493 371.424 56.9787C371.424 43.2819 364.319 36.4335 350.108 36.4335Z' fill='#F1510C' />
                    </svg>
                </a>
            </div>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} id='hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`header-menu ${menuOpen ? 'open' : ''}`}>
                <div className='menu-items'>
                    <Link to="intro" className='menu-item' smooth={true} duration={500} onClick={closeMenu}>Main</Link>
                    <Link to="games" className='menu-item' smooth={true} duration={500} onClick={closeMenu}>Games</Link>
                    <Link to="bonus-details" className='menu-item' smooth={true} duration={500} onClick={closeMenu}>Bonuses</Link>
                    <Link to="app-info" className='menu-item' smooth={true} duration={500} onClick={closeMenu}>Mobile Version</Link>
                    <Link to="login" className='menu-item' smooth={true} duration={500} onClick={closeMenu}>Sign In</Link>
                </div>
            </div>
        </header>
    )
}

