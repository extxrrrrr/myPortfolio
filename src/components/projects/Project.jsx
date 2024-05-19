import React from "react";
import { projectsList } from "./const";

const Project = () => {
  return (
    <div
      name="projects"
      className="w-full pt-8 text-gray-800 bg-[hsl(0,0%,80%)] "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center ">
        <div className="mt-16 mr-20">
          <p className="text-4xl font-bold inline border-b-4 border-[#1877F2]">
            Projects
          </p>
          <p className="py-6 text-lg ml-[-20px]">
            Check out some of my Projects
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          {projectsList.map((projects) => (
            <div
              key={projects.id}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              style={{ backgroundImage: `url(${projects.projectImg})` }}
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl font-bold text-gray-100 tracking-wider ">
                  {projects.projectName}
                </span>
                <div className="pt-8 text-center">
                  <a href={projects.projectLink} target="_blank">
                    <button className="text-center rounded-lg px-10 py-3 m-2 border-2 border-gray-800 text-gray-100 hover:bg-[hsl(210,90%,70%)] font-bold text-lg duration-300">
                      View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
