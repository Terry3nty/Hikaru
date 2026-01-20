import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const roles = ["WEB DEVELOPER", "MOBILE DEVELOPER" , "WEB3 DEVELOPER"];

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
      className="relative flex flex-col items-center justify-center min-h-[90vh] text-white pt-24 md:pt-32 px-4 md:px-0 overflow-hidden"
      id="home"
    >
      {/* Subtle gradient orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Profile Image with glow ring */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-80" />
          <img
            src="/sigh.jpg"
            alt="Hikaru Sama"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-2 border-purple-400/50"
          />
        </div>

        {/* Name and Title */}
        <div className="flex flex-col items-center gap-4">
          <p className='text-purple-400/80 font-lexendDeca font-medium text-sm md:text-base tracking-widest uppercase'>
            Hello, my name is
          </p>

          <h1 className="font-lexend text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Hikaru Sama
          </h1>

          {/* Typewriter Effect */}
          <div className="h-8 md:h-10 flex items-center justify-center">
            <p className="text-lg sm:text-xl md:text-2xl text-center font-lexendDeca">
              a{' '}
              <span className="text-purple-400 font-bold inline-block min-w-[200px] md:min-w-[280px]">
                {typewriterText}
                <span className="animate-blink text-purple-300 ml-0.5">|</span>
              </span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="contact" smooth={true} duration={500}>
          <button className="group relative mt-4 md:mt-8 px-8 py-3 font-lexendDeca font-medium tracking-wider overflow-hidden rounded-lg transition-all duration-300">
            {/* Button gradient border */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-lg" />
            <span className="absolute inset-[1px] bg-black rounded-lg transition-all duration-300 group-hover:bg-purple-900/50" />
            {/* Glow effect */}
            <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 blur-xl transition-all duration-300" />
            <span className="relative text-purple-400 group-hover:text-white transition-colors duration-300">
              CONTACT ME
            </span>
          </button>
        </Link>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl md:text-3xl text-white/70 mt-4">
          <a
            href="https://github.com/Terry3nty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hikaru-san-1b195735b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/hikaru___san"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero