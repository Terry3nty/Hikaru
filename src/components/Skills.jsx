import React from 'react'

const skillInfo = [
    { img: "/trio.jpg", text: "HTML/CSS/JS" },
    { img: "/tailwind.png", text: "TailwindCSS" },
    { img: "/React.svg", text: "React/Vite" },
    { img: "/next.png", text: "Nextjs" },
    { img: "/typescript.svg", text: "TypeScript" },
    { img: "/python.png", text: "Python" },
    { img: "/cpp.jpg", text: "C++" },
    { img: "/n8n.png", text: "N8N" },
]

const Skills = () => {
    return (
        <section className='mt-16 md:mt-24 pt-8 font-inter z-10 relative' id='skills'>
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-10">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    <span className="text-orange-500 mr-2">/</span> Skills
                </h1>
                <div className="flex-1 h-[1px] max-w-[300px] bg-gradient-to-r from-orange-500/50 to-transparent" />
            </div>

            {/* Skills Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6'>
                {skillInfo.map((skill, idx) => (
                    <div
                        className='Scard group text-center relative overflow-hidden'
                        key={idx}
                        style={{ animationDelay: `${idx * 80}ms` }}
                    >
                        {/* Glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Skill Icon */}
                        <div className="relative overflow-hidden rounded-md mb-4 mx-auto w-16 h-16 md:w-20 md:h-20 bg-black/40 p-2 border border-white/5 group-hover:border-orange-500/30 transition-colors duration-500">
                            <img
                                src={skill.img}
                                alt={skill.text}
                                className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0'
                            />
                        </div>

                        {/* Skill Name */}
                        <p className='text-xs font-bold tracking-wider uppercase text-white/70 group-hover:text-orange-400 transition-colors duration-500'>
                            {skill.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
