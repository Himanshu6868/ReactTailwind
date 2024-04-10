import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

        <div className="flex flex-col md:hidden gap-2 over">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>

          <div
            className={`absolute md:flex gap-6 flex-col w-full h-screen bg-white right-0 top-20 transform transition-transform duration-200 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="p-5 ">
              <li className="m-5">
                <a href="#">Developers</a>
              </li>
              <li className="m-5">
                <a href="#">Report Abuse</a>
              </li>
              <li className="m-5">
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 border-l-2 pl-5">
              <li className="ml-5">
                <a href="#">Login</a>
              </li>
              <li className="m-5">
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
