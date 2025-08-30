import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  //WEB3
  const SIGN = `Sign`;
  const VICTUS = `Victus Global`;
  const KATSCO = `Katsco Group`;
  const _10th = `The Boiz (10th clan)`;
  //TECH
  const MDMT = `Middlemint`;
  const PHX = `Phoenix Community`;
  const HAMZAT = `Hamzatronics Technologies`;
  const PODCAST = `Podcast website`;
  //COLLABS AND HOBBIES
  const AI = `Ai Writer`;
  const STACY = `Stacy Ai`;
  const BOT = `Whatapp bot`;
  const RPG = `Javascript Game`;
  const PBOT = `Speech recognition bot`;
  const SIGNTEST = `Sign calender`;

  return (
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

      <div className="flex flex-col md:flex-row overflow-x-auto">
        <div className="card">
          <img src="/HAMZATRONICS.png" alt="Sign" className="img" />
          <p>
            <strong>
              <a
                href="https://hamzatronics-technologies.vercel.app/"
                target="_blank"
              >{`${HAMZAT}`}</a>
            </strong>
            <br />
            <b>Role</b> : Developer
            <br />
            <b>Experience</b> : Intriguing Experience & quality knowledge
            acquired solving the bugs. <br />
          </p>
          <a
            href="https://hamzatronics-technologies.vercel.app/"
            target="_blank"
            className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
          >
            VIEW
          </a>
        </div>
        <div className="card">
          <img src="/MIDDLEMINT.png" alt="Sign" className="img" />
          <p>
            <strong>
              <a
                href="https://middlemint-mdmt.vercel.app/"
                target="_blank"
              >{`${MDMT}`}</a>
            </strong>
            <br />
            <b>Role</b> : BD, Dev & DevRel
            <br />
            <b>Experience</b> : Quality connection with both admins and
            community members. <br />
          </p>
          <a
            href="https://middlemint-mdmt.vercel.app/"
            target="_blank"
            className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
          >
            VIEW
          </a>
        </div>
        <div className="card hidden">
          <img src="/PHOENIX.jpg" alt="Sign" className="img" />
          <p>
            <strong>
              <a
                href="https://phoenix-delta-two.vercel.app/"
                target="_blank"
              >{`${PHX}`}</a>
            </strong>
            <br />
            <b>Role</b> : Developer, Marketer <br />
            <b>Experience</b> : Deep connection with both admins,community
            members & Devs. <br />
          </p>
          <a
            href="https://phoenix-delta-two.vercel.app/"
            target="_blank"
            className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
          >
            VIEW
          </a>
        </div>
        <div className="card">
          <img src="/sigh.jpg" alt="Sign" className="img" />
          <p>
            <strong>
              <a
                href="https://a-test-0pzi.onrender.com"
                target="_blank"
              >{`${AI}`}</a>
            </strong>
            <br />
            <b>Role</b> : Developer <br />
            <b>Experience</b> : Just Exploring the vast possibilities of what i
            could create & build, it was great. <br />
          </p>
          <a
            href="https://a-test-0pzi.onrender.com"
            target="_blank"
            className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
          >
            VIEW
          </a>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Project;
