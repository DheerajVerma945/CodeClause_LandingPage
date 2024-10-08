import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-sm text-center">
                        <a href="#" className="hover:underline hover:text-blue-400 transition duration-200">Home</a>
                        <a href="#" className="hover:underline hover:text-blue-400 transition duration-200">About Us</a>
                        <a href="#" className="hover:underline hover:text-blue-400 transition duration-200">Contact</a>
                        <a href="#" className="hover:underline hover:text-blue-400 transition duration-200">Terms of Service</a>
                        <a href="#" className="hover:underline hover:text-blue-400 transition duration-200">Privacy Policy</a>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm">&copy; Lorem Ispum. All rights reserved.</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
