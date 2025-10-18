import React from 'react'
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const Hero = () => {

  return (
    <div
      className="flex flex-col-reverse justify-center items-center mt-10 md:mt-14 text-white pt-10 md:pt-20 px-4 md:px-0"
      id="home"
    >

      <div className="flex gap-4 text-3xl text-white mt-8">
        <a href="https://github.com/Terry3nty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hikaru-san-1b195735b" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
         <FaLinkedin />
        </a>
        <a href="https://x.com/hikaru___san" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
         <FaXTwitter />
        </a>
      </div>

      <div className="flex flex-col justify-center items-center md:items-center w-full md:w-1/2">
      <p className='text-purple-400 md:mt-5 font-lexendDeca font-bold md:text-2xl'>Hello my name is </p>
        <h1 className="font-Lexand text-3xl sm:text-4xl md:text-5xl text-white text-center md:text-left ">
          Hikaru Sama 
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center md:text-left">
         a <span className="text-purple-400 font-lexendDeca font-bold">WEB DEVELOPER</span>
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