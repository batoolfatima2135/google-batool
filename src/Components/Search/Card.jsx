import Image from 'next/image';
import React from 'react';
import { email, resume, socialLinks } from '@/static/links';

export default function Card() {
  return (

    <div className="border border-r-0 border-y-0 p-8 ">
      <Image
        src="/profile-pic.jpg"
        alt="profile-pic"
        className="rounded-lg"
        width={280}
        height={180}
      />
      <div className=" py-5 my-3 border-y  border-gray-300 ">
        <h1 className=" text-xl mb-3">
          About
        </h1>
        <p className="text-sm">
          Greetings, fellow professionals! I&apos;m
          <b> Batool Fatima Zaidi</b>
          , a software engineer, ready to embark on new challenges.
          I love to think out of the box and love to take challenges.
          From front-end aesthetics to back-end functionalities,
          I strive for excellence in every line of code I write.
        </p>
        <br />
        <p className="text-sm my-1">
          <b>Frontend: </b>
            HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux, GSAP, Tailwind CSS, Bootstrap, MUI, Ant Design <br/>
        </p>
        <p className="text-sm my-1">
          <b>Backend: </b>
          C#, ASP.NET, ABP, Node, REST APIs
        </p>
        <p className="text-sm my-1">
          <b>Databases: </b>
           MySQL, PostgreSQL
        </p>
        <p className="text-sm my-1">
          <b>Testing: </b>
           React testing library, Jest
        </p>
        <p className="text-sm my-1">
          <b>Tools & DevOps: </b>
          Git, GitHub, Chrome Dev Tools, ESlint, Stylelint, AWS, CI/CD, Jira, Confluence

        </p>
        <p className="text-sm my-1">
          <b>Methods: </b>
          Agile/Scrum, TDD, Responsive & mobile-first development, HTTP/REST, SOLID

        </p>

        <p className="text-sm my-1 mt-4">
          <b>Resume: </b>
          <a href={resume} target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600">download</a>
        </p>
        <p className="text-sm my-1">
          <b>Email: </b>
          <a href={email} className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600">batoolfatima2135@gmail.com</a>
        </p>
        <p className="text-sm my-1">
          <b>LinkedIn: </b>
          <a href={socialLinks.linkedIn} target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> in/batoolfatima2135/</a>
        </p>
        <p className="text-sm my-1">
          <b>Github: </b>
          <a href={socialLinks.github} target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> github.com/batoolfatima2135</a>
        </p>
        <p className="text-sm my-1">
          <b>Youtube: </b>
          <a href={socialLinks.youtube} target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> youtube.com/channel/</a>
        </p>
      </div>

    </div>
  );
}
