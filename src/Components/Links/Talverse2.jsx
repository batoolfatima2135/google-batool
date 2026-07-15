'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function Talverse2() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">Experience/my-talverse-journey</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Experience: My journey at Talverse as a Software Engineer
      </button>
      <p className="text-sm  text-gray-600">
        A new year, a new beginning 🎉. Started <b>&nbsp;2025</b> with a
        promotion to Software Engineer, taking on new challenges and greater
        responsibilities.
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
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
        <p className="my-2">
          Started my journey as an Associate Software Engineer and was later
          promoted to Software Engineer based on my performance and
          contributions. Below are some highlights of my role:
        </p>
        <ul className="list-disc mx-5">
          <li className="my-2">
            Integrated and optimized payment gateway systems, reducing
            transaction failures while improving checkout performance and
            reliability.
          </li>

          <li className="my-2">
            Developed engaging user experiences using React and GSAP by creating
            smooth, interactive animations that enhanced the overall user
            experience.
          </li>

          <li className="my-2">
            Implemented and customized Keycloak-based authentication and
            authorization, strengthening application security and access
            control.
          </li>

          <li className="my-2">
            Worked closely with designers, QA engineers, and product managers to
            deliver high-quality features on time while following Agile
            development practices.
          </li>

          <li className="my-2">
            Wrote clean, maintainable, and reusable code, participated in code
            reviews, and continuously improved the quality and performance of
            production applications.
          </li>
        </ul>
      </div>
    </div>
  );
}
