import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I’m a frontend developer focused on building fast, SEO-optimized web
          apps with Next.js, TypeScript, and modern state management like
          Zustand. I love crafting reusable UI libraries, clean SSR flows, and
          dynamic routing for better user and business outcomes.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My journey started with practical projects like Bitesy, Blog App, and
          Bright Arc, where I combined SSR, secure auth, and custom CMS systems
          to solve real-world problems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          When I’m not coding, I’m exploring new frontend frameworks, leveling
          up my dev toolkit, and sharing my learnings with the dev community.
          Let’s connect on LinkedIn or dive into my work on GitHub!
        </p>
      </motion.div>
    </div>
  );
}
