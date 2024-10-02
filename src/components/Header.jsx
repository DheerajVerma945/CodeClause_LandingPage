import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-between p-4 relative shadow-lg">
            <a 
                href="/" 
                className="text-lg md:text-xl lg:text-3xl  text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
                Lorem Ipsum
            </a>
            <button 
                className="md:hidden text-white focus:outline-none" 
                onClick={toggleMenu}
                aria-label="Toggle Menu">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    className="w-8 h-8">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
            <nav className={`flex items-center gap-5 md:gap-7 text-sm md:text-lg lg:text-xl text-white ${isMenuOpen ? 'flex-col absolute bg-purple-700 top-full right-0 w-40 p-4 rounded-md shadow-lg md:flex-row md:static md:w-auto' : 'hidden md:flex'}`}>
                <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">About</a>
                <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Services</a>
                <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
