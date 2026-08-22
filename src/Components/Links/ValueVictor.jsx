'use client';

import React, { useState } from 'react';

export default function ValueVictor() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">achievements/value-victor-award</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Achievements: My Value Victor Award
      </button>
      <p className="text-sm  text-gray-600">
        Honored with Talverse's quarterly Value Victor Award for demonstrating
        ownership, resilience, technical excellence, and leadership while
        delivering successful project outcomes and solving complex challenges.
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          🏆 Value Victor Award (Q3 2025) One of my proudest achievements at
          Talverse was receiving the quarterly Value Victor Award. This award
          recognized my ownership, problem-solving mindset, leadership, and the
          impact of my contributions. It was especially meaningful because it
          reflected the trust my team and company placed in my work.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex justify-center">
            <img
              src="/value-victor.jpeg"
              alt="Value Victor"
              className="h-140 rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <img src="/award.jfif" alt="Award" className="h-140 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
