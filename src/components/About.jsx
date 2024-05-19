import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[hsl(0,0%,80%)] ">
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pl-3 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#1877F2] text-gray-800">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl my-8 font-bold">
            <p>Hi. I'm X, nice to meet you. Please take a look around.</p>
          </div>
          <div className="mb-16 py-3">
            <p className="text-lg ">
              I'm 23 years old and Graduated from Khon Kaen University Faculty
              of Business Administration and Accountancy.I'm a Full Stack
              Developer.I changed my career to the Developer field, Got about 4
              months. I love learning more and more about Frontend and Back end.
              Now I'm looking for a job that will give me work experience so
              that I can develop myself and be of maximum benefit to the
              organization. If you give me a chance to work I will do my best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
