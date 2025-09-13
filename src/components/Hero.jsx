import React from 'react'
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <div
      className="flex flex-col-reverse justify-center items-center mt-10 md:mt-14 text-white pt-10 md:pt-20 px-4 md:px-0"
      id="home"
      data-aos = "fade up"
    >
      <div className="flex flex-col justify-center items-center md:items-center w-full md:w-1/2">
        <h1 className="font-Lexand text-3xl sm:text-4xl md:text-5xl text-white text-center md:text-left md:mt-11">
          Grand <span className="hover:text-purple-700 transition-all"> Rising </span>
        </h1>
        <p className="mt-4 md:mt-5 text-base sm:text-lg md:text-xl text-center md:text-left">
          <span className="text-purple-700"> \ </span>I am a <span className="text-purple-700">WEB DEVELOPER</span> and a <span className="text-purple-700">WEB3 BUSINESS DEVELOPER</span>
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="border-2 w-36 h-12 mt-8 md:mt-12 text-purple-400 hover:text-white transition-all">
            CONTACT ME
          </button>
        </Link>
      </div>
      <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/sigh.jpg"
          alt="Main character"
          className="rounded-t-[50%] rounded-b-2xl w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero