'use client';

import React, { useState } from 'react';

const softSkills = [
  {
    icon: '💡',
    title: 'Problem Solving',
    details:
      'I enjoy analyzing complex technical challenges and delivering practical, scalable, and maintainable solutions.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    details:
      'Experienced working closely with developers, designers, QA engineers, and product teams in Agile environments.',
  },
  {
    icon: '🗣️',
    title: 'Communication',
    details:
      'I communicate technical concepts clearly, actively participate in discussions, and value constructive feedback.',
  },
  {
    icon: '🔄',
    title: 'Adaptability',
    details:
      'Quick to learn new technologies, frameworks, and development practices to meet evolving project needs.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    details:
      'Passionate about improving my technical skills and staying current with modern technologies and industry best practices.',
  },
  {
    icon: '⏰',
    title: 'Time Management',
    details:
      'Able to prioritize tasks effectively, manage multiple responsibilities, and consistently meet deadlines.',
  },
  {
    icon: '🏆',
    title: 'Leadership',
    details:
      'Comfortable taking ownership of features, driving initiatives, and supporting teammates when needed.',
  },
  {
    icon: '👩‍🏫',
    title: 'Mentoring',
    details:
      'Enjoy sharing knowledge, helping teammates overcome technical challenges, and encouraging collaborative learning.',
  },
  {
    icon: '🚀',
    title: 'Ownership',
    details:
      'Take responsibility for delivering reliable, maintainable, and high-quality software from development to deployment.',
  },
  {
    icon: '⚡',
    title: 'Agile Mindset',
    details:
      'Experienced working in Agile/Scrum teams with iterative development, continuous improvement, and effective collaboration.',
  },
];

export default function SoftSkills() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <p className="text-sm text-gray-600">Skills/soft-skills</p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => setCollapse(!collapse)}
        type="button"
      >
        Skills: My Soft Skills
      </button>

      <p className="text-sm text-gray-600">
        Problem Solving, Team Collaboration, Communication, Leadership,
        Mentoring, Agile/Scrum, Ownership, Adaptability, Time Management,
        Continuous Learning
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 overflow-hidden mt-0 mb-0' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <p className="mb-6">
          I believe great software is built through strong collaboration,
          effective communication, and continuous learning. Throughout my
          professional experience and my time at Microverse, I have worked in
          multicultural and distributed teams where I strengthened my teamwork,
          leadership, and problem-solving skills while delivering high-quality
          software solutions.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {softSkills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">
                <span className="mr-2 text-2xl">{skill.icon}</span>
                {skill.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
