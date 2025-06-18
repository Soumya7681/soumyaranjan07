"use client";

import { useState } from "react";
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

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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
      url: "https://github.com/Soumya7681",
      color: "hover:bg-gray-800 hover:border-gray-800 dark:hover:bg-gray-200 dark:hover:border-gray-200"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/uchiha_sa_su_ke?igsh=MXIzaHoxMXBzdjBq",
      color: "hover:bg-pink-500 hover:border-pink-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:soumya2k00@gmail.com",
      color: "hover:bg-red-500 hover:border-red-500"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validate required fields
    if (!formData.first_name || !formData.last_name || !formData.phone || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          website: "",
          message: ""
        });
      } else {
        setSubmitMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between md:p-20 gap-10 p-10 bg-white dark:bg-black text-black dark:text-white min-h-screen"
    >
      {/* Contact Form */}
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name in a row */}
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              placeholder="First name *"
              className="w-1/2 p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
              required
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              placeholder="Last name *"
              className="w-1/2 p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            className="w-full p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number *"
            className="w-full p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
            required
          />

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="Your website (If exists)"
            className="w-full p-3 rounded ring-2 ring-black focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can I help? *"
            className="w-full rounded ring-2 ring-black p-3 h-32 resize-none focus:outline-none focus:ring-1 focus:ring-black dark:ring-white"
            required
          ></textarea>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`text-sm p-2 rounded ${
              submitMessage.includes('successfully') 
                ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300' 
                : 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300'
            }`}>
              {submitMessage}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-6">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black hover:border-2 hover:border-black dark:hover:border-white pb-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Get In Touch"}
            </button>

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
        </form>
      </div>

      {/* Text Block */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl text-black dark:text-white font-black">
          Let's{" "}
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