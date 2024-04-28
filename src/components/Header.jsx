import React from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-purple-heart-950 text-white px-9 py-4">
      <div className="mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="zenwork logo" />
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
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
