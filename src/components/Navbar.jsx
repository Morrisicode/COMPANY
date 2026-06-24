import { Link } from "react-router-dom";
import Logo from "../images/Final Logo copy.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Topbar from "./Topbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Topbar /> */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="w-[90%] mx-auto h-20 flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-32 h-auto md:w-40  " />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-semibold">
            {["Home", "About", "Portfolio", "Contact", "Team"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-20 left-0 w-50 h-full bg-white shadow-lg transition-all duration-500 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <nav className="flex flex-col p-6 gap-6 text-lg font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link to="/team" onClick={() => setIsOpen(false)}>
              Team
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
