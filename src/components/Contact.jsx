import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[hsl(0,0%,80%)] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/panvzera"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 pl-16">
          <p className="text-4xl font-bold inline border-b-4 border-[#1877F2] text-gray-800">
            Contact
          </p>
          <p className="text-gray-800 py-4 text-base">
            Submit the form below or shoot me an email - ukrit200@gmail.com
          </p>
        </div>
        <input
          className="bg-[hsl(0,100%,100%)] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[hsl(0,100%,100%)]"
          type="email"
          placeholder="Email"
          name="email"
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
