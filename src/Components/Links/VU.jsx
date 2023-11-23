'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function VU() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">education/my-graduation-journey</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Education: My journey at Virtual University of Pakistan
      </button>
      <p className="text-sm  text-gray-600">
        E-Learning Providers,
        the Virtual University, Pakistan&apos;s
        first University based completely on modern Information and Communication Technologies.
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <a href="https://www.vu.edu.pk"  target='_blank' className="my-1">
          <div className="flex my-4 items-center">
            <Image
              src="/vu.png"
              alt="virtual university"
              width={70}
              height={70}
            />
            <p className="mx-4 text-2xl font-bold">
              Virtual University of Pakistan
            </p>
          </div>
        </a>

        <ul className="list-disc list-outside">
          <b> Expected graduation: Nov 2024</b>
          <li className="my-2">
            Doing Associate Degree in Computer Science from  Virtual University of Pakistan.
            This comprehensive two-year program is equipped  with a strong foundation in the
            field of computer science and a wide range of practical skills.
          </li>
          <li className="my-2">
            Learning through an online platform, which not
            only demonstrates my adaptability and self-discipline but also underlines my ability to
            excel in a flexible, technology-driven learning environment.
          </li>
          <li className="my-2">
            Delving into various core areas of computer science,
            including programming languages, data structures, algorithms, and software engineering.
            This educational experience has enriched me with invaluable practical skills,
            particularly in coding, problem-solving, and a deep understanding
            of computer science principles.
          </li>
        </ul>

      </div>
    </div>
  );
}
