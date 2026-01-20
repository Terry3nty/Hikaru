import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log("Success:", result.text);
      setStatus('success');
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus(''), 3000);
    }, (error) => {
      console.log("Error:", error.text);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    })
  }

  return (
    <section className='mt-16 md:mt-24 pt-8 pb-16' id='contact'>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white font-lexendDeca">
          <span className="text-purple-500">#</span> Contact Me
        </h1>
        <div className="flex-1 h-[1px] max-w-[200px] bg-gradient-to-r from-purple-500/50 to-transparent" />
      </div>

      <div className='grid md:grid-cols-2 gap-12'>
        {/* Contact Form */}
        <div className='glass-card p-6 md:p-8 rounded-2xl'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name Field */}
            <div className='space-y-2'>
              <label htmlFor="name" className='text-white/80 text-sm font-medium font-lexendDeca'>
                Name
              </label><br />
              <input
                className='input'
                value={name}
                type="text"
                name="name"
                id="name"
                placeholder='Your name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Field */}
            <div className='space-y-2'>
              <label htmlFor="email" className='text-white/80 text-sm font-medium font-lexendDeca'>
                Email
              </label><br />
              <input
                className='input'
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder='your@email.com'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Message Field */}
            <div className='space-y-2'>
              <label htmlFor="message" className='text-white/80 text-sm font-medium font-lexendDeca'>
                Message
              </label><br />
              <textarea
                value={message}
                name="message"
                id="message"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="input resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={status === 'sending'}
              className='group relative w-full py-3 font-lexendDeca font-medium tracking-wider overflow-hidden rounded-lg transition-all duration-300 disabled:opacity-50'
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-lg" />
              <span className="absolute inset-[1px] bg-black rounded-lg transition-all duration-300 group-hover:bg-purple-900/50" />
              <span className="relative text-purple-400 group-hover:text-white transition-colors duration-300">
                {status === 'sending' ? 'SENDING...' : status === 'success' ? '✓ SENT!' : status === 'error' ? 'ERROR - TRY AGAIN' : 'SEND MESSAGE'}
              </span>
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className='flex flex-col justify-center space-y-8'>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-white font-lexendDeca'>
              Let's work together
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <p className='text-sm text-white/50 uppercase tracking-wider font-lexendDeca'>
              Find me on
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Terry3nty"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaGithub className="text-xl text-white/70 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/hikaru-san-1b195735b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-white/70 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://x.com/hikaru___san"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaXTwitter className="text-xl text-white/70 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-16 pt-8 border-t border-white/10 text-center'>
        <p className='text-sm text-white/40 font-lexendDeca'>
          © 2024 Hikaru. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Contact