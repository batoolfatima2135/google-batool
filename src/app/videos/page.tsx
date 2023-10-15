'use client';

import React, { useContext, useState } from 'react';
import { Project, ProjectContext } from '../projectProvider';

export default function Page() {
  const projects = useContext(ProjectContext);


  return (
   
       <div className="lg:m-6 m-2 overflow-x-hidden">
          {projects.map((project, projectindex) =>
            <div key={project.title} className='my-5 py-5'>
               <p className="text-xs text-gray-600 overflow-hidden">
                  {project.github}
                </p>
              <a
                href={project.presentation}
                className='text-blue-600 underline text-xl'
              >
                <p className=" font-medium my-2">
                  {project.title}
                </p>

               
              </a>
              <div className='grid grid-cols-1 lg:grid-cols-2 align-middle justify-center'>
                  <iframe
                    className="col rounded-xl lg:w-full lg:h-60"
                    src={project.presentation}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                <div className="justify-center col  2xl:grid-cols-3 lg:mx-4">
                  <p className='lg:my-0 my-3  '>{project.description}</p>
                  <h3 className="text-sm font-bold mt-1">Techstack:</h3>
                  <div className="flex my-1 overflow-hidden">
                    {project.techstack.map((tech, index) => (
                      <img
                        key={index}
                        src={tech.image}
                        alt={tech.name}
                        className="w-7 lg:w-6"
                      />
                     ))}
                  </div>

                </div>
               </div>
                            
                            
              </div>
)}

</div>
  )}
