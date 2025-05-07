"use client";

import Image from "next/image";
import ab from "../assets/images/about.png";
import ab1 from "../assets/images/about1.png";
import { useTheme } from "next-themes";
export default function About() {
    const {theme} = useTheme();
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-evenly bg-white dark:bg-black p-4 lg:p-8"
    >
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-4 lg:mb-0">
        <Image
          src={theme==="dark" ? ab1: ab}
          alt="Illustration"
          className="w-3/4 max-w-md lg:w-full lg:max-w-none"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left lg:pl-8">
        <h2 className="text-4xl font-light mb-4 text-black dark:text-white">
          About <span className="font-bold">Me</span>
        </h2>
        <p className="text-gray-700 text-lg mb-4 dark:text-gray-400">
          Skilled Software Developer with 1.6 years of experience in full-stack
          development, specializing in MongoDB, Node.js, React, and Express. I
          am deeply familiar with GraphQL and REST APIs, bringing a comprehensive
          understanding of modern web technologies.
        </p>
        <p className="text-gray-700 text-lg mb-4 dark:text-gray-400">
          I have a proven track record of delivering high-quality applications
          by collaborating effectively with cross-functional teams. I utilize
          agile methodologies to ensure that projects are delivered on time,
          with a focus on maintaining the highest standards of code quality.
        </p>
        <p className="text-gray-700 text-lg dark:text-gray-400">
          My strong problem-solving abilities and passion for innovation drive
          me to constantly seek out new challenges. I am eager to contribute my
          technical expertise and creativity to the dynamic team at Technoboot
          Pvt Ltd.
        </p>
      </div>
    </section>
  );
}
