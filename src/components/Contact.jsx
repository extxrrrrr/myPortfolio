import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full pt-10  bg-[hsl(0,0%,80%)] flex justify-center items-center "
    >
      <form
        method="post"
        action="https://getform.io/f/panvzera"
        className="flex flex-col max-w-[620px]"
      >
        <div className="pb-8 sm:text-left pl-[110px]">
          <p className="text-4xl font-bold inline border-b-4 border-[#1877F2] text-gray-800">
            Contact
          </p>
          <p className="text-gray-800 py-4 text-base ml-[-20px]">
            Submit the form below or shoot me an email -
            <span className="font-bold whitespace-nowrap">
              {" "}
              ukrit200@gmail.com
            </span>
          </p>
        </div>
        <input
          className="bg-[hsl(0,100%,100%)] p-2"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="name"
        />
        <input
          className="my-4 p-2 bg-[hsl(0,100%,100%)]"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
        />
        <textarea
          className="bg-[hsl(0,100%,100%)] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-gray-800 border-2 px-4 py-3 my-8 mx-auto items-center border-gray-700 duration-300 Collab-but">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
