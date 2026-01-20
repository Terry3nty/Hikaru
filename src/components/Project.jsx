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
  {
    name: 'Gossiper Ai',
    img: '/gossiper-logo-white.png',
    link: 'https://gossiper-ai.vercel.app',
    role: 'Frontend Developer',
    experience: 'Authentic bond with team members and developers, got to use new technology too',
    show: true,
  },
];

const Project = () => (
  <section className="flex flex-col text-white mt-16 md:mt-24 font-lexendDeca" id="project">
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-2">
      <h1 className="text-2xl md:text-3xl font-bold">
        <span className="text-purple-500">#</span> Projects
      </h1>
      <div className="flex-1 h-[1px] max-w-[200px] bg-gradient-to-r from-purple-500/50 to-transparent" />
    </div>

    {/* View More Link */}
    <Link
      to="/products"
      className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-purple-400 transition-colors duration-300 mb-8"
    >
      View all projects
      <span className="group-hover:translate-x-1 transition-transform duration-300 text-purple-500">→</span>
    </Link>

    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(
        (proj, idx) =>
          proj.show && (
            <div
              className="card group"
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={proj.img}
                  alt={proj.alt}
                  className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors duration-300">
                  {proj.name}
                </h3>
                <p className="text-sm text-purple-400/80">
                  <span className="text-white/50">Role:</span> {proj.role}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {proj.experience}
                </p>
              </div>

              {/* View Button */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium text-purple-400 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white transition-all duration-300 group/btn"
              >
                VIEW
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          )
      )}
    </div>
  </section>
);

export default Project;
