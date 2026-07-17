'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Hasnain Ali',
    role: 'Technical Project Manager',
    category: 'Leadership & Ownership',
    quote:
      'Batool consistently demonstrates ownership and accountability. She asks thoughtful questions, validates her approach, and consistently delivers high-quality work on time.',
  },
  {
    name: 'Ali Akbar',
    role: 'Product Manager',
    category: 'Product Collaboration',
    quote:
      'Batool went above and beyond her responsibilities, collaborated across teams, and kept development moving forward. She is a dependable developer with a strong ownership mindset.',
  },
  {
    name: 'Kumail Raza',
    role: 'Technical Manager',
    category: 'Engineering Leadership',
    quote:
      'One of the best hiring decisions I have made. Sharp, dedicated, and highly dependable, she consistently delivers quality outcomes.',
  },
  {
    name: 'Aun Ali',
    role: 'SQA Engineer',
    category: 'Quality & Collaboration',
    quote:
      'Batool consistently emphasized quality throughout the SDLC. Her thorough developer testing reduced bugs and improved collaboration between development and QA teams.',
  },
  {
    name: 'Safdar Abbas',
    role: 'SQA Engineer',
    category: 'Team Collaboration',
    quote:
      'Batool demonstrated strong technical skills, attention to detail, and a proactive approach. She collaborated effectively with QA and ensured high-quality features were delivered on time.',
  },
  {
    name: 'Hammad Rizvi',
    role: 'Software Engineer',
    category: 'Technical Skills',
    quote:
      'Batool is a skilled Full Stack Software Engineer with strong experience in .NET Core, React.js, Next.js, PostgreSQL, and SQL. She writes clean code and solves problems effectively.',
  },
  {
    name: 'Salman Ali',
    role: 'Software Engineer',
    category: 'Mentoring',
    quote:
      'Batool was an outstanding mentor who guided me with patience. She explained complex frontend and backend concepts clearly and created a supportive learning environment.',
  },
];

export default function Testimonials() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <p className="text-sm text-gray-600">
        Achievements/Recommendations-and-testimonials
      </p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => setCollapse(!collapse)}
        type="button"
      >
        Achievements: Recommendations from Colleagues & Leaders
      </button>

      <p className="text-sm text-gray-600">
        Feedback from engineering leaders, teammates, QA engineers, and
        developers I had the opportunity to collaborate and work with.
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 overflow-hidden mt-0 mb-0' : ''
        }`}
      >
        <p className="mb-8 text-gray-600">
          Throughout my professional journey, I have focused on building
          reliable software, collaborating effectively, and continuously
          improving as an engineer. These recommendations reflect my approach to
          ownership, teamwork, quality, and technical excellence.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <p className="text-xs text-gray-500 mb-3">
                {testimonial.category}
              </p>

              <p className="italic text-gray-700 leading-7">
                "{testimonial.quote}"
              </p>

              <div className="mt-6 border-t pt-4">
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.linkedin.com/in/batoolfatima2135/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 transition"
          >
            View all LinkedIn recommendations
          </a>
        </div>
      </div>
    </div>
  );
}
