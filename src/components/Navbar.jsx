import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black backdrop-blur-md max-w-7xl mx-auto px-6 py-4 flex justify-between items-center rounded-xl border border-neutral-700 shadow-lg">
                {/* Left: Logo */}
                <img src={logo} alt="logo" width={120} height={24} className="hover:opacity-90 transition duration-300" />

                {/* Center: Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
                    <a href="#works" className="hover:text-cyan-400 transition duration-300">
                        How it works
                    </a>
                    <a href="#pricing" className="hover:text-cyan-400 transition duration-300">
                        Pricing
                    </a>
                    <a href="#testimonials" className="hover:text-cyan-400 transition duration-300">
                        Testimonials
                    </a>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    
                    <a href="#" className="border border-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition duration-300">
                        Get a Demo
                    </a>
                    <a href="#" className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300">
                        Start Free Trial
                    </a>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        onClick={toggleMenu}
                    >
                        {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Line size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black backdrop-blur-lg border border-neutral-700 p-6 rounded-xl mt-2 shadow-xl">
                    <div className="flex flex-col space-y-6 text-neutral-300">
                        <a href="#works" className="hover:text-cyan-400 transition duration-300">
                            How it works
                        </a>
                        <a href="#pricing" className="hover:text-cyan-400 transition duration-300">
                            Pricing
                        </a>
                        <a href="#testimonials" className="hover:text-cyan-400 transition duration-300">
                            Testimonials
                        </a>
                        <a href="#" className="border border-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition duration-300">
                            Get a Demo
                        </a>
                        <a href="#" className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300">
                            Start Free Trial
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
