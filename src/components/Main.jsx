import React, { useEffect, useState } from 'react';
import { FaRocket, FaMobileAlt, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
    {
        name: "User One",
        message: "Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "User Two",
        message: "Sed do eiusmod tempor Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        name: "User Three",
        message: "Ut enim ad minim veniam, quis nostrudUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        name: "User Four",
        message: "Duis aute irure dolor in reprehenderit in voluptate Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
];

function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextTestimonial, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="text-white">
            <div className="flex flex-col p-10 bg-gradient-to-tr from-purple-800 via-purple-600 to-purple-400  items-center justify-center h-screen text-center">
                <h1 className="text-5xl font-bold mb-4">Lorem Ipsum</h1>
                <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 hover:-translate-y-1 transition-transform duration-500">
                    Get Started
                </button>
                <svg className="absolute bottom-0 left-0 w-full h-24 -mb-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,0 C720,100 720,0 1440,0 L1440,100 L0,100 Z" fill="white" />
                </svg>

            </div>


            <section className="py-12 px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Features</h2>
                <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="bg-white text-purple-600 rounded-lg p-6 shadow-lg w-full max-w-xs transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaRocket className="text-3xl mr-2 text-purple-600" />
                            <h3 className="text-2xl font-semibold">Feature One</h3>
                        </div>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula.</p>
                    </div>
                    <div className="bg-white text-purple-600 rounded-lg p-6 shadow-lg w-full max-w-xs transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaMobileAlt className="text-3xl mr-2 text-purple-600" />
                            <h3 className="text-2xl font-semibold">Feature Two</h3>
                        </div>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula.</p>
                    </div>
                    <div className="bg-white text-purple-600 rounded-lg p-6 shadow-lg w-full max-w-xs transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="text-3xl mr-2 text-purple-600" />
                            <h3 className="text-2xl font-semibold">Feature Three</h3>
                        </div>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula.</p>
                    </div>
                </div>
            </section>

            <section className='m-10'>
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Testimonials</h2>
                <div className="flex items-center justify-center max-w-lg mx-auto gap-5">
                    <button
                        onClick={prevTestimonial}
                        className="text-purple-600 hover:text-purple-800 transition"
                    >
                        <FaChevronLeft className="text-3xl" />
                    </button>

                    <div className="bg-white text-purple-600 rounded-lg p-6 shadow-lg max-w-md w-full mx-4 sm:mx-0">
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base">
                            "{testimonials[currentIndex].message}"
                        </p>
                    </div>


                    <button
                        onClick={nextTestimonial}
                        className="text-purple-600 hover:text-purple-800 transition"
                    >
                        <FaChevronRight className="text-3xl" />
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Main;
