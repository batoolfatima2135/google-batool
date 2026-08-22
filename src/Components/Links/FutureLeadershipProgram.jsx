'use client';

import { px } from 'framer-motion';
import React, { useState } from 'react';

export default function FutureLeadershipProgram() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">
        achievements/future-leadership-program
      </p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Achievements: Future Leadership Program 2025
      </button>
      <p className="text-sm  text-gray-600">
        Honored to be selected for Talverse's Future Leadership Program,
        investing in leadership, communication, and professional growth.
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          Selected as the Engineering Department representative for Talverse's
          Future Leadership Program 2025, where one employee from each
          department was chosen to participate. Throughout the program, I
          strengthened my leadership, communication, and presentation skills by
          collaborating with peers, delivering presentations, and taking part in
          activities focused on personal and professional growth. Collaborated
          with employees from different departments, gaining valuable insights
          into cross-functional teamwork and leadership.
        </p>
        <div className="flex  mt-5">
          <img
            src="/future-leadership-program.jpeg"
            alt="Value Victor"
            className="rounded-md"
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
