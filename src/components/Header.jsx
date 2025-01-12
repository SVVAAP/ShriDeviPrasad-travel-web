import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              ShriDeviPrasad
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 transition duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-blue-600 transition duration-200"
            >
              Services
            </Link>
            <Link
              to="/packages"
              className="text-gray-600 hover:text-blue-600 transition duration-200"
            >
              Packages
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 transition duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden")
              }
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white shadow-md py-4 space-y-4"
      >
        <Link
          to="/"
          className="block text-gray-600 hover:text-blue-600 transition duration-200 text-center"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block text-gray-600 hover:text-blue-600 transition duration-200 text-center"
        >
          About
        </Link>
        <Link
          to="/services"
          className="block text-gray-600 hover:text-blue-600 transition duration-200 text-center"
        >
          Services
        </Link>
        <Link
          to="/packages"
          className="block text-gray-600 hover:text-blue-600 transition duration-200 text-center"
        >
          Packages
        </Link>
        <Link
          to="/contact"
          className="block text-gray-600 hover:text-blue-600 transition duration-200 text-center"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
