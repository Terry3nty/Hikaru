import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen);
    }


  return (
      <nav className='flex flex-row text-white gap-14 justify-evenly fixed top-0 left-0 z-50 bg-black px-6 py-4 shadow-md w-full cursor-pointer'>
        
        {/* Name */}
        <h1 className="font-Lexand text-bold text-2xl tracking-widest">HIKARU</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-row gap-12 tracking-wider font-Lexand">
        <li>
            <Link to="home" smooth={true} duration={500}>
            <span className="text-purple-700">#</span> Home
            </Link>
        </li>
        <li>
            <Link to="project" smooth={true} duration={500}>
            <span className="text-purple-700">#</span> Project
            </Link>
        </li>
        <li>
            <Link to="skills" smooth={true} duration={500}>
            <span className="text-purple-700">#</span> Skills
            </Link>
        </li>
        <li>
            <Link to="about" smooth={true} duration={500}>
            <span className="text-purple-700">#</span> About-me
            </Link>
        </li>
        <li>
            <Link to="contact" smooth={true} duration={500}>
            <span className="text-purple-700">#</span> Contact-me
            </Link>
        </li>
        </ul>


        <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none transition-all">
                {isOpen ?("X"):("=")}
            </button>
        </div>

        {isOpen && (
            <div className="md:hidden">
        <ul>
            <li>
                <Link to="home" smooth={true} duration={500}>
                <span className="text-purple-700">#</span> Home
                </Link>
            </li>
            <li>
                <Link to="project" smooth={true} duration={500}>
                <span className="text-purple-700">#</span> Project
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                <span className="text-purple-700">#</span> Skills
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                <span className="text-purple-700">#</span> About-me
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                <span className="text-purple-700">#</span> Contact-me
                </Link>
            </li>
        </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar