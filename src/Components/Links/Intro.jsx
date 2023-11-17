'use client';

import React, { useState } from 'react';

export default function Intro() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">about/my-brief-introduction</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        My brief introducion
      </button>
      <p className="text-sm  text-gray-600">
        With a passion for crafting innovative digital solutions, I thrive in the dynamic world
        of full stack development.
        Imagine building the digital future, brick by virtual brick – that is what I live for!
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p className="my-2">
          👋 Hello, I&apos;m Batool, and I&apos;m your Full Stack Developer extraordinaire!
        </p>
        <p className="my-2">
          💻 With a passion for crafting innovative digital solutions, I thrive in the dynamic
          world of full stack development. Imagine building the digital future, brick by virtual
          brick – that&apos;s what I live for!
        </p>

        <p className="my-2">
          🚀 I&apos;ve spent countless hours mastering a versatile arsenal of technologies,
          from frontend marvels like React to backend juggernauts like ruby and ruby on rails.
          My code is not just a collection of characters; it&apos;s a symphony of functionality and
          elegance.
        </p>

        <p className="my-2">
          🏆 My journey in the digital realm has seen me breathe life into remarkable projects,
          consistently pushing the boundaries of what&apos;s possible.
          I&apos;m driven by a commitment to
          excellence and an insatiable curiosity for emerging tech trends.
        </p>

        <p className="my-2">
          🤝 Collaboration is in my DNA. I thrive in diverse teams,
          where I bridge the gap between design, frontend, and backend.
          After all, the most remarkable digital experiences are born
          from seamless cooperation.
        </p>
        <p className="my-2">
          Ready to take your digital dreams to the next level?
          Let&apos;s connect and build something extraordinary
          together. The future is digital, and I&apos;m here to shape it.
        </p>
      </div>
    </div>
  );
}
