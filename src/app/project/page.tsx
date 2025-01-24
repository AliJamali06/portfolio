import React from "react";
import Link from "next/link";
import Image from "next/image";
function Project() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* projects */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={"600"}
                  height={"300"}
                  src="/image2.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Currency conveter
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    <b> Currency</b>
                  </h1>
                  <p className="leading-relaxed ">
                    This is my Currency conveter projects
                  </p>
                  <Link href={"https://github.com/alijamali06"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      view projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={"600"}
                  height={"100"}
                  src="/image22.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    <b>Calculator</b>
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    <b> Calculator </b>
                  </h1>
                  <p className="leading-relaxed ">
                    This is my Calculator project
                  </p>
                  <Link href={"https://github.com/alijamali06"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      view projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={"600"}
                  height={"100"}
                  src="/image100.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    <b>Static Resume</b>
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    <b> Static Resume </b>
                  </h1>
                  <p className="leading-relaxed ">
                    This is my Static Resume project
                  </p>
                  <Link href={"https://github.com/AliJamali06/static-Resume"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      view projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={"400"}
                  height={"200"}
                  src="/imageman.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    <b>Dynamic Resume</b>
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    <b> Dynamic Resume </b>
                  </h1>
                  <p className="leading-relaxed ">
                    This is my Dynamic Resume project
                  </p>
                  <Link href={"https://github.com/AliJamali06/Dynamic-resume"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      view projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
