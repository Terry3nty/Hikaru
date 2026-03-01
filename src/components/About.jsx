import React from 'react'

const About = () => {
  return (
    <section className='mt-16 md:mt-24 pt-8' id='about'>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white font-inter tracking-tight">
          <span className="text-orange-500 mr-2">/</span> About Me
        </h1>
        <div className="flex-1 h-[1px] max-w-[300px] bg-gradient-to-r from-orange-500/50 to-transparent" />
      </div>

      {/* Content Grid */}
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        {/* Text Content in Glass Panel */}
        <div className='card flex-1 h-full justify-center space-y-8 font-inter'>
          <p className='text-2xl md:text-3xl font-bold text-white leading-tight'>
            Hello, I'm{' '}
            <span className='bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent'>
              Trinity Adeleye!
            </span>
          </p>

          <div className='space-y-6 text-white/70 leading-relaxed text-lg'>
            <p>
              I engineer responsive, high-performance web applications, transforming complex
              requirements into seamless, user-centric digital experiences under the
              moniker <strong className="text-white">Hikaru</strong>.
            </p>

            <p>
              As a Mathematics undergraduate, I approach software development with analytical
              precision. I'm deeply passionate about architecting resilient applications,
              websites, and AI automations, constantly integrating the newest technologies.
            </p>

            <p>
              Passionate about the decentralized future, I am continuously expanding my
              expertise in Web3 technologies. Beyond code, I bridge the gap between technical
              execution and business growth through strategic partnerships and continuous development.
            </p>
          </div>

          {/* Quick Stats */}
          <div className='flex gap-8 pt-6 border-t border-white/10'>
            <div className='text-left'>
              <p className='text-3xl font-black text-orange-400'>6+</p>
              <p className='text-xs text-white/50 uppercase tracking-widest mt-1'>Projects</p>
            </div>
            <div className='text-left'>
              <p className='text-3xl font-black text-orange-400'>2+</p>
              <p className='text-xs text-white/50 uppercase tracking-widest mt-1'>Years Exp</p>
            </div>
            <div className='text-left'>
              <p className='text-3xl font-black text-orange-400'>5+</p>
              <p className='text-xs text-white/50 uppercase tracking-widest mt-1'>Tech Stack</p>
            </div>
          </div>
        </div>

        {/* Image in Glass Panel */}
        <div className='relative group flex justify-center w-full h-full'>
          <div className='absolute -inset-4 bg-gradient-to-br from-orange-600/30 via-orange-500/10 to-orange-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

          <div className='card w-full p-2 relative overflow-hidden flex items-center justify-center'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10 pointer-events-none' />
            <img
              src="/sigh.jpg"
              alt="Hikaru"
              className='w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About