import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='text-2xl text-white mt-12 pt-20' id='about'><span className='text-purple-700'> # </span> About-me</h1> 
    <hr className='border-gray-300 w-1/2' />
    <section className='text-white flex flex-col md:flex-row justify-evenly mt-6'>
      <div className='flex flex-col justify-center'>
        <pre className='font-extrabold'>
          Hello, i'm Hikaru! <br /><br/>
        </pre> 
      <p>
        I'm a self-taught front-end developer based in<br/>
        Ogun-state Nigeria. I can develop responsive websites<br/>
        from scratch and raise them into modern user-friendly<br/>
        web experiences. <br/><br/>

        I am a Mathematics<br/>
        undergraduate from FUNAAB. I am very<br/>
        passionate about improving my coding skills &<br/>
        developing applications & websites & Ai automations.<br/>
        I always strive to<br/>
        learn about the newest technologies and frameworks.<br/><br/>

        I am also very passionate about the decentralized<br/>
        world ahead. I am self-taught with experiences & courses<br/>
        been the teacher. I am all about improving my Business<br/>
        Development skills & strategic partnership & growth.<br/>
        I am eager to learn about the lastest info & tech in WEB3.
      </p>
      </div>
      <img src="/kawai.jpg" alt="innerself" className='w-[29rem] rounded-3xl mt-5 md:m-0' />
    </section>
    </>
  )
}

export default About