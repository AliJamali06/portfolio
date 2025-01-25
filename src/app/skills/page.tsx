import React from "react";
import { CiSquareCheck } from "react-icons/ci";

const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="text-2xl sm:text-3xl font-medium title-font text-white">
              My Skills
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Card */}
            {[
              { name: "HTML", percentage: "100%" },
              { name: "CSS", percentage: "88%" },
              { name: "Javascript/Typescript", percentage: "95%" },
              { name: "NEXT JS", percentage: "85%" },
              { name: "ArcMap", percentage: "85%" },
              { name: "Wordpress", percentage: "85%" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    {skill.name}
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div
                      className="absolute bg-blue-500 h-1 rounded-xl"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-2">
                    {skill.percentage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
