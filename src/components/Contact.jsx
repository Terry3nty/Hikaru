import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const [name, setName] = useState ("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit =(e) =>{
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result)=>{
      console.log("Success :", result.text);
      alert("Message sent successfully!");


    setName ("");
    setEmail ("");
    setMessage ("");

    }, (error)=> {
      console.log("Error :", error.text);
      alert("Something went wrong");
    })
  }

  return (
    <>
    <h1 className='text-2xl text-white mt-12 pt-20' id='contact'><span className='text-purple-700'> # </span> Contact-me</h1> 
    <hr className='border-gray-300 w-1/2' />

    <section className='text-white m-5'>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label><br />
          <input 
          className='input'
          value={name} 
          type="text" 
          name="name" 
          id="name" 
          placeholder='Hikaru Nakahara'
          onChange={(e) => setName (e.target.value)}
          required/><br /><br />

          <label htmlFor="email">Email</label><br />
          <input 
          className='input'
          value={email} 
          type="email" 
          name="email" 
          id="email" 
          placeholder='youremail@gmail.com' 
          onChange={(e) => setEmail(e.target.value)}
          required/><br /><br />

          <label htmlFor="message">Message</label><br />
          <textarea
            value={message}          
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Write your message here..."
            className="border rounded-lg p-2 w-full md:w-1/2 text-black border-purple-400 border-4"
          /> <br />

          <button className='border-2 w-[150px] h-[50px] mt-5 text-purple-400 hover:text-white transition-all' type='submit'>CONTACT ME</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact