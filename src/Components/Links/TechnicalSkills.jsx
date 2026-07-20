'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { image: '/techstack/html.png', name: 'HTML' },
      { image: '/techstack/css.png', name: 'CSS' },
      { image: '/techstack/javascript.png', name: 'JavaScript' },
      { image: '/techstack/typescript.png', name: 'TypeScript' },
      { image: '/techstack/react.png', name: 'React' },
      { image: '/techstack/nextjs.png', name: 'Next.js' },
      { image: '/techstack/redux.png', name: 'Redux Toolkit' },
      { image: '/techstack/tailwind.png', name: 'Tailwind CSS' },
      { image: '/techstack/bootstrap.png', name: 'Bootstrap' },
      { image: '/techstack/mui.png', name: 'Material UI' },
      { image: '/techstack/ant-design.png', name: 'Ant Design' },
      { image: '/techstack/gsap.png', name: 'GSAP' },
    ],
  },

  {
    title: 'Backend',
    skills: [
      { image: '/techstack/csharp.png', name: 'C#' },
      { image: '/techstack/aspnet.png', name: 'ASP.NET' },

      { image: '/techstack/mysql.png', name: 'MySQL' },
      { image: '/techstack/postgresql.png', name: 'PostgreSQL' },
      { image: '/techstack/keycloak.png', name: 'Keycloak' },
      { image: '/techstack/stripe.png', name: 'Stripe' },
    ],
  },

  {
    title: 'Tools & DevOps',
    skills: [
      { image: '/techstack/git.png', name: 'Git' },
      { image: '/techstack/github.png', name: 'GitHub' },
      {
        image: '/techstack/chrome-devtool.png',
        name: 'Chrome DevTools',
      },
      { image: '/techstack/jest.png', name: 'Jest' },
      { image: '/techstack/eslint.png', name: 'ESLint' },
      { image: '/techstack/sonarqube.png', name: 'SonarQube' },
      { image: '/techstack/stylelint.png', name: 'Stylelint' },
      { image: '/techstack/aws.png', name: 'AWS' },
      { image: '/techstack/jira.png', name: 'Jira' },
      { image: '/techstack/confluence.png', name: 'Confluence' },
    ],
  },
];

export default function TechnicalSkills() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <p className="text-sm text-gray-600">skills/my-technical-skills</p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => setCollapse(!collapse)}
        type="button"
      >
        Skills: My Technical Skills Set
      </button>

      <p className="text-sm text-gray-600">
        Full Stack Development, Frontend Engineering, Backend Development, REST
        APIs, Database Management, Testing, DevOps Tools, Agile Development
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 overflow-hidden mt-0 mb-0' : 'mb-3'
        } text-gray-600`}
      >
        <p className="mb-6">
          I continuously improve my technical skills by working with modern
          frontend and backend technologies. My experience includes building
          scalable web applications, designing REST APIs, implementing
          authentication and payment solutions, writing maintainable code, and
          following modern development practices.
        </p>

        {skillGroups.map((group) => (
          <div key={group.title} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{group.title}</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-14 flex items-center justify-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <p className="text-sm mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
