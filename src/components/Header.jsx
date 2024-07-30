import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-black font-ibm_plex relative z-10 bg-[#f7e730]">
      <div className="flex justify-center items-center p-6">
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            About
          </a>
          <span>/</span>
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            How to buy?
          </a>
        </div>
        <img src="/header-logo.svg" alt="Logo" className="h-16 mx-10" />
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            Roadmap
          </a>
          <span>/</span>
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            Tokenomics
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#091914] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-[#f7e730] py-4">
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            About
          </a>

          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            How to buy?
          </a>
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={toggleMenu}
          >
            Roadmap
          </a>
          <a
            href="#"
            className="text-[24px] leading-[33.6px] transition-all duration-300 ease-in-out text-[#091914] font-medium hover:text-[#0BB784] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={toggleMenu}
          >
            Tokenomics
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
