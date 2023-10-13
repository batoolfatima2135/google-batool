"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Socials from "../../Components/Others/socials";
import { Project, ProjectContext } from "../projectProvider";

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
    ? "hidden lg:block md:block col-span-3  max-h-screen "
    : "col-span-5";
  const gridColClassInner = selectedProject ? "col-span-3" : "col-span-2";

  return (
    <div className="grid grid-cols-5">
      <div className={` lg:m-7 m-3 overflow-y-auto ${gridColClass}`}>
        <div className="grid grid-cols-6 gap-4">
          {projects.map((project) =>
            project.images.map((image, imgindex) => (
              <div key={imgindex} className={gridColClassInner}>
                <a
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
                    {project.techstack.map((tech, index) => (
                      <img
                        key={index}
                        src={tech.image}
                        alt={tech.name}
                        className="w-3 lg:w-6"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 overflow-hidden">
                    {project.github}
                  </p>
                </a>
              </div>
            ))
          )}
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
              <div className="flex">
                {selectedProject.techstack.map((tech, index) => (
                  <div className="flex flex-col items-center mr-3">
                    <img
                      key={index}
                      src={tech.image}
                      alt={tech.name}
                      className="w-3 lg:w-10"
                    />
                    <p className="text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-3">
              <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
                Tools
              </h2>
              <div className="flex">
                {selectedProject.tools.map((tool, index) => (
                  <div className="flex flex-col items-center mr-3">
                    <img
                      key={index}
                      src={tool.image}
                      alt={tool.name}
                      className="w-3 lg:w-10"
                    />
                    <p className="text-sm text-center">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="lg:text-xl md:text-lg text-lg font-semibold my-2">
              Links
            </h2>
            <div className="flex">
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
