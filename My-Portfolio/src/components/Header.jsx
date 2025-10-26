import React, { useEffect, useState } from "react";

const Header = () => {
  // to Make header stay when scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b borders-slate-800"
          : "bg-transparent"
      }`}
    >
      {/* transition design */}
      <div className="container mx-auto px-6 py-4">
        {/* container */}
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="text-2xl font-bold">
            <span className="text-blue-400">BRENDON</span>
            <span className="text-white">MAUNGWE</span>
            <span className="text-blue-400">.</span>
          </div>

          {/* Desktop Menus */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Skills
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Projects
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Download CV */}
          <a
            href="https://drive.google.com/uc?export=download&id=1TU2epZn1bDEpogF1MqJ3aq-o42OJ1MAb"
            className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg 
          hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer "
          >
            Download CV Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
