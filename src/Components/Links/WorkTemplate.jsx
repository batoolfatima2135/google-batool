'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { ProjectContext } from '../../app/projectProvider.tsx';

export default function WorkTemplate({ currentProject }) {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  const projects = useContext(ProjectContext);
  const project = projects.find((project) => project.title === currentProject);
  return (
    <div>
      <p className="text-sm  text-gray-600">
        projects/
        {project.title.toLowerCase().replace(/\s+/g, '-')}
      </p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Project:&nbsp;
        {project.title}
        &nbsp;Project
      </button>
      <p className="text-sm  text-gray-600">
        {project.title}
        &nbsp;is a project that is build with
        &nbsp;
        {project.techstack.map((tech) => tech.techName).join(', ')}
        &nbsp;using tools:&nbsp;
        {project.tools.map((tool) => tool.techName).join(', ')}
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          {project.description}
        </p>
        <div>
          <div>
            <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
              Snapshots
            </h2>
            <div className="grid grid-cols-2">
              {project.images.map((img) => (
                <div className="flex flex-col items-center m-1 lg:m-2" key={img}>
                  <Image
                    src={`/projects_snapshots/${img}`}
                    alt={img}
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="my-5">
            <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
              Techstack
            </h2>
            <div className="grid grid-cols-5 lg:grid-cols-9 justify-center">
              {project.techstack.map((tech) => (
                <div className="flex flex-col items-center m-3" key={tech.id}>
                  <Image
                    src={tech.image}
                    alt={tech.techName}
                    width={35}
                    height={35}
                  />
                  <p className="text-xs lg:text-sm text-center">{tech.techName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="my-3">
            <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
              Tools
            </h2>
            <div className="grid grid-cols-6 lg:grid-cols-9 justify-center">
              {project.tools.map((tool) => (
                <div className="flex flex-col items-center m-3" key={tool.id}>
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={35}
                    height={35}
                  />
                  <p className="text-xs lg:text-sm text-center">{tool.techName}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-3">
            Links
          </h2>
          <div className="lg:flex my-3">
            <h3 className="font-medium">Github:&nbsp;&nbsp;</h3>
            <a
              href={project.github}
              className="underline text-blue-600"
            >
              github/batoolfatima2135/{project.title}
            </a>
          </div>
          {project.live && (
          <div className="lg:flex">
            <h3 className="font-medium">Live:&nbsp;&nbsp;</h3>
            <a href={project.live} className="underline text-blue-600">
              {project.live}
            </a>
          </div>
          )}

        </div>
      </div>
    </div>
  );
}
WorkTemplate.propTypes = {
  currentProject: PropTypes.string.isRequired,
};
