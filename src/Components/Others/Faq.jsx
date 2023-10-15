'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Faq() {
  const initialQuestions = [
    {
      id: 1,
      question: 'What motivated you to become a Full Stack Developer?',
      answer:
        'I\'ve always been intrigued by the idea of building things from scratch and seeing them come to life on the web. As a Full Stack Developer, I have the chance to work on both the user interface and the server-side logic, which allows me to create complete, end-to-end solutions. This role also offers continuous learning opportunities, which I find incredibly rewarding.',
      isCollapsed: true,
    },
    {
      id: 2,
      question: 'How do you stay up-to-date with the latest trends and technologies in web development?',
      answer:
        'I\'m a firm believer in continuous learning. To stay current with industry trends, keep an eye on them, participate in online communities like GitHub and Stack Overflow. Additionally, I enjoy experimenting with personal projects that allow me to explore new technologies hands-on. I find that this combination of learning resources keeps me informed and motivated.',
      isCollapsed: true,
    },
    {
      id: 3,
      question: 'Describe your ideal work environment and team dynamic',
      answer: 'My ideal work environment is one that promotes collaboration, values diverse perspectives, and encourages open communication. I thrive in a setting where learning and growth opportunities are available, and work-life balance is respected. I enjoy working with motivated team members to create innovative solutions.',
      isCollapsed: true,
    },
    {
      id: 4,
      question: 'What are the most important qualities for a Full Stack Developer to have?',
      answer: 'The most vital qualities for a Full Stack Developer include versatility in front-end and back-end technologies, problem-solving skills, continuous learning, effective communication, adaptability to new tools, attention to detail, time management, and creativity in solution design.',
      isCollapsed: true,
    },
    {
      id: 5,
      question: 'What sets you apart from other professionals in your field?',
      answer: 'What sets me apart is my self-growth, my fast learning pace, urge to never give up, a passion for innovation, a commitment to detail, extensive experience of working in remote environment, amazing communication and collabrotative skills. I believe these qualities contribute to my ability to deliver exceptional results.',
      isCollapsed: true,
    },
    {
      id: 6,
      question: 'What are your hobbies and intrests?',
      answer: 'Beyond my professional life, I really love cooking and eating ofcourse! 😄 Trying out new recipes and making yummy food is a big hobby of mine. I also enjoy going on food adventures and trying different types of food. Having dinner with my friends is something I really enjoy because it brings us all together and makes great memories. These hobbies make my life more fun and help me appreciate good food and good times with friends.',
      isCollapsed: true,
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const toggleCollapse = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].isCollapsed = !updatedQuestions[index].isCollapsed;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h1 className="text-2xl font-medium my-5">People also ask</h1>
      <div>
        <ul>
          {questions.map((qa, index) => (
            <li key={qa.id}>
              <button
                className="w-full text-left py-3  border-t border-gray-300 flex justify-between"
                onClick={() => toggleCollapse(index)}
                type="button"
              >

                {qa.question}
                {qa.isCollapsed ? (
                  <Image
                    src="/down.PNG"
                    alt="profile-pic"
                    className="m-1"
                    width={25}
                    height={25}
                  />
                ) : (
                  <Image
                    src="/up.PNG"
                    alt="profile-pic"
                    className="m-1"
                    width={25}
                    height={25}
                  />
                ) }

              </button>
              <div
                className={`transition-all duration-300  ${
                  qa.isCollapsed ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3 max-h-96'
                } text-gray-600 rounded-md `}
              >
                <p>{qa.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
