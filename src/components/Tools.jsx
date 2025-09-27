import React from 'react'

const toolsInfo = [
    { img: "/vscode.png", text: "VSCODE" },
    { img: "/arduino.png", text: "ARDUINO" },
    { img: "/booyah.png", text: "GIT/GITHUB" },
    { img: "/docker.png", text: "DOCKER" },
    { img: "/figma.png", text: "FIGMA" },
    { img: "/wordpress.jpg", text: "WORDPRESS" },
]

const Tools = () => {
  return (
        <>
            <div className='mt-12 pt-20' id='tools'>
                <h1 className='text-2xl text-white'>
                    <span className='text-purple-700'> # </span> Tools
                </h1>
                <hr className='border-gray-300 w-1/2' />
                <div className='flex md:flex-row flex-wrap justify-center text-white mt-5'>
                    {toolsInfo.map((skill, idx) => (
                        <div className='Scard' key={idx}>
                            <img src={skill.img} alt="Sign" className='img' />
                            <p>
                                <strong>{skill.text}</strong>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
  )
}

export default Tools