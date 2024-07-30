import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f7e730] text-black font-ibm_plex relative z-10 border-t-[6px] border-black py-5">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center max-w-[1600px] mx-auto w-full flex-wrap justify-center gap-4">
        <span className="text-[16px] md:text-[20px] leading-[20px] md:leading-[26px] font-medium font-ibm_plex text-black text-center lg:text-left">
          2024 © ALL RIGHTS RESERVED
        </span>
        <a
          href="https://t.me/osnovoco"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] md:text-[20px] leading-[20px] md:leading-[26px] font-medium font-ibm_plex text-black flex items-center gap-2 hover:underline"
        >
          DESIGNED BY{" "}
          <span className="font-bold ml-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="18"
              viewBox="0 0 29 18"
              fill="none"
            >
              <path
                d="M21.6898 0.59668H15.3555L18.5227 5.87484L21.6898 11.153L24.8563 5.87484L28.0235 0.59668H21.6898Z"
                fill="url(#paint0_linear_418_5)"
              ></path>
              <path
                d="M8.73308 17.4011H16.4869L12.6104 10.9397L8.73308 4.47754L4.8558 10.9397L0.978516 17.4011H8.73308Z"
                fill="url(#paint1_linear_418_5)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_418_5"
                  x1="24.3973"
                  y1="-2.77552"
                  x2="16.5038"
                  y2="8.84742"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="black"></stop>
                  <stop offset="1" stopColor="#000"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_418_5"
                  x1="15.7805"
                  y1="5.14307"
                  x2="5.34157"
                  y2="23.3002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#000"></stop>
                  <stop offset="1" stopColor="#000"></stop>
                </linearGradient>
              </defs>
            </svg>
            OSNOVO
          </span>{" "}
          © 2024
        </a>
      </div>
    </footer>
  );
};

export default Footer;
