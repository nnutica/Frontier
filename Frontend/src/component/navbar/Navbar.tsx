import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/icon.png";

interface NavbarProps{
  className?:string
}


const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      {/* Container */}
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Icon}
            alt="Your Company"
            className="h-10 w-10 mr-2"
          />
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Fron<span className="text-gray-800">tier</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Booking"
              className="hover:text-blue-600 transition duration-300"
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              to="/ourmember"
              className="hover:text-blue-600 transition duration-300"
            >
              Our Member
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="hover:text-blue-600 transition duration-300"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard"
              className="hover:text-blue-600 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/bookingrecord"
              className="hover:text-blue-600 transition duration-300"
            >
              Record
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 pb-4 text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Booking"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              to="/ourmember"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Our Member
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/bookingrecord"
              className="hover:text-blue-600 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Record
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
