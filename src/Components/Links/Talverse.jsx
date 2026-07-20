'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function Talverse1() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">Experience/my-Talverse-journey</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Experience: My journey at Talverse as a Associate Software Engineer
      </button>
      <p className="text-sm  text-gray-600">
        A new chapter began in<b>&nbsp;2024</b> as I joined Talverse, where I
        embraced new challenges, expanded my skills, and achieved new milestones
        in my professional journey.
      </p>
      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <div className="flex my-4 items-center">
          <Image
            src="/talverse_logo.jfif"
            alt="Talverse"
            width={70}
            height={70}
          />
          <div className="mx-4">
            <p className="text-2xl font-bold">Talverse</p>
            <p className="text-sm text-gray-500">Associate Software Engineer</p>
          </div>
        </div>

        <ul className="list-disc mx-5">
          <li className="my-2">
            Resolved a complex business logic challenge that had been impacting
            project progress. This contribution demonstrated strong
            problem-solving skills and played a key role in my promotion from
            Associate Software Engineer to Software Engineer.
          </li>

          <li className="my-2">
            Built responsive and reusable UI components based on design
            requirements, ensuring a consistent and intuitive user experience.
          </li>

          <li className="my-2">
            Refactored and optimized the frontend codebase using techniques such
            as lazy loading and code splitting, achieving a Lighthouse
            performance score of 85%+ and improving application performance and
            user experience.
          </li>

          <li className="my-2">
            Contributed to backend business logic, developing reliable and
            maintainable solutions for application requirements.
          </li>
        </ul>
      </div>
    </div>
  );
}
