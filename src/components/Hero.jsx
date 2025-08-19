import React from 'react'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
    <div className='flex flex-col-reverse md:flex-row justify-evenly mt-14 text-white pt-20' id='home'>
        <div className='flex flex-col justify-center'>
            <h1 className='font-Lexand text-[3rem] text-white'>Grand <span className='hover:text-purple-700 transition-all'> Rising </span></h1>
            <p className='mt-5 text-xl'><span className='text-purple-700'> \ </span>I am a <span className='text-purple-700'>WEB DEVELOPER</span> and a <span className='text-purple-700'>WEB3 BUSINESS DEVELOPER</span></p>
            <Link to="contact" smooth={true} duration={500}>
            <button className='border-2 w-[150px] h-[50px] mt-12 text-purple-400 hover:text-white transition-all'>CONTACT ME</button>
            </Link>
        </div>
        <img src="/kawai.jpg" alt="Main character" className='rounded-t-[50%] w-full md:w-1/2'/>
    </div>
    </>
  )
}

export default Hero