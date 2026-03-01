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
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ${scrolled
                ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <h1 className="font-inter text-2xl md:text-3xl font-black tracking-tighter cursor-pointer group flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
                    <span className="text-white group-hover:text-orange-100 transition-colors duration-500">
                        HIKARU
                    </span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 font-inter text-xs font-bold tracking-[0.2em] uppercase">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="relative text-white/50 hover:text-white transition-colors duration-500 cursor-pointer group py-2"
                            >
                                <span className="relative z-10">{link.label}</span>
                                {/* Glow dot on hover */}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white/80 hover:text-orange-400 transition-colors duration-300 text-2xl"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-700 ease-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-8">
                    <ul className="flex flex-col gap-6 font-inter text-xs font-bold tracking-[0.2em] uppercase">
                        {navLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    className="block py-2 text-white/50 hover:text-white hover:translate-x-2 transition-all duration-500 flex items-center gap-4 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
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