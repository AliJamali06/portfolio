"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import Contact from "./contact/page";
import Project from "./project/page";
import Skills from "./skills/page";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32 gap-10">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-blue-500 font-semibold">Hello, I'm</span>
                <h1 className="text-5xl lg:text-7xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  Ali Dost
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300 mt-4 flex items-center gap-2">
                  I am a{" "}
                  <span className="text-blue-400">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "Frontend Developer",
                          "Backend Developer",
                          "UI/UX Designer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h2>
              </motion.div>

              <div className="w-20 h-1 bg-blue-500 mb-6"></div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-lg mb-8 max-w-2xl"
              >
                I am a passionate and skilled developer with expertise in
                building responsive, user-friendly web applications. With
                experience in React, Next.js, and modern web technologies, I
                bring creative solutions to every project.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-lg font-semibold"
                >
                  Let's Talk
                  <span className="animate-bounce">👋</span>
                </Link>

                <a
                  href="/your-resume.pdf"
                  className="px-8 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2 text-lg font-semibold"
                >
                  Download CV
                  <HiDownload className="text-lg" />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 mt-8"
              >
                <a
                  href="https://github.com/AliJamali06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500"
                >
                  <BsGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500"
                >
                  <BsLinkedin className="text-xl" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Image
                  src="/image9.png"
                  alt="Profile"
                  width={700}
                  height={700}
                  className="rounded-full w-full h-full object-cover border-4 border-gray-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
