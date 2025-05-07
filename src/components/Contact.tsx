"use client";

import { useTheme } from "next-themes";
import { Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between md:p-20 gap-10 p-10 bg-white dark:bg-black text-black dark:text-white min-h-screen"
    >
      {/* Contact Form */}
      <div className="w-full md:w-1/2">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
          />
          <input
            type="url"
            placeholder="Your website (If exists)"
            className="w-full p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
          />
          <textarea
            placeholder="How can I help?"
            className="w-full rounded ring-2 ring-black p-3 h-32 resize-none focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
          ></textarea>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black hover:border-2 hover:border-black dark:hover:border-white pb-2">
              Get In Touch
            </button>

            <div className="flex flex-wrap gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/uchiha_sa_su_ke?igsh=MXIzaHoxMXBzdjBq"
                className="p-3 border-2 border-black dark:border-white rounded hover:bg-black dark:hover:bg-white transition flex items-center justify-center group"
              >
                <Instagram className="h-5 w-5 text-black group-hover:text-white dark:text-white dark:group-hover:text-black transition" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/soumyaranjan-rout-87086a207"
                className="p-3 border-2 border-black dark:border-white rounded hover:bg-black dark:hover:bg-white transition flex items-center justify-center group"
              >
                <Linkedin className="h-5 w-5 text-black group-hover:text-white dark:text-white dark:group-hover:text-black transition" />
              </a>
            </div>
          </div>
        </form>
      </div>

      {/* Text Block */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl text-black dark:text-white font-black">
          Let’s{" "}
          <span className="text-white dark:text-black inline-block ml-2 stroke-text">
            talk
          </span>{" "}
          for
          <br />
          Something special
        </h1>
        <p className="text-sm mb-8 max-w-lg mt-4">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <div className="mt-6">
          <p className="text-2xl text-black dark:text-white">
            soumya2k00@gmail.com
          </p>
          <p className="text-2xl text-black dark:text-white">+91 7438082965</p>
        </div>
      </div>
    </section>
  );
}
