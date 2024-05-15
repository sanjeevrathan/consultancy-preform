import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import brand_logo from "../Assets/brand_logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-auto" />
            <img
              src={brand_logo}
              alt="Brand Logo"
              className="w-24 h-auto ml-4"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menu ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <div
          ref={menuRef}
          className={`${
            menu ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow flex justify-evenly">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-gray-900 hover:text-gray-700 mr-4"
            >
              HOME
            </Link>
            <Link
              to="/preform"
              className="block mt-4 md:inline-block md:mt-0 text-gray-900 hover:text-gray-700 mr-4"
            >
              PREFORM
            </Link>
            <Link
              to="/caps"
              className="block mt-4 md:inline-block md:mt-0 text-gray-900 hover:text-gray-700 mr-4"
            >
              CAPS
            </Link>
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 text-gray-900 hover:text-gray-700 mr-4"
            >
              ABOUT US
            </Link>
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 text-gray-900 hover:text-gray-700 mr-4"
            >
              CONTACT US
            </Link>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            {localStorage.getItem("auth-token") ? (
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
                className="block px-4 py-2 border border-gray-700 rounded-md text-gray-700 font-semibold focus:outline-none hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 border border-gray-700 rounded-md text-gray-700 font-semibold focus:outline-none hover:bg-gray-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
