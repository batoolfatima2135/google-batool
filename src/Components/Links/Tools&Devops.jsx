'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const toolsSkills = [
  { name: 'Git', icon: '/techstack/git.png' },
  { name: 'GitHub', icon: '/techstack/github.png' },
  { name: 'Chrome DevTools', icon: '/techstack/chromedevtools.png' },
  { name: 'SonarQube', icon: '/techstack/sonarqube.png' },
  { name: 'ESLint', icon: '/techstack/eslint.png' },
  { name: 'Stylelint', icon: '/techstack/stylelint.png' },
  { name: 'AWS', icon: '/techstack/aws.png' },
  { name: 'Jira', icon: '/techstack/jira.png' },
  { name: 'Confluence', icon: '/techstack/confluence.png' },
];

export default function ToolsDevOps() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <p className="text-sm text-gray-600">Skills/tools-devops</p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => setCollapse(!collapse)}
        type="button"
      >
        Skills: My Tools & DevOps
      </button>

      <p className="text-sm text-gray-600">
        I use modern development tools and DevOps practices to write clean,
        maintainable code, collaborate effectively with teams, and streamline
        the software development lifecycle.
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 overflow-hidden mt-0 mb-0' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <p>
          My workflow includes version control with Git and GitHub, code quality
          tools such as ESLint and Stylelint, browser debugging using Chrome
          DevTools, project collaboration with Jira and Confluence, and
          familiarity with AWS and CI/CD pipelines to support modern application
          development and deployment.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 my-6">
          {toolsSkills.map((skill) => (
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
