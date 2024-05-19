import React from "react";
import { skillList } from "./const";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[hsl(0,0%,80%)] text-gray-800"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center h-full w-full">
        <div>
          <p className="text-4xl font-bold inline ml-6 border-b-4 border-[#1877F2]">
            Skills
          </p>
          <p className="py-6 pl-4 text-lg ml-[-20px]">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-7 text-center py-0 font-bold">
          {skillList.map((skill) => (
            <div
              key={skill.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1 image-div"
            >
              <img
                className="w-10 h-10 mx-auto my-1"
                src={skill.imgIcon}
                alt="Html icon"
              />
              <p className="my-1">{skill.skillName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
