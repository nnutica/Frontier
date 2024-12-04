import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from "../assets/icon.png"

interface NavbarProps {
    className?: string; // รองรับ prop className
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const location = useLocation(); // ใช้ตรวจสอบเส้นทางที่ active

    // ไอคอนสำหรับ Tab Bar
    const tabs = [
        { name: 'Home', path: '/', icon: 'home' },
        { name: 'About', path: '/about', icon: 'info-circle' },
        { name: 'Booking', path: '/Booking', icon: 'calendar' },
        { name: 'Service', path: '/service', icon: 'tools' },
        { name: 'Dashboard', path: '/Dashboard', icon: 'chart-bar' },
    ];

    return (
        <nav className={`bg-white shadow-md fixed w-full z-10 ${className || ''}`}>
            {/* Desktop Menu */}
            <div className="hidden md:flex container mx-auto px-4 py-4 items-center justify-between">
            <img 
                         className="h-10 w-10 object-cover flex items-center" 
                        src="https://img2.pic.in.th/pic/56fefe1df5253aac.png" 
                         alt="Your Company"
                />
            <Link to="/" className="text-2xl font-bold text-blue-600">
                    Room<span className="text-gray-800">Snap</span>
                </Link>
            <div className="flex shrink-0 items-center">
                </div>
                <ul className="flex space-x-8 text-gray-700">
                    <li><Link to="/" className="hover:text-blue-600 transition duration-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-600 transition duration-300">About</Link></li>
                    <li><Link to="/Booking" className="hover:text-blue-600 transition duration-300">Booking</Link></li>
                    <li><Link to="/ourmember" className="hover:text-blue-600 transition duration-300">Our member</Link></li>
                    <li><Link to="/service" className="hover:text-blue-600 transition duration-300">Service</Link></li>
                    <li><Link to="/Dashboard" className="hover:text-blue-600 transition duration-300">Dashboard</Link></li>
                </ul>
            </div>

            {/* Mobile Tab Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-between items-center px-4 py-2 border-t border-gray-200">
                {tabs.map((tab) => (
                    <Link
                        key={tab.name}
                        to={tab.path}
                        className={`flex flex-col items-center justify-center text-sm font-medium ${
                            location.pathname === tab.path ? 'text-blue-600' : 'text-gray-500'
                        }`}
                    >
                        {/* ใช้ Font Awesome หรือ Tailwind Icons */}
                        <i
                            className={`fas fa-${tab.icon} text-lg ${
                                location.pathname === tab.path ? 'text-blue-600' : 'text-gray-500'
                            }`}
                        ></i>
                        <span>{tab.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

