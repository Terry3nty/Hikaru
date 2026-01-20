import React from 'react'

const About = () => {
  return (
    <section className='mt-16 md:mt-24 pt-8' id='about'>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white font-lexendDeca">
          <span className="text-purple-500">#</span> About Me
        </h1>
        <div className="flex-1 h-[1px] max-w-[200px] bg-gradient-to-r from-purple-500/50 to-transparent" />
      </div>

      {/* Content Grid */}
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <div className='space-y-6 font-lexendDeca'>
          <p className='text-xl md:text-2xl font-bold text-white'>
            Hello, I'm{' '}
            <span className='bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent'>
              Hikaru!
            </span>
          </p>

          <div className='space-y-4 text-white/70 leading-relaxed'>
            <p>
              I'm a self-taught front-end developer based in Ogun State, Nigeria.
              I develop responsive websites from scratch and transform them into
              modern, user-friendly web experiences.
            </p>

            <p>
              As a Mathematics undergraduate, I'm deeply passionate about improving
              my coding skills and developing applications, websites, and AI automations.
              I constantly strive to learn about the newest technologies and frameworks.
            </p>

            <p>
              I'm also passionate about the decentralized world ahead. Self-taught with
              experiences and courses as my teachers, I'm focused on improving my
              Business Development skills, strategic partnerships, and growth.
              I'm eager to learn about the latest advancements in Web3.
            </p>
          </div>

          {/* Quick Stats */}
          <div className='flex gap-8 pt-4'>
            <div className='text-center'>
              <p className='text-2xl md:text-3xl font-bold text-purple-400'>6+</p>
              <p className='text-sm text-white/50'>Projects</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl md:text-3xl font-bold text-purple-400'>2+</p>
              <p className='text-sm text-white/50'>Years Exp</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl md:text-3xl font-bold text-purple-400'>5+</p>
              <p className='text-sm text-white/50'>Technologies</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className='relative group flex justify-center md:justify-end'>
          {/* Glow background */}
          <div className='absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          {/* Image container */}
          <div className='relative'>
            <div className='absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300' />
            <img
              src="/sigh.jpg"
              alt="Hikaru"
              className='relative w-72 md:w-96 rounded-2xl object-cover transition-all duration-500 group-hover:scale-[1.02]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About