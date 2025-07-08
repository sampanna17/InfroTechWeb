import { useState } from "react";
import logo from "../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass =
        "relative text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out " +
        "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0959a2] " +
        "hover:after:w-full after:transition-all after:duration-500 after:ease-in-out";

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto p-2 px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                    </div>

                    {/* Center Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
                        <a href="#" className={navLinkClass}>Home</a>

                        {/* Company Dropdown (on hover) */}
                        <div className="relative group">
                            <div className={`${navLinkClass} flex items-center cursor-pointer`}>
                                Company
                                <FaCaretDown className="ml-1" />
                            </div>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Dedicated Team</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Testimonials</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Clients</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Message From CEO</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Payment Gateway</a>
                            </div>
                        </div>

                        {/* Services Dropdown (on hover) */}
                        <div className="relative group">
                            <div className={`${navLinkClass} flex items-center cursor-pointer`}>
                                OurServices
                                <FaCaretDown className="ml-1" />
                            </div>
                            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Social Media Management</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Design And Development</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SEO And Digital Marketing</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">WordPress Development</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">E-Commerce Solutions</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mobile App Development</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Email Subscription</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Branding</a>
                            </div>
                        </div>

                        <a href="#" className={navLinkClass}>OurWorks</a>
                        <a href="#" className={navLinkClass}>Careers</a>
                        <a href="#" className={navLinkClass}>Blogs</a>
                        <a href="#" className={navLinkClass}>ContactUs</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#"
                            className="text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
                            style={{ backgroundColor: "#0959a2" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#074a8a")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0959a2")}
                        >
                            Our Courses
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Our Courses</a>

                    {/* Company Dropdown Mobile */}
                    <div>
                        <button
                            onClick={() => setCompanyOpen(!companyOpen)}
                            className="text-gray-700 hover:text-gray-900 px-3 py-2 flex items-center w-full justify-between"
                        >
                            Company
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform ${companyOpen ? "rotate-180" : ""}`}
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

                    {/* Services Dropdown Mobile */}
                    <div>
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="text-gray-700 hover:text-gray-900 px-3 py-2 flex items-center w-full justify-between"
                        >
                            OurServices
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
