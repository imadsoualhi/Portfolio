"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have worked on {" "}
        <span className="font-medium"> various projects </span>
        and in different roles, which has given me a deep understanding of the development process and the ability to find
        <span className="font-medium"> the best solutions </span> for your needs.
        <span className="italic"> I have expertise </span>
        in
        <span className="font-medium"> React, Next.js, Node.js, TypeScript, and MongoDB.</span> <br />
        {" "} I am committed to delivering <span className="font-medium"> high-quality  </span> solutions that exceed
        your expectations and help your business thrive.
        Whether you require a solo developer or a collaborative team member, <br />
        I'm prepared to tackle challenges and devise solutions that set you apart from <span className="font-medium"> the competition. </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy discovering unique domains. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. <br />I am currently
        learning about{" "}
        <span className="font-medium">Artificial intelligence & Future technology</span>.
      </p>
    </motion.section>
  );
}
