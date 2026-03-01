import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const roles = ["WEB DEVELOPER", "MOBILE DEVELOPER", "WEB3 DEVELOPER"];

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const deleteTimeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimeout);
      }
    } else {
      if (displayText === currentWord) {
        setIsPaused(true);
      } else {
        const typeTimeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typeTimeout);
      }
    }
  }, [displayText, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const Hero = () => {
  const typewriterText = useTypewriter(roles, 80, 40, 1500);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[100vh] text-white pt-24 md:pt-32 px-4 md:px-0 overflow-hidden"
      id="home"
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Profile Image with intense glow ring */}
        <div className="relative group mt-8">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow" />
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-80" />
          <img
            src="/sigh.jpg"
            alt="Hikaru Sama"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-2 border-orange-400/50"
          />
        </div>

        {/* Name and Title */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <p className='text-orange-400/80 font-inter font-medium text-sm md:text-base tracking-[0.3em] uppercase'>
            CRAFTING DIGITAL EXPERIENCES
          </p>

          <h1 className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center tracking-tight bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent drop-shadow-sm">
            Trinity Adeleye
          </h1>

          {/* Typewriter Effect */}
          <div className="h-8 md:h-10 flex items-center justify-center">
            <p className="text-lg sm:text-xl md:text-2xl text-center font-lexendDeca">
              a{' '}
              <span className="text-orange-400 font-bold inline-block min-w-[200px] md:min-w-[280px]">
                {typewriterText}
                <span className="animate-blink text-orange-300 ml-0.5">|</span>
              </span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="contact" smooth={true} duration={500}>
          <button className="group relative mt-8 md:mt-12 px-10 py-4 font-inter font-bold tracking-[0.2em] overflow-hidden rounded-sm transition-all duration-500 bg-white text-black hover:bg-transparent">
            {/* Button gradient border on hover */}
            <span className="absolute inset-0 border border-transparent group-hover:border-orange-500 transition-colors duration-500" />
            {/* Glow effect */}
            <span className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 blur-xl transition-all duration-500" />
            <span className="relative group-hover:text-orange-400 transition-colors duration-500">
              LET'S COLLABORATE
            </span>
          </button>
        </Link>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl md:text-3xl text-white/70 mt-4">
          <a
            href="https://github.com/Terry3nty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/trinity-adeleye-1b195735b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/hikaru___san"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/hikaru____sama"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero