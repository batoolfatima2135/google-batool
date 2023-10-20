'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">contact/my-contact-details</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Contact: My Contact Details
      </button>
      <p className="text-sm  text-gray-600">
        If you&apos;re as passionate about innovative software development
        as I am, then contact me, and let&apos;s
        embark on an exciting adventure through lines of code.
      </p>
      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          I&apos;m constantly on the lookout for new and exciting projects and opportunities.
          If you believe you have something interesting to offer, please don&apos;t hesitate
          to contact me via my email address at
          &nbsp;
          <a href="mailto:batoolfatima2135@gmail.com" className="text-blue-700 underline">batoolfatima2135@gmail.com</a>
           &nbsp;and you can also use the provided form to send me a message directly.
        </p>
        <form
          action="https://formspree.io/f/xrgwjzdp"
          method="POST"
          className="lg:w-5/6 w-full my-3"
        >
          <input type="email" name="email" className="my-2 w-full border border-gray-400 rounded-md p-3 focus:outline-none" placeholder="Enter Email" />

          <textarea name="message" rows="3" placeholder="Enter message" className="my-2 border border-gray-400 w-full rounded-md p-3 focus:outline-none" />

          <button type="submit" className="bg-sky-700 w-full text-white text-center p-2 hover:bg-sky-800 rounded my-4">Send</button>
        </form>
      </div>
    </div>
  );
}
