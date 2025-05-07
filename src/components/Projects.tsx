"use client";

import Image from "next/image";
import crm from "../assets/images/crm.jpg";
import mail from "../assets/images/bullkmail.jpg";
import pms from "../assets/images/pms.jpg";
import icar from "../assets/images/icar.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: any;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CRM",
    description:
      "This Customer Relationship Management (CRM) system helps businesses manage interactions with current and potential customers. It uses data analysis to track customer history, improve business relationships, and optimize retention efforts.",
    imgSrc: crm,
  },
  {
    id: 2,
    title: "BulkEmail",
    description:
      "A platform designed for businesses to send bulk emails for marketing campaigns, newsletters, and transactional emails. It ensures high deliverability and includes features like templates, scheduling, and analytics for email performance.",
    imgSrc: mail,
  },
  {
    id: 3,
    title: "PMS",
    description:
      "The Project Management System (PMS) provides tools to track project progress, manage tasks, collaborate with teams, and keep timelines on track. It includes resource management, time tracking, and reporting for enhanced productivity.",
    imgSrc: pms,
  },
  {
    id: 4,
    title: "ICAR-CIWA (Government Project)",
    description:
      "The Indian Council of Agricultural Research (ICAR) project aims to promote sustainable agricultural development and improve farming techniques through research and innovation. It focuses on enhancing productivity and food security for India's growing population.",
    imgSrc: icar,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-center mb-8 bg-black dark:bg-white p-5 md:p-10 lg:p-20"
    >
      <h2 className="text-4xl font-bold text-white dark:text-black">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="mt-8 space-y-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col-reverse md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-white dark:text-black text-left space-y-4">
              <h3 className="text-2xl font-bold">
                0{project.id} {project.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-700">
                {project.description}
              </p>
              {/* Optional Learn More button:
              <button className="text-primary hover:underline inline-flex items-center">
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
