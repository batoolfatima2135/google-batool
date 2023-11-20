'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Socials from '../../Components/Others/socials';
import { Project, ProjectContext } from '../projectProvider.tsx';

export default function Page() {
  const projects = useContext(ProjectContext);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleDetails = (project: Project, index: number) => {
    setSelectedProject(project);
    setSelectedImage(project.images[index]);
  };

  const close = () => {
    setSelectedProject(null);
  };

  const gridColClass = selectedProject
    ? 'hidden lg:block md:block col-span-3  max-h-screen '
    : 'col-span-5';
  const gridColClassInner = selectedProject ? 'col-span-3' : 'col-span-2';

  return (
    <div className="grid grid-cols-5">
      <div className={` lg:m-7 m-3 overflow-y-auto ${gridColClass}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {projects.map((project) => project.images.map((image, imgindex) => (
            <div key={image} className={gridColClassInner}>
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => toggleDetails(project, imgindex)}
              >
                <img
                  src={`/projects_snapshots/${image}`}
                  alt={`Project ${project.title} Image ${imgindex + 1}`}
                  className="rounded-lg border border-gray-300"
                />
                <p className="text-xs lg:text-base font-medium my-1">
                  {project.title}
                </p>
                <div className="flex my-1 overflow-hidden">
                  {project.techstack.map((tech) => (
                    <img
                      key={tech.id}
                      src={tech.image}
                      alt={tech.techName}
                      className="w-3 lg:w-6 mx-1"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600 overflow-hidden text-left">
                {project.github}
                </p>
              </button>
            </div>
          )))}
        </div>
      </div>

      {/* Project Details Panel */}
      {selectedProject && (
        <div className="col-span-5 lg:col-span-2 md:col-span-2 m-3 overflow-y-auto">
          <button onClick={close} className="float-right p-3">
            <Image
              src="/close.png"
              alt="close"
              className="rounded-lg"
              width={20}
              height={20}
            />
          </button>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src={`/projects_snapshots/${selectedImage}`} alt="" />
            <h3 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
              {selectedProject.title}
            </h3>
            <p>{selectedProject.description}</p>
            <div className="my-5">
              <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
                Techstack
              </h2>
              <div className="grid grid-cols-5">
                {selectedProject.techstack.map((tech) => (
                  <div className="col">
                    <img
                      key={tech.id}
                      src={tech.image}
                      alt={tech.techName}
                      className="w-10 mx-auto my-2"
                    />
                    <p className="text-sm text-center">{tech.techName}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-3">
              <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
                Tools
              </h2>
              <div className="grid grid-cols-5">
                {selectedProject.tools.map((tool) => (
                  <div className="flex flex-col items-center mr-3">
                    <img
                      key={tool.id}
                      src={tool.image}
                      alt={tool.techName}
                      className="w-10 mx-auto my-2"
                    />
                    <p className="text-sm text-center">{tool.techName}</p>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
              Links
            </h2>
            <div className="flex flex-wrap">
              <h3 className="font-medium">Github:&nbsp;&nbsp;</h3>
              <a
                href={selectedProject.github}
                className="underline text-blue-600"
              >
                {selectedProject.github}
              </a>
            </div>
            <div className="flex">
              <h3 className="font-medium">Live:&nbsp;&nbsp;</h3>
              <a
                href={selectedProject.live}
                className="underline text-blue-600"
              >
                {selectedProject.live}
              </a>
            </div>
            <div className="mt-5">
              <Socials />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
