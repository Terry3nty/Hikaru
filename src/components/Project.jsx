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
    experience: "Deep connection with both admins,community members & Devs.",
    show: true, // hidden
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
  <section className="flex flex-col text-white mt-12 font-lexendDeca">
    <h1 className="text-2xl" id="project">
      <span className="text-purple-700"> # </span> Projects
    </h1>
    <hr className="border-gray-300 w-1/2" />

    <Link
      to="/products"
      className="font-inter font-extrabold md:pl-5 hover:text-purple-300 transition-colors"
    >
      View more <span className="text-purple-700">&gt;&gt;</span>
    </Link>

    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {projects.map(
        (proj, idx) =>
          proj.show && (
            <div className="card" key={idx}>
              <img src={proj.img} alt={proj.alt} className="img" />
              <p>
                <strong>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    {proj.name}
                  </a>
                </strong>
                <br />
                <b>Role</b> : {proj.role}
                <br />
                <b>Experience</b> : {proj.experience} <br />
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
              >
                VIEW
              </a>
            </div>
          )
      )}
    </div>
    <div></div>
  </section>
);

export default Project;
