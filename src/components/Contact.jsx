import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

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
    <section className='mt-16 md:mt-24 pt-8 pb-16 font-inter' id='contact'>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          <span className="text-orange-500 mr-2">/</span> Contact
        </h1>
        <div className="flex-1 h-[1px] max-w-[300px] bg-gradient-to-r from-orange-500/50 to-transparent" />
      </div>

      <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
        {/* Contact Form */}
        <div className='card relative overflow-hidden group/form'>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <form onSubmit={handleSubmit} className='relative z-10 space-y-8'>
            {/* Name Field */}
            <div className='space-y-2 group'>
              <label htmlFor="name" className='text-xs font-bold tracking-widest uppercase text-white/50 group-hover:text-orange-400 transition-colors duration-300'>
                Name
              </label>
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
            <div className='space-y-2 group'>
              <label htmlFor="email" className='text-xs font-bold tracking-widest uppercase text-white/50 group-hover:text-orange-400 transition-colors duration-300'>
                Email
              </label>
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
            <div className='space-y-2 group'>
              <label htmlFor="message" className='text-xs font-bold tracking-widest uppercase text-white/50 group-hover:text-orange-400 transition-colors duration-300'>
                Message
              </label>
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
              className='mt-8 w-full group/btn relative py-4 font-inter font-bold tracking-[0.2em] overflow-hidden rounded-sm transition-all duration-500 bg-white text-black hover:bg-transparent disabled:opacity-50 border border-transparent hover:border-orange-500'
            >
              <span className="absolute inset-0 bg-orange-500/0 group-hover/btn:bg-orange-500/10 blur-xl transition-all duration-500" />
              <span className="relative z-10 group-hover/btn:text-orange-400 transition-colors duration-500">
                {status === 'sending' ? 'TRANSMITTING...' : status === 'success' ? 'INQUIRY RECEIVED' : status === 'error' ? 'SYSTEM ERROR - RETRY' : 'SUBMIT INQUIRY'}
              </span>
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className='flex flex-col justify-center space-y-10 pl-0 md:pl-8'>
          <div className='space-y-6'>
            <h3 className='text-4xl md:text-5xl font-black text-white tracking-tight leading-tight'>
              Let's Create Something <span className="text-orange-500">Extraordinary</span>
            </h3>
            <p className='text-white/60 leading-relaxed text-lg'>
              Whether you have a specific project in mind or are looking for a technical partner to bring your vision to life, I am ready to help. Let's start the conversation.
            </p>
          </div>

          {/* Social Links */}
          <div className='space-y-6 pt-6 border-t border-white/10'>
            <p className='text-xs font-bold text-white/40 uppercase tracking-[0.2em]'>
              Connect with me
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Terry3nty"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-orange-500/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300"
              >
                <FaGithub className="text-xl text-white/70 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/trinity-adeleye-1b195735b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-orange-500/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-white/70 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://x.com/hikaru___san"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-orange-500/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300"
              >
                <FaXTwitter className="text-xl text-white/70 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.instagram.com/hikaru____sama"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-orange-500/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300"
              >
                <FaInstagram className="text-xl text-white/70 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-24 pt-8 border-t border-white/5 text-center font-inter'>
        <p className='text-xs text-white/30 tracking-widest uppercase'>
          © {new Date().getFullYear()} HIKARU. ENGINE ONLINE.
        </p>
      </div>
    </section>
  )
}

export default Contact