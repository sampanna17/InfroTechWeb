
import { useState } from 'react';
import logo from '../assets/logo.png';
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto p-2 px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand - Left Section */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                    </div>

                    {/* Center Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>

                        {/* Company with dropdown */}
                        <div className="relative group">
                            <button
                                className="text-gray-700 hover:text-gray-900 flex items-center"
                                onClick={() => setCompanyOpen(!companyOpen)}
                            >
                                Company
                                <FaCaretDown className="ml-1" />
                            </button>
                            {/* Dropdown menu */}
                            {companyOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vision</a>
                                </div>
                            )}
                        </div>

                        {/* OurServices with dropdown */}
                        <div className="relative group">
                            <button
                                className="text-gray-700 hover:text-gray-900 flex items-center"
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                OurServices
                                <FaCaretDown className="ml-1" />
                            </button>
                            {/* Dropdown menu */}
                            {servicesOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Development</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mobile Apps</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Consulting</a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900">OurWorks</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Careers</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Blogs</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">ContactUs</a>
                    </div>

                    <div className="hidden md:flex items-center">
                        <a
                            href="#"
                            className="text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: "#0959a2",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#074a8a")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0959a2")}
                        >


                            Our Courses
                        </a>
                    </div>

                    {/* Mobile menu button - Shows on small screens */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Our Courses</a>

                    {/* Mobile Company dropdown */}
                    <div>
                        <button
                            className="text-gray-700 hover:text-gray-900 px-3 py-2 flex items-center w-full justify-between"
                            onClick={() => setCompanyOpen(!companyOpen)}
                        >
                            Company
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform ${companyOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {companyOpen && (
                            <div className="pl-4">
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About Us</a>
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Team</a>
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Vision</a>
                            </div>
                        )}
                    </div>

                    {/* Mobile OurServices dropdown */}
                    <div>
                        <button
                            className="text-gray-700 hover:text-gray-900 px-3 py-2 flex items-center w-full justify-between"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            OurServices
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {servicesOpen && (
                            <div className="pl-4">
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Web Development</a>
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Mobile Apps</a>
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Consulting</a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">OurWorks</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Careers</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Blogs</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">ContactUs</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;