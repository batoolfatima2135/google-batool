'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function NativeBrains() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">
        Experience/my-nativebrains-journey
      </p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Experience: My journey at Native Brains as a MERN Stack Developer
      </button>
      <p className="text-sm  text-gray-600">
        Stepped into the practical world of software development at the end of
        <b>&nbsp;2023</b>, marking the beginning of an exciting journey filled
        with learning, growth, and new challenges.
      </p>
      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <div className="flex my-4 items-center">
          <Image
            src="/native_brains_co_logo.jfif"
            alt="native-brain"
            width={70}
            height={70}
          />
          <div className="mx-4">
            <p className="text-2xl font-bold">Native Brains</p>
            <p className="text-sm text-gray-500">MERN Stack Developer</p>
          </div>
        </div>
        <p className="my-2">
          Started my professional software development journey as a MERN Stack
          Developer, working on React-based applications and building
          responsive, user-friendly interfaces.
        </p>

        <ul className="list-disc mx-5">
          <li className="my-2">
            Developed and implemented responsive UI components, ensuring a
            smooth and consistent user experience across different devices.
          </li>

          <li className="my-2">
            Worked with the MERN stack to develop application features,
            integrate APIs, and contribute to building scalable web solutions.
          </li>

          <li className="my-2">
            Mentored interns by providing technical guidance, answering
            questions, and conducting code reviews to improve their skills.
          </li>

          <li className="my-2">
            Collaborated with team members to troubleshoot issues, implement new
            features, and deliver high-quality software solutions.
          </li>
        </ul>
      </div>
    </div>
  );
}
