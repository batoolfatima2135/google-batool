'use client';

import React, { useState } from 'react';

export default function SoftSkills() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  const softSkills = [
    {
      title: '💡 Problem-Solving',
      details: 'I  often encounter complex technical challenges. Being able to analyze problems and devise effective solutions is crucial.',
    },
    {
      title: '🔄 Adaptability',
      details: 'Technology evolves rapidly. I am adaptable and open to learning new languages, frameworks, and tools.',
    },
    {
      title: '🗣️ Communication',
      details: 'Effective communication is essential when working in a team. You need to explain your ideas, share progress, and understand the requirements and feedback from non-technical stakeholders.',
    },
    {
      title: '⏰ Time Management',
      details: 'Balancing front-end and back-end development can be challenging. Good time management ensures you meet deadlines and prioritize tasks effectively.',
    },
    {
      title: '🔍 Attention to Detail',
      details: 'Small mistakes in coding can lead to significant issues. A keen eye for detail is important for writing clean and error-free code.',
    },
    {
      title: '🤝 Collaboration',
      details: 'I often work in multidisciplinary teams. Being a team player and collaborating well with designers, other developers, and project managers is crucial.',
    },
    {
      title: '🎨 Creativity',
      details: ' Understanding the end-user needs and creating user-friendly applications is a key aspect of full stack development.',
    },
    {
      title: '💪 Resilience',
      details: ' Facing technical challenges and bugs is part of the job. Staying patient and resilient in troubleshooting and debugging is important.',
    },
    {
      title: '📚 Continuous Learning',
      details: 'The tech industry is dynamic. That is why I always strive to continuously learn and stay up-to-date with the latest trends and best practices.',
    },
    {
      title: '🤔 Critical Thinking',
      details: 'The ability to evaluate different solutions and make informed decisions is valuable in full stack development.',
    },
    {
      title: '🏆 Leadership',
      details: 'I always thrive in taking the lead or mentoring junior team members.',
    },

  ];
  return (
    <div>
      <p className="text-sm  text-gray-600">skills/my-soft-skills</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Skills: My Soft Skills Set
      </button>
      <p className="text-sm  text-gray-600">
        Remote work, Pair-Programing, Teamwork, Mentoring, Cross-team Collaboration,
        Cross-functional Team Leadership, Project Management, Time Management, Problem-Solving,
        Continuous Learning
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          I am dedicated to enhancing my soft skills, and my journey,
          particularly at Microverse, has allowed me to significantly
          enhance my communication and collaboration abilities.
          I excel in larger teams and multicultural environments,
          and I&apos;m constantly seeking ways to further develop my soft skills.
        </p>
        <ul className="">
          {softSkills.map((skill) => (
            <li key={skill.title} className="my-2">
              <b>
                {skill.title}
                :
              </b>
              <p>{skill.details}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
