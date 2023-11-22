'use client';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ProjectContext } from '../projectProvider.tsx';

export default function Page() {
  const projects = useContext(ProjectContext);

  return (

   <motion.div 
        className="lg:m-6 m-2 overflow-x-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
   >
  {projects.map((project) => (
    // Check if presentation is not empty
    project.presentation && (
      <div key={project.title} className="py-2">
        <a href={project.github} className="text-xs text-gray-600 overflow-hidden hover:underline" target='_blank'>
          {project.github}
        </a>
        <a
          href={project.presentation}
          className="text-blue-600 underline text-xl"
          target='_blank'
        >
          <p className="font-medium mb-2">
            {project.title}
          </p>
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-2 align-middle justify-center">
          <a href={project.presentation} target="_blank" rel="noopener noreferrer">
            <iframe
              className="col rounded-xl lg:w-full lg:h-60"
              src={project.presentation}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </a>
          <div className="justify-center col  2xl:grid-cols-3 lg:mx-4">
            <p className="lg:my-0 my-3">{project.description}</p>
            <h3 className="text-sm font-bold mt-1">Techstack:</h3>
            <div className="flex my-1 overflow-hidden">
              {project.techstack.map((tech) => (
                <img
                  key={tech.id}
                  src={tech.image}
                  alt={tech.techName}
                  className="w-7 lg:w-9 mx-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  ))}
</motion.div>

  );
}
