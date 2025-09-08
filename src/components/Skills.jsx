import React from 'react'

const skillInfo = [
    { img: "/trio.jpg", text: "HTML/CSS/JS" },
    { img: "/React.svg", text: "REACT.JS/VITE" },
    { img: "/tailwind.png", text: "TAILWINDCSS" },
    { img: "/booyah.png", text: "GIT/GITHUB" },
    { img: "/vscode.png", text: "VSCODE" },
    { img: "/python.png", text: "PYTHON" },
    { img: "/docker.png", text: "DOCKER" },
    { img: "/figma.png", text: "FIGMA" },
    { img: "/cpp.jpg", text: "C++" },
    { img: "/arduino.png", text: "ARDUINO" },
    { img: "/wordpress.jpg", text: "WORDPRESS" },
    { img: "/n8n.png", text: "N8N" },
]

const Skills = () => {
    return (
        <>
            <div className='mt-12 pt-20' id='skills'>
                <h1 className='text-2xl text-white'>
                    <span className='text-purple-700'> # </span> Skills
                </h1>
                <hr className='border-gray-300 w-1/2' />
                <div className='flex md:flex-row flex-wrap justify-center text-white mt-5'>
                    {skillInfo.map((skill, idx) => (
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

export default Skills
