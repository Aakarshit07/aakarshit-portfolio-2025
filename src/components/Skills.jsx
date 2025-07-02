import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLinux,
  FaGithub,
  FaCss3,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiRedis, SiTypescript } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { FaRegistered } from "react-icons/fa";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 16, name: "TypeScript", icon: <SiTypescript size={50} /> },
    { id: 2, name: "HTML5", icon: <FaHtml5 size={50} /> },
    { id: 3, name: "CSS", icon: <FaCss3 size={50} /> },
    { id: 4, name: "React", icon: <FaReact size={50} /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 6, name: "Redis", icon: <SiRedis size={50} /> },
    { id: 7, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 8, name: "Linux", icon: <FaLinux size={50} /> },
    { id: 9, name: "Postgresql", icon: <BiLogoPostgresql size={50} /> },
    { id: 10, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 11, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 12, name: "Figma", icon: <CgFigma size={50} /> },
    { id: 13, name: "Vercel", icon: <RiVercelLine size={50} /> },
    { id: 14, name: "Github", icon: <FaGithub size={50} /> },
    { id: 15, name: "Git", icon: <FaGitAlt size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Rentickle",
      role: "Frontend Developer",
      period: "Jan 2025 - Present",
      description:
        "Rebuilt Rentickle’s core platform from scratch using Next.js, TypeScript, and BFF auth with NextAuth. Implemented SSR for key pages, dynamic metadata, SEO-optimized routing, and a custom UI library. Improved performance, onboarding, and conversion rates with reusable, accessible components and parallax features.",
      logo: <FaRegistered size={36} />,
    },
    {
      id: 2,
      company: "Rentickle",
      role: "Frontend Developer Intern",
      period: "Jul 2024 - Dec 2024",
      description:
        "Developed a high-converting landing page with Next.js and TypeScript, generating 4+ leads in 10 days. Reduced hero load time by 70% with optimized images and code splitting. Built a Node.js tool to export MongoDB data to CSV, boosting marketing efficiency by 30%.",
      logo: <FaRegistered size={36} />,
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  {/* <img className="w-7" src={exp.logo} alt="" /> */}
                  <span className="text-white">{exp.logo}</span>
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
