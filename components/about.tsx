"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        I'm currently a student at Da Nang University of Science and Technology
        (DUT), pursuing a degree in Information Technology with a specialization
        in Software Technology. <br></br>
        My academic journey at DUT has equipped me with a solid foundation in
        software development. I specialize in various technologies, with
        proficiency in
        <span className="font-medium">
          React, Laravel, Express, and more.
        </span>{" "}
      </p> */}
      <p className="mb-3">
        I am passionate about leveraging these skills to create innovative and
        efficient solutions. Eager to contribute to the world of technology, I
        am continuously exploring new horizons and embracing challenges in the
        dynamic field of software development.
      </p>
      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
