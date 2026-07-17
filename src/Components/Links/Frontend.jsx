'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const frontendSkills = [
  { name: 'HTML', icon: '/techstack/html.png' },
  { name: 'CSS', icon: '/techstack/css.png' },
  { name: 'JavaScript', icon: '/techstack/javascript.png' },
  { name: 'TypeScript', icon: '/techstack/typescript.png' },
  { name: 'React', icon: '/techstack/react.png' },
  { name: 'Next.js', icon: '/techstack/nextjs.png' },
  { name: 'Redux', icon: '/techstack/redux.png' },
  { name: 'Tailwind CSS', icon: '/techstack/tailwind.png' },
  { name: 'Bootstrap', icon: '/techstack/bootstrap.png' },
  { name: 'Material UI', icon: '/techstack/mui.png' },
  { name: 'Ant Design', icon: '/techstack/ant-design.png' },
  { name: 'GSAP', icon: '/techstack/gsap.png' },
];

export default function Frontend() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <p className="text-sm text-gray-600">Skills/front-end-skills</p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => setCollapse(!collapse)}
        type="button"
      >
        Skills: My Frontend Skills Set
      </button>

      <p className="text-sm text-gray-600">
        My frontend expertise includes HTML, CSS, JavaScript, TypeScript, React,
        Next.js, and modern UI frameworks, enabling me to build responsive,
        accessible, and high-performance web applications.
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 overflow-hidden mt-0 mb-0' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <p>
          I build modern, responsive, and user-friendly web applications using
          React and Next.js. My experience includes state management with Redux,
          developing reusable UI components, creating responsive layouts with
          Tailwind CSS and Bootstrap, building interfaces with Material UI and
          Ant Design, and implementing smooth animations using GSAP. I also use
          TypeScript to create scalable and maintainable applications.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 my-6">
          {frontendSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center"
            >
              <div className="h-14 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>

              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
