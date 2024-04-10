import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility on button click
  };

  return (
    <div className=" px-6 lg:px-28 py-6 md:gap-2">
      <nav className="flex justify-between items-center ">
        <div className="sm:text-2xl text-lg">
          {/* Added padding to span for better spacing */}
          <span className="border-r-2 mr-2 p-2 text-blue-500">Calendly</span>
          <a href="#" className="text-black font-semibold ">
            Help Center
          </a>
        </div>
        <div className="hidden md:flex gap-6">
          {/* Navigation on larger screens */}
          <ul className="flex lg:gap-8 sm:gap-2">
            <li>
              <a href="#">
                <span>Developers</span>
                <span style={{ marginLeft: "5px" }}>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Report Abuse</span>
                <span style={{ marginLeft: "5px" }}>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </span>
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="flex gap-4 border-l-2 lg:pl-5 pl-4 ">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden gap-2">
          {/* Button and menu on smaller screens */}
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16v12H4zm2-2a2 2 0 10-4 0 2 2 0 004 0zM2 16a2 2 0 104 0 2 2 0 00-4 0z"
              />
            </svg>
          </button>
          <div
            className={`hidden menu md:flex gap-6 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {" "}
            {/* Toggle visibility based on isOpen state */}
            <ul>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Report Abuse</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="flex gap-2 border-l-2 pl-5">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
