"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

function Hero() {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-16 flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl font-semibold text-gray-900 mb-4">
            I am a{" "}
            <br className="hidden lg:inline-block" />
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
          </h1>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            I am a passionate and skilled front-end developer with expertise in
            building responsive, user-friendly web applications. With experience
            in HTML, CSS, JavaScript, React, and Next.js, I bring a strong
            understanding of UI/UX principles and design aesthetics to every
            project.
          </p>
          <div className="flex justify-center">
            <Link href="./contact">
              <button className="inline-flex w-40 sm:w-48 h-10 sm:h-12 items-center justify-center text-white bg-blue-500 hover:bg-blue-600 rounded-md text-lg sm:text-2xl font-semibold">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 sm:w-3/4">
          <Image
            className="object-cover object-center rounded-lg mx-auto"
            alt="Hero image of web developer"
            width={700}
            height={700}
            src="/image.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
