
"use client";
import React from "react";
import Image from "next/image";
import Banner from "../assets/images/Banner.png";
import Banner1 from "../assets/images/Banner2.png";
import { useTheme } from "next-themes";
import { Instagram, Linkedin, } from "lucide-react";

const Hero: React.FC = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";

    return (
        <div
            id="home"
            className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white dark:bg-black text-gray-800 dark:text-white min-h-screen"
        >
            {/* Image for small screens */}
            <div className="md:hidden mt-12 relative w-full aspect-[3/2]">
                <Image
                    src={theme === "dark" ? Banner1 : Banner}
                    alt="Developer Illustration"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div className="md:w-2/6 flex-col text-left">
                <div className="mt-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                        Hello I’m{" "}
                        <span className="text-black dark:text-white font-semibold">
                            Soumyaranjan.
                        </span>
                    </h1>
                    <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 whitespace-nowrap">
                        Software{" "}
                        <span className={`ml-2 ${isDarkMode ? "text-stroke-white" : "text-stroke-black"}`}>
                            Developer
                        </span>
                    </h2>

                    <p className="mb-8 max-w-lg font-subtext text-subtext dark:text-gray-400">
                        I’m Soumyaranjan Rout. Skilled Full-Stack Developer with 1.5+ years
                        of experience, specializing in MongoDB, Express, React, and Node.js.
                        I have worked on optimizing software applications and backend systems
                        to deliver high-performance solutions. My passion for solving complex
                        problems has driven me to continuously learn and contribute to
                        innovative projects.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center mt-20">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/uchiha_sa_su_ke?igsh=MXIzaHoxMXBzdjBq"
                        className="p-3 border-2 border-black dark:border-white rounded hover:bg-black dark:hover:bg-white transition flex items-center justify-center group"
                    >
                        <Instagram className=" text-black group-hover:text-white dark:text-white dark:group-hover:text-black transition" />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/soumyaranjan-rout-87086a207"
                        className="p-3 border-2 border-black dark:border-white rounded hover:bg-black dark:hover:bg-white transition flex items-center justify-center group"
                    >
                        <Linkedin className=" text-black group-hover:text-white dark:text-white dark:group-hover:text-black transition" />
                    </a>
                </div>
            </div>

            {/* Image for medium and larger screens */}
            <div className="hidden md:block md:w-1/2 mt-12 md:mt-0 relative aspect-[3/2]">
                <Image
                    src={theme==="dark" ? Banner1 : Banner}
                    alt="Developer Illustration"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

        </div>
    );
};

export default Hero;
