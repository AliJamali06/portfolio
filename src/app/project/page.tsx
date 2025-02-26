'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';

const projects = [
  {
    title: "Simple Calculator",
    description: "A TypeScript-based calculator with basic arithmetic operations and clean UI.",
    image: "/image22.png",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    color: "from-blue-600 to-purple-600",
    textColor: "text-blue-400",
    link: "https://github.com/alijamali06/simple-calculator"
  },
  {
    title: "CLI Number Guessing",
    description: "Interactive command-line game built with TypeScript for number guessing fun.",
    image: "/image100.png",
    tech: ["TypeScript", "Node.js", "CLI"],
    color: "from-purple-600 to-pink-600",
    textColor: "text-purple-400",
    link: "https://github.com/alijamali06/cli-number-guessing"
  },
  {
    title: "Dynamic E-commerce",
    description: "Full-featured e-commerce platform with product management and cart functionality.",
    image: "/images.jpeg",
    tech: ["TypeScript", "Next.js", "MongoDB"],
    color: "from-green-600 to-blue-600",
    textColor: "text-green-400",
    link: "https://github.com/AliJamali06/sanity_project"
  },
  {
    title: "Dynamic Blogs",
    description: "Blog platform with dynamic content management and user interactions.",
    image: "/blogs.jpeg",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    color: "from-yellow-600 to-red-600",
    textColor: "text-yellow-400",
    link: "https://github.com/alijamali06/dynamic-blogs"
  },
  {
    title: "Multipage Website",
    description: "Custom CSS-based multipage website with responsive design.",
    image: "/multipages.jpeg",
    tech: ["TypeScript", "CSS", "Next.js"],
    color: "from-red-600 to-pink-600",
    textColor: "text-red-400",
    link: "https://github.com/alijamali06/multipage-website-custom-css"
  },
  {
    title: "Dynamic Resume",
    description: "Interactive resume builder with customizable templates.",
    image: "/image100.png",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-indigo-600 to-purple-600",
    textColor: "text-indigo-400",
    link: "https://github.com/alijamali06/Dynamic-resume"
  }
];

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 pt-32 pb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Projects
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          A collection of my work showcasing various technologies and solutions
        </p>
      </motion.div>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03, translateY: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500"
            >
              <div className={`group relative w-full h-48 overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${project.textColor}`}>{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 bg-${project.color.split('-')[1]}/20 border border-${project.color.split('-')[1]}/50 rounded-full text-sm ${project.textColor}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity`}
                >
                  View Project
                  <BsGithub className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
