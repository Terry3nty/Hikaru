import React from 'react'

const toolsInfo = [
    { img: "/vscode.png", text: "VSCode" },
    { img: "/arduino.png", text: "Arduino" },
    { img: "/booyah.png", text: "Git/GitHub" },
    { img: "/docker.png", text: "Docker" },
    { img: "/figma.png", text: "Figma" },
    { img: "/wordpress.jpg", text: "WordPress" },
]

const Tools = () => {
    return (
        <section className='mt-16 md:mt-24 pt-8' id='tools'>
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white font-lexendDeca">
                    <span className="text-purple-500">#</span> Tools
                </h1>
                <div className="flex-1 h-[1px] max-w-[200px] bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>

            {/* Tools Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6'>
                {toolsInfo.map((tool, idx) => (
                    <div
                        className='Scard group text-center'
                        key={idx}
                        style={{ animationDelay: `${idx * 80}ms` }}
                    >
                        {/* Tool Icon */}
                        <div className="relative overflow-hidden rounded-lg mb-4 mx-auto w-16 h-16 md:w-20 md:h-20">
                            <img
                                src={tool.img}
                                alt={tool.text}
                                className='w-full h-full object-cover transition-all duration-400 group-hover:scale-110'
                            />
                            {/* Glow overlay */}
                            <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300" />
                        </div>

                        {/* Tool Name */}
                        <p className='text-sm font-medium text-white/80 group-hover:text-purple-300 transition-colors duration-300'>
                            {tool.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Tools