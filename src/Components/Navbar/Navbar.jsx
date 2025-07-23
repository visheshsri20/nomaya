import React, { useState } from 'react';
import './navbar.css';
import { MdModeOfTravel } from 'react-icons/md';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  const closeNav = () => {
    setActive(false);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <MdModeOfTravel className="icon" />
            <h1>Nomaya.</h1>
          </a>
        </div>

        <div className={active ? 'navBar activeNavbar' : 'navBar'}>
          <ul className="navLists flex">
            <li className="navItem"><a href="#" className="navLink">Home</a></li>
            <li className="navItem"><a href="#about" className="navLink">About</a></li>
            <li className="navItem"><a href="#places" className="navLink">Places</a></li>
            <li className="navItem"><a href="#packages" className="navLink">Packages</a></li>
            <li className="navItem"><a href="#blogs" className="navLink">Blogs</a></li>
            <li className="navItem"><a href="#getintouch" className="navLink">Get in touch</a></li>

            <button className="btn">
              <a href="#booknow" className="btnLink">Book Now</a>
            </button>
          </ul>

          <div onClick={closeNav} className="closeNavbar">
            <AiOutlineClose className='icon' />
          </div>
        </div>

        <div onClick={toggleNav} className="toggleNavbar">
          <RxHamburgerMenu className='icon' />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
