import React, { useState } from "react";
import logo from "../../assets/portfolio.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const links = (
    <div className="">
      <ul className="flex flex-col md:flex-row gap-10 bg-textPrimaryColor md:bg-black md:text-textPrimaryColor text-black p-6 font-semibold">
        <div>
          <li>
            <a
              href="#home"
              className={
                activeLink === "#home" ? "border-b-2 border-b-textColor" : ""
              }
              onClick={() => setActiveLink("#home")}
            >
              Home
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="#aboutMe"
              className={
                activeLink === "#aboutMe" ? "border-b-2 border-b-textColor" : ""
              }
              onClick={() => setActiveLink("#aboutMe")}
            >
              About Me
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="#skills"
              className={
                activeLink === "#skills" ? "border-b-2 border-b-textColor" : ""
              }
              onClick={() => setActiveLink("#skills")}
            >
              Skills
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="#contactMe"
              className={
                activeLink === "#contactMe"
                  ? "border-b-2 border-b-textColor"
                  : ""
              }
              onClick={() => setActiveLink("#contactMe")}
            >
              Contact Me
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
  return (
    <div className="bg-black text-textPrimaryColor fixed z-10 max-w-screen-xl flex justify-between items-center w-full">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-secondaryColor rounded-box z-[10] mt-3 p-2 shadow flex flex-col gap-2"
            >
              {links}
            </ul>
          </div>
          <div>
            <img className="md:w-[180px] md:h-[70px]" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="https://golamsarwar-cv.tiiny.site/">
            <button className="font-semibold border-2 rounded-3xl border-textColor px-3 py-3">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
