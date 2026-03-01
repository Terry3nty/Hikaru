import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Hamzatronics Technologies",
    img: "/HAMZATRONICS.png",
    alt: "Hamzatronics",
    link: "https://hamzatronics-technologies.vercel.app/",
    role: "Developer",
    experience: "Intriguing Experience & quality knowledge acquired solving the bugs.",
    show: true,
  },
  {
    name: 'Fostrum',
    img: '/fostrum.png',
    link: 'https://fostrum.xyz',
    role: 'Frontend Developer',
    experience: 'Great joy and enthusiasm as we brought "that idea" to life',
    show: true,
  },
  {
    name: "Middlemint",
    img: "/MIDDLEMINT.png",
    alt: "Middlemint",
    link: "https://middlemint-mdmt.vercel.app/",
    role: "BD, Dev & DevRel",
    experience: "Quality connection with both admins and community members and Devs.",
    show: true,
  },
  {
    name: 'Gossiper Ai',
    img: '/gossiper-logo-white.png',
    link: 'https://gossiper-ai.vercel.app',
    role: 'Frontend Developer',
    experience: 'Authentic bond with team members and developers, got to use new technology too',
    show: true,
  },
  {
    name: "Phoenix Community",
    img: "/PHOENIX.jpg",
    alt: "Phoenix",
    link: "https://phoenix-delta-two.vercel.app/",
    role: "Developer, Marketer",
    experience: "Deep connection with both admins, community members & Devs.",
    show: true,
  },
  {
    name: 'Stacy Ai',
    img: '/Katsco.jpg',
    alt: "Stacy Ai",
    link: 'https://stacy-ai-website.vercel.app/',
    role: 'Developer',
    experience: 'Authentic bond with both admins and fellow developers, community members & team members',
    show: true,
  },
];

const Project = () => (
  <section className="flex flex-col text-white mt-16 md:mt-24 font-inter" id="project">
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-2">
      <h1 className="text-3xl md:text-4xl font-black tracking-tight">
        <span className="text-orange-500 mr-2">/</span> Projects
      </h1>
      <div className="flex-1 h-[1px] max-w-[300px] bg-gradient-to-r from-orange-500/50 to-transparent" />
    </div>

    {/* View More Link */}
    <Link
      to="/products"
      className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-white/50 hover:text-orange-400 transition-colors duration-500 mb-12"
    >
      EXPLORE ALL WORK
      <span className="group-hover:translate-x-2 transition-transform duration-500 text-orange-500">→</span>
    </Link>

    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(
        (proj, idx) =>
          proj.show && (
            <div
              className="card group relative overflow-hidden"
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Subtle orange inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Project Image Note: the img tag is styled via global CSS (.img) */}
              <div className="relative overflow-hidden mb-6 p-1 border border-white/5 bg-black/40 rounded-lg">
                <img
                  src={proj.img}
                  alt={proj.alt}
                  className="w-full h-48 object-cover rounded-md transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 grayscale-[10%] group-hover:grayscale-0"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-3 flex-1 relative z-10">
                <h3 className="font-bold text-xl text-white group-hover:text-orange-300 transition-colors duration-500 tracking-tight">
                  {proj.name}
                </h3>
                <p className="text-xs font-semibold tracking-widest uppercase text-orange-400/80">
                  <span className="text-white/40 font-normal">ROLE //</span> {proj.role}
                </p>
                <p className="text-sm text-white/50 leading-relaxed mt-1">
                  {proj.experience}
                </p>
              </div>

              {/* View Button */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm text-xs font-bold tracking-[0.2em] text-white/70 border border-white/10 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-500 group/btn relative overflow-hidden"
              >
                <span className="relative z-10">VIEW CASE STUDY</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-500 text-orange-500 relative z-10">→</span>
              </a>
            </div>
          )
      )}
    </div>
  </section>
);

export default Project;
