"use client";
import React from "react";
import Image from "next/image";
import Banner from "../assets/images/Banner.png";
import Banner1 from "../assets/images/Banner2.png";
import { useTheme } from "next-themes";
import {
    Instagram,
    Linkedin,
    Github,
    Twitter,
    Mail,
    Download,
    ExternalLink,
    Code2
} from "lucide-react";
const specializations = [
    "Agentic AI",
    "RAG Systems",
    "CAG Architecture",
    "MCP Protocol"
];
const Hero: React.FC = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";
    const startDate = new Date('2023-04-16'); // Replace with your actual start date
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/soumyaranjan-rout-87086a207",
            color: "hover:bg-blue-600 hover:border-blue-600"
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/Soumya7681", // Add your GitHub URL
            color: "hover:bg-gray-800 hover:border-gray-800 dark:hover:bg-gray-200 dark:hover:border-gray-200"
        },
        // {
        //   name: "Twitter",
        //   icon: Twitter,
        //   url: "#", // Add your Twitter URL
        //   color: "hover:bg-blue-400 hover:border-blue-400"
        // },
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/uchiha_sa_su_ke?igsh=MXIzaHoxMXBzdjBq",
            color: "hover:bg-pink-500 hover:border-pink-500"
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:soumya2k00@gmail.com", // Add your email
            color: "hover:bg-red-500 hover:border-red-500"
        }
    ];

    return (
        <div
            id="home"
            className="relative flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-gray-800 dark:text-white min-h-screen overflow-hidden"
        >
            {/* Background Elements */}
  

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Image for small screens */}
                    <div className="md:hidden mt-12 relative w-full max-w-md aspect-[3/2] mb-8">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                            <Image
                                src={theme === "dark" ? Banner1 : Banner}
                                alt="Developer Illustration"
                                fill
                                className="object-contain p-4"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-3/5 lg:w-1/2 flex flex-col text-left space-y-8">

                        {/* Greeting Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full w-fit">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Available for work
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Hello I'm{" "}
                                <span className="relative">
                                    <span className="text-black dark:text-white font-extrabold">
                                        Soumyaranjan
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-black dark:bg-white transform origin-left scale-x-0 animate-[scaleX_1s_ease-out_1s_forwards]"></span>
                                </span>
                            </h1>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                <span className="text-black dark:text-white">Software</span>{" "}
                                <span className={`inline-block ml-2 ${isDarkMode ? "text-stroke-white" : "text-stroke-black"} transform hover:scale-105 transition-transform duration-300`}>
                                    Developer
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
                                I'm <span className="font-semibold text-black dark:text-white">Soumyaranjan Rout</span>,
                                a skilled Full-Stack Developer with <span className="font-semibold">{diffYears}+ years</span> of experience,
                                specializing in the <span className="font-semibold">MERN stack</span>.
                            </p>

                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
                                I have worked on optimizing software applications and backend systems to deliver
                                high-performance solutions. My passion for solving complex problems drives me to
                                continuously learn and contribute to innovative projects.
                            </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-3">
                            {["MongoDB", "Express.js", "React", "Node.js", "TypeScript"].map((tech, index) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                AI & Advanced Technologies
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {specializations.map((spec, index) => (
                                    <div
                                        key={spec}
                                        className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
                                    >
                                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {spec}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="group flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                                <Download className="w-4 h-4 group-hover:animate-bounce" />
                                Download CV
                            </button>
                            <a href="#projects">
                                <button className="group flex items-center gap-2 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                                    View Work
                                </button>
                            </a>

                        </div>

                        {/* Social Media Links */}
                        <div className="pt-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Code2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    Connect with me
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={social.url}
                                            className={`group relative p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                                            style={{
                                                animationDelay: `${index * 150}ms`
                                            }}
                                            title={social.name}
                                        >
                                            <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />

                                            {/* Tooltip */}
                                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Image for medium and larger screens */}
                    <div className="hidden md:block md:w-2/5 lg:w-1/2 mt-12 md:mt-0 relative">
                        <div className="relative w-full max-w-lg mx-auto aspect-[3/2]">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl transform rotate-3"></div>
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transform hover:rotate-1 transition-transform duration-500">
                                <Image
                                    src={theme === "dark" ? Banner1 : Banner}
                                    alt="Developer Illustration"
                                    fill
                                    className="object-contain p-6 transform hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;