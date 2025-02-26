"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin, BsHouseFill, BsPersonFill, BsCodeSlash, BsTools, BsEnvelopeFill } from "react-icons/bs";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const menuItems = [
    { href: "/", text: "Home", icon: <BsHouseFill className="text-2xl" /> },
    { href: "/about", text: "About", icon: <BsPersonFill className="text-2xl" /> },
    { href: "/project", text: "Projects", icon: <BsCodeSlash className="text-2xl" /> },
    { href: "/skills", text: "Skills", icon: <BsTools className="text-2xl" /> },
    { href: "/contact", text: "Contact", icon: <BsEnvelopeFill className="text-2xl" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-gray-900/90 shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          Ali Dost
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setActiveItem(item.href)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${activeItem === item.href ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:text-white hover:bg-gray-800/50"}`}>
              {item.icon}
              <span>{item.text}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 bg-blue-500/20 rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-gray-900 p-6 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { setActiveItem(item.href); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${activeItem === item.href ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}>
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
