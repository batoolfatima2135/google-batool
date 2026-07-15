'use client';

import React, { useState } from 'react';

export default function Intro() {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div>
      <p className="text-sm text-gray-600">about/my-brief-introduction</p>

      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={toggleCollapse}
        type="button"
      >
        My Brief Introduction
      </button>

      <p className="text-sm text-gray-600">
        I&apos;m a Software Engineer passionate about building scalable,
        user-focused web applications using modern technologies.
      </p>

      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : 'mb-3'
        } text-gray-600 rounded-md`}
      >
        <p className="my-2">
          👋 Hi, I&apos;m Batool Fatima Zaidi, Software Engineer with a passion
          for building modern, scalable, and high-performing web applications.
        </p>

        <p className="my-2">
          💻 My primary expertise lies in JavaScript, TypeScript, React,
          Next.js, .NET, PostgreSQL, and SQL. I enjoy working across the
          entire development lifecycle, from designing intuitive user
          interfaces to building robust backend services and APIs.
        </p>

        <p className="my-2">
          🚀 I&apos;m passionate about writing clean, maintainable code and
          delivering reliable software. Whether it&apos;s developing new
          features, optimizing application performance, or improving code
          quality, I always strive to create solutions that are scalable,
          efficient, and easy to maintain.
        </p>

        <p className="my-2">
          🏆 Throughout my professional journey, I&apos;ve contributed to
          enterprise-level applications, collaborated with cross-functional
          teams, and helped deliver products that prioritize performance,
          usability, and reliability. I enjoy taking ownership of challenges
          and continuously expanding my technical expertise.
        </p>

        <p className="my-2">
          🤝 Collaboration and continuous learning are at the core of how I
          work. I enjoy partnering with designers, product managers, QA
          engineers, and fellow developers to transform ideas into polished,
          user-centric digital experiences.
        </p>

        <p className="my-2">
          🌱 Technology evolves rapidly, and so do I. I&apos;m always exploring
          new tools, frameworks, and best practices to improve my craft and
          build better software.
        </p>

        <p className="my-2">
          Let&apos;s connect and build something meaningful together!
        </p>
      </div>
    </div>
  );
}