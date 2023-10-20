'use client';

import React, { useState } from 'react';

export default function TechnicalSkills() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  const tools = [
    {
      id: 0,
      image: '/techstack/git.png',
      name: 'Git',
    },
    {
      id: 1,
      image: '/techstack/github.png',
      name: 'GitHub',
    },
    {
      id: 2,
      image: '/techstack/stylelint.png',
      name: 'Stylelint',
    },
    {
      id: 3,
      image: '/techstack/eslint.png',
      name: 'ESLint',
    },
    {
      id: 4,
      image: '/techstack/rubocop.png',
      name: 'RuboCop',
    },
    {
      id: 5,
      image: '/techstack/chrome-devtool.png',
      name: 'Chrome dev',
    },
    {
      id: 6,
      image: '/techstack/rest.png',
      name: 'RESTful API',
    }];
  const techstack = [
    {
      id: 0,
      image: '/techstack/html.png',
      name: 'HTML',
    },
    {
      id: 1,
      image: '/techstack/css.png',
      name: 'CSS',
    },
    {
      id: 2,
      image: '/techstack/tailwind.png',
      name: 'Tailwind',
    },
    {
      id: 3,
      image: '/techstack/bootstrap.png',
      name: 'Bootstrap',
    },
    {
      id: 4,
      image: '/techstack/javascript.png',
      name: 'JavaScript',
    },
    {
      id: 5,
      image: '/techstack/jest.png',
      name: 'Jest',
    },
    {
      id: 6,
      image: '/techstack/webpack.png',
      name: 'Webpack',
    },
    {
      id: 7,
      image: '/techstack/react.png',
      name: 'React',
    },
    {
      id: 8,
      image: '/techstack/redux.png',
      name: 'Redux toolkit',
    },
    {
      id: 9,
      image: '/techstack/nextjs.png',
      name: 'Next.js',
    },
    {
      id: 10,
      image: '/techstack/postgresql.png',
      name: 'Postgresql',
    },
    {
      id: 11,
      image: '/techstack/ruby.png',
      name: 'Ruby',
    },
    {
      id: 12,
      image: '/techstack/rspec.png',
      name: 'RSpec',
    },
    {
      id: 13,
      image: '/techstack/rubyonrails.png',
      name: 'Ruby on Rails',
    },
  ];
  return (
    <div>
      <p className="text-sm  text-gray-600">skills/my-technical-skills</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Skills: My Technical Skills Set
      </button>
      <p className="text-sm  text-gray-600">
        JavaScript, React, Redux, Bootstrap, Tailwind, Postgresql, Ruby, Ruby on Rails,
        Bootstrap, next.js, Ruby on Rails, Git, GitHub, Chrome Dev Tools, ESLint, Stylelint, RuboCop
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          I have a strong desire to keep learning new technologies because I believe learning
          should never end. My goal is to keep learning and getting better, but for now,
          here&apos;s a glimpse of my current technical skills.
        </p>
        <div>
          <h2 className=" md:text-lg text-lg font-semibold my-2">Techstack:</h2>
          <div className="grid grid-cols-4 lg:grid-cols-8 justify-center align-middle">
            {techstack.map((tech) => (
              <div className="flex flex-col col items-center mb-4" key={tech.id}>
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-7 lg:w-10"
                />
                <p className="text-sm text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className=" md:text-lg text-lg font-semibold my-2">Tools:</h2>
          <div className="grid grid-cols-4 lg:grid-cols-8 justify-center align-middle">
            {tools.map((tool) => (
              <div className="flex flex-col col items-center mr-3 my-2" key={tool.id}>
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-7 lg:w-10"
                />
                <p className="text-sm text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
