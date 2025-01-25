"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the navbar visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className="navbar bg-white z-50 sticky top-0 shadow-md">
      <header className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl font-bold">Ali Dost</span>
        </p>

        {/* Mobile Hamburger Icon */}
        <button
          className="hamburger-icon md:hidden ml-auto text-gray-500 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Full-Screen Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex flex-col items-center justify-center`}
        >
          <button
            className="text-white text-3xl absolute top-4 right-4"
            onClick={toggleMenu}
          >
            X
          </button>

          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-white text-2xl" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-white text-2xl" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/skills" className="text-white text-2xl" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="/project" className="text-white text-2xl" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/contact" className="text-white text-2xl" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>

        {/* Regular Navbar Links (visible on desktop) */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:block hidden">
          <Link href="/" className="nav-link px-4">
            Home
          </Link>
          <Link href="/about" className="nav-link px-4">
            About
          </Link>
          <Link href="/skills" className="nav-link px-4">
            Skills
          </Link>
          <Link href="/project" className="nav-link px-4">
            Projects
          </Link>
          <Link href="/contact" className="nav-link px-4">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
