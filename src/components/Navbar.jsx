import React, {useState} from "react";
import { FaCar } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai"
import {RiMenuFill} from "react-icons/ri"
import {Link} from "react-router-dom"

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };
  return (
    <header className=" bg-white text-black py-4 fixed w-full z-10">
      {/**Desktop section */}
      <nav className="px-4 mx-auto flex justify-between">
        <div className="flex items-center">
          <FaCar size={32} className="text-primary" />
          <Link to="/" className="font-bold text-2xl">
            Auto<span className="text-primary">Sale</span>
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link to="/cars"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Cars
          </Link>
          <Link
            to="/sell"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Sell
          </Link>
          <Link
            to="/about"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            About us
          </Link>
          <Link
            to="/services"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Services
          </Link>

          <button className=" hidden lg:flex border-2 border-primary text-lg  px-4 rounded-md hover:bg-hover transition duration-200 ease-linear">Sign In</button>
        </div>

        <div className="md:hidden flex items-center">
            {menu ? <AiOutlineClose size={25} onClick={handleChange} /> :  <RiMenuFill size={25} onClick={handleChange} /> }
        </div>
      </nav>
      {/**Responsivenes */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-white text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>
         <Link
            to="/"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link to="/cars"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Cars
          </Link>
          <Link
            to="/sell"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Sell
          </Link>
          <Link
            to="/about"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            About us
          </Link>
          <Link
            to="/services"
            className="hover:text-primary font-medium transition duration-200 ease-linear"
          >
            Services
          </Link>
        <div>
            <button className=" border-2 border-black py-1 px-4 rounded-md">Sign In</button>
        </div>
          
      </div>
    </header>
  );
};

export default Navbar;
