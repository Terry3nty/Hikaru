import React from 'react'

const Skills = () => {
  return (
    <>
    <div className='mt-12 pt-20' id='skills'>
       <h1 className='text-2xl text-white'><span className='text-purple-700'> # </span> Skills</h1> 
        <hr className='border-gray-300 w-1/2' />
      <div className='flex md:flex-row flex-wrap justify-center text-white mt-5'>
            <div className='Scard'>
                <img src="/trio.jpg" alt="Sign" className='img' />
                <p>
                    <strong>HTML/CSS/JS</strong>
                </p>
            </div>
            <div className='Scard'>
                <img src="/React.svg" alt="Sign" className='img' />
                <p>
                    <strong>REACT.JS/VITE</strong>
                </p>
            </div>
            <div className='Scard'>
                <img src="/tailwind.png" alt="Sign" className='img' />
                <p>
                    <strong>TAILWINDCSS</strong>
                </p>
            </div>
            <div className='Scard'>
                <img src="/booyah.png" alt="Sign" className='img' />
                <p>
                    <strong>GIT/GITHUB</strong>
                </p>
            </div>
            <div className='Scard'>
                <img src="/vscode.png" alt="Sign" className='img' />
                <p>
                    <strong>VSCODE</strong>
                </p>
            </div>
      </div>
    </div>
    </>
  )
}

export default Skills