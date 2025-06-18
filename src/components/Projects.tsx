"use client";
import Image from "next/image";
import raad from "../assets/images/raad.png";
import prism from "../assets/images/prism.png"
import webt from "../assets/images/webtech.png"
import envimg from "../assets/images/env.png"

interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: any;
  technologies?: string[];
  status?: string;
  source?: boolean;
  live?: boolean;
  url?: string;
  url2?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Raadiuma Cafe",
    description:
      "Raadiuma Cafe is a dynamic and visually engaging website designed to showcase a modern café. It includes features like interactive menus, gallery, contact forms, and customer reviews. Built with a full-stack MERN architecture, it ensures seamless performance and responsiveness across devices.",
    imgSrc: raad, // Replace with actual image if available
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Production",
    source: false,
    live: true,
    url: "https://raadiumcafe.co.in/"
  },
  {
    id: 2,
    title: "Prismworks",
    description:
      "A professional website built for Prismworks, a digital marketing company offering services like SEO, social media strategy, content marketing, and PPC advertising. The site highlights their portfolio, services, and client testimonials, with a focus on performance, responsiveness, and lead conversion.",
    imgSrc: prism,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    status: "Production",
    url: "https://prismworks.studio/",
    source: false,
    live: true,
  },
  {
    id: 3,
    title: "WebTechFinder",
    description:
      "WebTechFinder is an advanced platform that detects the technology stack and evaluates the performance of any web application. Built with Astro and FastAPI, and powered by agentic AI, it offers deep insights into frontend/backend technologies, SEO health, Core Web Vitals, and overall technical architecture—empowering teams to make data-driven improvements.",
    imgSrc: webt, // Replace with the actual image asset
    technologies: ["Astro", "FastAPI", "pgvector", "Playwright", "OpenAI"],
    status: "Production",
    source: false,
    live: true,
    url: "https://webtechfinder.com/"
  },
  {
    id: 4,
    title: "Env Inspector",
    description:
      "Env Inspector is a lightweight NPM package built with TypeScript that helps developers validate and manage environment variables in Node.js applications. It ensures required variables are present, enforces type safety, and provides helpful error messages to prevent runtime issues during development and deployment.",
    imgSrc: envimg, // Replace with a relevant icon or image
    technologies: ["TypeScript", "Node.js", "NPM"],
    status: "Production",
    url:"https://www.npmjs.com/package/env-inspector",
    live:true,
    source: true,
    url2:"https://github.com/Soumya7681/env-inspectors"

  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black dark:bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4">
            Featured <span className="font-extrabold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-white dark:bg-black mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative`}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900 dark:bg-gray-100">
                    {/* Project Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Production'
                        ? 'bg-green-500 text-white'
                        : project.status === 'Development'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-blue-500 text-white'
                        }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Number */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="w-10 h-10 bg-white dark:bg-black text-black dark:text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {project.id.toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* Image with hover effect */}
                    <div className="transform transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Overlay on hover */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <button className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200">
                          View Details
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-black">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 dark:text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white dark:text-black">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 dark:bg-gray-200 text-gray-300 dark:text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {project.live && <a href={project.url}><button className="px-6 py-3 border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 rounded-lg font-semibold">
                      Live Demo
                    </button></a>}
                    {project.source && <a href={project.url2}>
                      <button className="px-6 py-3 border-2 border-gray-600 dark:border-gray-400 text-gray-300 dark:text-gray-600 hover:border-white hover:text-white dark:hover:border-black dark:hover:text-black transition-all duration-300 rounded-lg font-semibold">
                        Source Code
                      </button></a>}
                  </div>
                </div>
              </div>

              {/* Divider line (except for last project) */}
              {index < projects.length - 1 && (
                <div className="mt-20 md:mt-24">
                  <div className="w-full h-px bg-gray-800 dark:bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}