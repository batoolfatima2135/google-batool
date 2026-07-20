'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const backendSkills = [
  { name: 'C#', icon: '/techstack/csharp.png' },
  { name: 'ASP.NET', icon: '/techstack/aspnet.png' },
  { name: 'MySQL', icon: '/techstack/mysql.png' },
  { name: 'PostgreSQL', icon: '/techstack/postgresql.png' },
  { name: 'Keycloak', icon: '/techstack/keycloak.png' },
  { name: 'Stripe', icon: '/techstack/stripe.png' },
];

export default function Backend() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <p className="text-sm text-gray-600">Skills/backend-skills</p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => setCollapse(!collapse)}
        type="button"
      >
        Skills: My Backend Skills Set
      </button>

      <p className="text-sm text-gray-600">
        My backend expertise includes C#, ASP.NET, Node.js, REST APIs,
        authentication with Keycloak, payment integration using Stripe, and
        relational databases.
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 overflow-hidden mt-0 mb-0' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <p>
          I develop secure and scalable backend applications using C# and
          ASP.NET while following clean architecture principles and RESTful API
          design. My experience includes building and integrating REST APIs,
          implementing authentication and authorization with Keycloak,
          integrating Stripe for payment processing, and working with MySQL and
          PostgreSQL databases. I also use Node.js to develop reliable backend
          services when needed.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 my-6">
          {backendSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center"
            >
              <div className="h-14 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>

              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
