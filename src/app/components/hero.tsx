"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
function Hero() {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am a {"  "}
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
          <div className="w-24 h-1 bg-blue-500"></div>
          <p className="mb-8 leading-relaxed">
            I am a passionate and skilled front-end developer with expertise in
            building responsive, user-friendly web applications. With experience
            in HTML, CSS, JavaScript, React, and Next.js, I bring a strong
            understanding of UI/UX principles and design aesthetics to every
            project. My focus is on creating seamless and engaging user
            experiences while ensuring functionality and performance.
          </p>
          <div className="flex justify-center">
            <Link href={"./contact"} className="mr-5">
              <button className="inline-flex  w-48 h-12 text-center px-12 text-white border-0 pt-2 focus:outline-none bg-blue-500 font-semibold hover:bg-blue-600 rounded-lg text-2xl">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-80"
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
