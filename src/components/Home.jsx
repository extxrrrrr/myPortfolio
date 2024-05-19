import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProfilePic from "../assets/Profile.png";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen bg-[hsl(0,0%,80%)] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex justify-left items-left pb-8">
          <img
            className="rounded-md "
            src={ProfilePic}
            alt="Profilepic"
            width={120}
          />
        </div>
        <p className="text-lg justify-center items-center">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1877F2]">
          Ukrit Sunchaisirikul
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-700">
          I'm a Full Stack Developer
        </h2>
        <p className="text-gray-900 py-4 max-w-[700px] text-lg">
          Now I'm looking for a job that will give me work experience so that I
          can develop myself and be of maximum benefit to the organization. If
          you give me a chance to work I will do my best.
        </p>
        <div>
          {" "}
          <button className="text-black group border-2 px-6 py-3 my-2 flex items-center border-gray-700 duration-300 view-div">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
