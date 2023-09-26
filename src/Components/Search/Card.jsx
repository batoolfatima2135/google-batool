import Image from 'next/image';
import React from 'react';

export default function Card() {
  return (

    <div className="border border-r-0 border-y-0 p-8">
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
          <b> Batool Fatima</b>
          , a Full-stack developer, ready to embark on new challenges.
          I love to think out of the box and love to take challenges.
          From front-end aesthetics to back-end functionalities,
          I strive for excellence in every line of code I write.
        </p>
        <br />
        <p className="text-sm my-1">
          <b>Frontend: </b>
          JavaScript, React, Redux, Bootstrap, Tailwind,
        </p>
        <p className="text-sm my-1">
          <b>Backend: </b>
          Postgresql, Ruby, Ruby on Rails
        </p>
        <p className="text-sm my-1">
          <b>Frameworks: </b>
          Bootstrap, next.js, Ruby on Rails
        </p>
        <p className="text-sm my-1">
          <b>Tools & methods: </b>
          Git, GitHub, Chrome Dev Tools
        </p>
        <p className="text-sm my-1">
          <b>Professional: </b>
          Remote work, Pair-Programing, Teamwork, Mentoring
        </p>

        <p className="text-sm my-1 mt-4">
          <b>Resume: </b>
          <a href="./Resume.pdf" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600">download</a>
        </p>
        <p className="text-sm my-1">
          <b>Email: </b>
          <a href="mailto:batoolfatima2135@gmail.com" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer">batoolfatima2135@gmail.com</a>
        </p>
        <p className="text-sm my-1">
          <b>LinkedIn: </b>
          <a href="https://www.linkedin.com/in/batoolfatima2135/" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> in/batoolfatima2135/</a>
        </p>
        <p className="text-sm my-1">
          <b>Github: </b>
          <a href="https://github.com/batoolfatima2135" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> github.com/batoolfatima2135</a>
        </p>
        <p className="text-sm my-1">
          <b>Youtube: </b>
          <a href="https://www.youtube.com/channel/UCFlLhnJS3lXB6JATy8QFrrg" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> youtube.com/channel/</a>
        </p>
      </div>

    </div>

  );
}
