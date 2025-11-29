import React from "react";
import { FaCar } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      {/**Desktop section */}
      <nav className="container flex justify-between">
        <div className="flex items-center">
          <FaCar size={32} className="text-primary" />
          <a href="/" className="font-bold text-2xl">
            AutoSale
          </a>
        </div>
        <div className="flex items-center gap-8 font-medium text-xl">
          <a
            href="/"
            className="hover:text-primary font-bold transition duration-200 ease-linear"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:text-primary font-bold transition duration-200 ease-linear"
          >
            Buy
          </a>
          <a
            href="/"
            className="hover:text-primary font-bold transition duration-200 ease-linear"
          >
            Sell
          </a>
          <a
            href="/"
            className="hover:text-primary font-bold transition duration-200 ease-linear"
          >
            About us
          </a>
          <a
            href="/"
            className="hover:text-primary font-bold transition duration-200 ease-linear"
          >
            Services
          </a>

          <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
