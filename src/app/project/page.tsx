import React from "react";
import Link from "next/link";
import Image from "next/image";

function Project() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="relative cursor-pointer group">
              <Image
                alt="Currency Converter"
                className="rounded-lg"
                width={600}
                height={300}
                src="/image2.png"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-sm font-medium text-indigo-500 mb-2">
                  Currency Converter
                </h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  <b>Currency</b>
                </h1>
                <p className="text-gray-700 mb-2 text-center">
                  This is my Currency Converter project.
                </p>
                <Link href="https://github.com/alijamali06">
                  <p className="text-blue-500 hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative cursor-pointer group">
              <Image
                alt="Calculator"
                className="rounded-lg"
                width={600}
                height={300}
                src="/image22.png"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-sm font-medium text-indigo-500 mb-2">
                  <b>Calculator</b>
                </h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  <b>Calculator</b>
                </h1>
                <p className="text-gray-700 mb-2 text-center">
                  This is my Calculator project.
                </p>
                <Link href="https://github.com/alijamali06">
                  <p className="text-blue-500 hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative cursor-pointer group">
              <Image
                alt="Static Resume"
                className="rounded-lg"
                width={600}
                height={300}
                src="/image100.png"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-sm font-medium text-indigo-500 mb-2">
                  <b>Static Resume</b>
                </h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  <b>Static Resume</b>
                </h1>
                <p className="text-gray-700 mb-2 text-center">
                  This is my Static Resume project.
                </p>
                <Link href="https://github.com/AliJamali06/static-Resume">
                  <p className="text-blue-500 hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
            {/* Project 4 */}
            <div className="relative cursor-pointer group">
              <Image
                alt="Dynamic Resume"
                className="rounded-lg"
                width={600}
                height={300}
                src="/imageman.png"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-sm font-medium text-indigo-500 mb-2">
                  <b>Dynamic Resume</b>
                </h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  <b>Dynamic Resume</b>
                </h1>
                <p className="text-gray-700 mb-2 text-center">
                  This is my Dynamic Resume project.
                </p>
                <Link href="https://github.com/AliJamali06/Dynamic-resume">
                  <p className="text-blue-500 hover:underline">
                    View Project
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
