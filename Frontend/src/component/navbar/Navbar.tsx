import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    className?: string; // รองรับ prop className
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={`bg-white shadow-md fixed w-full ${className || ''}`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Room<span className="text-gray-800">Snap</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700">
                    <li><Link to="/" className='hover:text-blue-600'>Home</Link></li>
                    <li><Link to="/about" className='hover:text-blue-600'>About</Link></li>
                    <li><Link to="/Booking" className='hover:text-blue-600'>Booking</Link></li>
                    <li><Link to="/service" className='hover:text-blue-600'>Service</Link></li>
                    <li><Link to="/about-us" className='hover:text-blue-600'>Our-Member</Link></li>
                    <li><Link to="/Dashboard" className='hover:text-blue-600'>Dashboard</Link></li>
                </ul>


            </div>

        </nav>
    );
};

export default Navbar;
