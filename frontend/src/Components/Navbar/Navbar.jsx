import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import brand_logo from "../Assets/brand_logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  return (
    <div className="nav flex justify-between items-center shadow-md px-8 py-4">
      <Link
        to="/"
        onClick={() => {
          setMenu("home");
        }}
        className="flex items-center px-4"
      >
        <img src={logo} alt="logo" className="w-12 h-auto" />
        <img src={brand_logo} alt="logo" className="w-24 h-auto ml-4" />
      </Link>
      <ul ref={menuRef} className="md:flex md:items-center md:space-x-4 hidden">
        <li
          onClick={() => {
            setMenu("home");
          }}
          className={`cursor-pointer px-4 ${
            menu === "home" ? "border-b-2 border-red-500 pb-1" : ""
          }`}
        >
          <Link to="/" className="hover:text-gray-700">
            HOME
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("preform");
          }}
          className={`cursor-pointer px-4 ${
            menu === "preform" ? "border-b-2 border-red-500 pb-1" : ""
          }`}
        >
          <Link to="/preform" className="hover:text-gray-700">
            PREFORM
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("caps");
          }}
          className={`cursor-pointer px-4 ${
            menu === "caps" ? "border-b-2 border-red-500 pb-1" : ""
          }`}
        >
          <Link to="/caps" className="hover:text-gray-700">
            CAPS
          </Link>
        </li>
        {/* <li
          onClick={() => {
            setMenu("machinery");
          }}
          className={`cursor-pointer px-4 ${
            menu === "machinery" ? "border-b-2 border-red-500 pb-1" : ""
          }`}
        >
          <Link to="/machinery" className="hover:text-gray-700">
            MACHINERY
          </Link>
        </li> */}
        <li
          onClick={() => {
            setMenu("about");
          }}
          className={`cursor-pointer px-4 ${
            menu === "about" ? "border-b-2 border-red-500 pb-1" : ""
          }`}
        >
          <Link to="/about" className="hover:text-gray-700">
            ABOUT US
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
          className={`cursor-pointer px-4 ${
            menu === "contact" ? "border-b-2 border-red-500 pb-1" : ""
          }`}
        >
          <Link to="/contact" className="hover:text-gray-700">
            CONTACT US
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
            className="px-4 py-2 border border-gray-700 rounded-md text-gray-700 font-semibold focus:outline-none hover:bg-gray-200"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 border border-gray-700 rounded-md text-gray-700 font-semibold focus:outline-none hover:bg-gray-200"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
