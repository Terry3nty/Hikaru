import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { to: "home", label: "Home" },
    { to: "project", label: "Project" },
    { to: "skills", label: "Skills" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "py-3 bg-black/80 backdrop-blur-xl border-b border-purple-500/10 shadow-lg shadow-purple-900/10"
                    : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <h1 className="font-lexend text-2xl md:text-3xl font-bold tracking-wider cursor-pointer group">
                    <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent group-hover:from-white group-hover:via-purple-200 group-hover:to-white transition-all duration-300">
                        HIKARU
                    </span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-lexendDeca text-sm tracking-wider">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="relative text-white/70 hover:text-white transition-colors duration-300 cursor-pointer group py-2"
                            >
                                <span className="relative z-10">{link.label}</span>
                                {/* Underline effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-400 group-hover:w-full transition-all duration-300" />
                                {/* Glow dot */}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white/80 hover:text-purple-400 transition-colors duration-300 text-2xl"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-black/95 backdrop-blur-xl border-b border-purple-500/20 px-6 py-6">
                    <ul className="flex flex-col gap-4 font-lexendDeca text-sm tracking-wider">
                        {navLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    className="block py-2 text-white/70 hover:text-purple-400 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-purple-500 pl-2"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;