import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Tarfaya, MA",
    description:
      "Studied for 6 months, graduated, landed an online front-end developer job.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Laayoune, MA",
    description:
      "Worked part-time as a freelance front-end developer for 2 years in one job. Additionally, upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Laayoune, MA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, SASS and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Video Call App",
    description:
      "As a full-stack developer, I crafted a startup with video calls for public feedback to companies and seamless employee communication.",
    tags: ["React", "Node.js", "Javacript","Css","zecocloud"],
    imageUrl: corpcommentImg,
    Link: "https://imadvideochat.netlify.app",
  },
  {
    title: "Language Translator",
    description:
      "As a developer, I created a Language Translator app for offering quick and accurate translations through text, breaking language barriers effortlessly.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: rmtdevImg,
    Link: "https://imadtranslator.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "SASS",
  "MongoDB",
  "Redux",
  "Flutter",
  "Express",
  "Python",
  "Docker",
  "Framer Motion",
] as const;

