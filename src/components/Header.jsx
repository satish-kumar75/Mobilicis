import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-purple-heart-950 text-white px-9 py-4 z-10">
      <div className="mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="zenwork logo" />
        </Link>
        <RxHamburgerMenu
          className={`block sm:hidden text-3xl cursor-pointer ${
            menuOpen ? "hidden" : "block"
          }`}
          onClick={toggleMenu}
        />
        <nav className={`hidden sm:block ${menuOpen ? "menuactive" : ""}`}>
          <IoMdClose
            className={`block sm:hidden text-3xl cursor-pointer relative top-4 -right-44 mb-6 ${
              menuOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          />
          <ul className="flex sm:space-x-6">
            <NavLink
              to={"/jobs"}
              className="text-lg hover:text-purple-heart-600 cursor-pointer transition-all ease-out"
            >
              Job Listing
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-lg hover:text-purple-heart-600 cursor-pointer transition-all ease-out"
            >
              About Japan
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-lg hover:text-purple-heart-600 cursor-pointer transition-all ease-out"
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
